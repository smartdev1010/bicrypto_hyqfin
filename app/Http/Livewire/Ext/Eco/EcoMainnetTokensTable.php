<?php

namespace App\Http\Livewire\Ext\Eco;

use App\Models\Eco\EcoMainnetTokens;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Support\Facades\Session;

class EcoMainnetTokensTable extends DataTableComponent
{

    public $chain;
    public function mount($chain): void
    {
        $this->chain = $chain;
    }
    public function builder(): Builder
    {
        return EcoMainnetTokens::query()->with('fees_account_main')->where('chain', $this->chain);
    }
    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('id', 'asc')
            ->setColumnSelectDisabled()
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No results found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true),
            Column::make("Token", "symbol")
                ->view('extensions.admin.eco.views.mainnet_tokens_symbol'),
            Column::make("withdraw_min", "withdraw_min")
                ->hideIf(true),
            Column::make("withdraw_max", "withdraw_max")
                ->hideIf(true),
            Column::make("Withdraw", "withdraw_fee")
                ->view('extensions.admin.eco.views.mainnet_tokens_withdraw'),
            Column::make("chain", "chain")
                ->hideIf(true),
            Column::make("address", "address")
                ->hideIf(true),
            Column::make("Info", "id")
                ->view('extensions.admin.eco.views.mainnet_tokens_info'),
            Column::make('Status')
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => $row->dev != 1 ? ('<span class="badge bg-' . ($row->status == 1 ? 'success' : 'danger') . '">' . ($row->status == 1 ? 'Active' : 'Disabled') . '</span>') : '<span class="badge bg-secondary">In Development</span>'
                )
                ->html(),
            Column::make("postfix", "postfix")
                ->hideIf(true),
            Column::make("address", "address")
                ->hideIf(true),
            Column::make('Actions', 'id')
                ->view('extensions.admin.eco.views.mainnet_tokens_actions'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Active')
                ->setFilterPillTitle('User Status')
                ->setFilterPillValues([
                    '1' => 'Active',
                    '0' => 'Inactive',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Yes',
                    '0' => 'No',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === '1') {
                        $builder->where('status', true);
                    } elseif ($value === '0') {
                        $builder->where('status', false);
                    }
                }),
        ];
    }

    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'eye'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcoMainnetTokens::findOrFail($id);
            $names .= $item->name . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Tokens' : 'Token') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcoMainnetTokens::findOrFail($id);
            $names .= $item->name . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Tokens' : 'Token') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }
}
