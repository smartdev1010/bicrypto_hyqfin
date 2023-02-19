<?php

namespace App\Http\Livewire;

use App\Models\WalletsFrozen;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Session;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class WalletsFrozenTable extends DataTableComponent
{

    public string $tableName = 'Frozen Wallets';
    public string $frozen;
    public function mount(string $frozen): void
    {
        $this->frozen = $frozen;
    }
    public function builder(): Builder
    {
        return WalletsFrozen::query();
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('status', 'desc')
            ->setConfigurableAreas([
                'toolbar-right-start' => 'admin.users.walletsFrozen_create_view',
            ])
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No Frozen Wallet found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("User", "user_id")
                ->hideIf(true),
            Column::make("Symbol", "symbol")
                ->searchable()
                ->sortable(),
            Column::make("Text", "text")
                ->hideIf(true),
            Column::make("Balance", "balance")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => getAmount($row->balance)
                )
                ->html(),
            BooleanColumn::make("Status", "status")
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Actions", "id")
                ->collapseOnTablet()
                ->view('admin.users.walletsFrozen_actions_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    ''    => 'Any',
                    '1' => 'Active',
                    '0'  => 'Disabled',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Active',
                    '0'  => 'Disabled',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
        ];
    }
    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'check-circle'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WalletsFrozen::where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->status = 1;
            $item->save();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Frozen Wallets' : 'Frozen Wallet') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WalletsFrozen::where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->status = 0;
            $item->save();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Frozen Wallets' : 'Frozen Wallet') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WalletsFrozen::where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->delete();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Frozen Wallets' : 'Frozen Wallet') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
