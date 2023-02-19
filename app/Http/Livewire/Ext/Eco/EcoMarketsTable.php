<?php

namespace App\Http\Livewire\Ext\Eco;

use App\Models\Eco\EcoMarkets;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Support\Facades\Session;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class EcoMarketsTable extends DataTableComponent
{
    public function builder(): Builder
    {
        return EcoMarkets::query()->where('network', getNativeNetwork());
    }
    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('id', 'asc')
            ->setColumnSelectDisabled()
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No tokens found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true),
            Column::make('Market', 'symbol')
                ->view('extensions.admin.eco.views.markets.info'),
            Column::make("currency", "currency")
                ->hideIf(true),
            Column::make("currency_chain", "currency_chain")
                ->hideIf(true),
            Column::make("pair", "pair")
                ->hideIf(true),
            Column::make("pair_chain", "pair_chain")
                ->hideIf(true),
            Column::make("type", "type")
                ->hideIf(true),
            Column::make("Maker", "maker")
                ->sortable(),
            Column::make("Taker", "taker")
                ->sortable(),
            Column::make("Minimum", "min_amount")
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => getAmount($row->min_amount)
                )
                ->html(),
            Column::make("Maximum", "max_amount")
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => getAmount($row->max_amount)
                )
                ->html(),
            Column::make("network", "network")
                ->hideIf(true),
            BooleanColumn::make('Status', 'status')
                ->sortable(),
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
            $item = EcoMarkets::where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->status = 1;
            $item->save();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Markets' : 'Market') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcoMarkets::where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->status = 0;
            $item->save();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Markets' : 'Market') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcoMarkets::where('id', $id)->first();
            $names .= $item->symbol . ', ';
            $item->delete();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Markets' : 'Market') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
