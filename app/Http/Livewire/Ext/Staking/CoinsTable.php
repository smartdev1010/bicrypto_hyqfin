<?php

namespace App\Http\Livewire\Ext\Staking;

use App\Models\Staking\StakingCurrency;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;

class CoinsTable extends DataTableComponent
{
    protected $model = StakingCurrency::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('id', 'desc')
            ->setColumnSelectDisabled()
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No results found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Symbol", "symbol")
                ->hideIf(true),
            Column::make("Coin", "title")
                ->collapseOnTablet()
                ->view('extensions.admin.staking.views.coin'),
            Column::make("Network", "network")
                ->hideIf(true),
            Column::make("Daily profit", "daily_profit")
                ->hideIf(true),
            Column::make("Duration", "period")
                ->collapseOnTablet()
                ->view('extensions.admin.staking.views.duration'),
            Column::make("Profit", "profit")
                ->hideIf(true),
            Column::make("Price", "price")
                ->hideIf(true),
            Column::make("Amount", "amount")
                ->collapseOnTablet()
                ->view('extensions.admin.staking.views.amount'),
            Column::make("Max stake", "max_stake")
                ->hideIf(true),
            Column::make("Limits", "min_stake")
                ->collapseOnTablet()
                ->view('extensions.admin.staking.views.limits'),
            Column::make("Staked", "staked")
                ->hideIf(true),
            Column::make("Apr", "apr")
                ->hideIf(true),
            Column::make("Profit unit", "profit_unit")
                ->hideIf(true),
            BooleanColumn::make("Status", "status")
                ->sortable(),
            Column::make("Method", "method")
                ->hideIf(true),
            Column::make("Icon", "icon")
                ->hideIf(true),
            Column::make("Created at", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Actions", "id")
                ->view('extensions.admin.staking.views.actions'),
        ];
    }


    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '1' => 'Active',
                    '0' => 'Disabled',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Active',
                    '0' => 'Disabled',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
            DateFilter::make('From')
                ->config([
                    'min' => '2020-01-01',
                    'max' => date('y-m-d'),
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('created_at', '>=', $value);
                }),
            DateFilter::make('To')
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('created_at', '<=', $value);
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
        abort_if(Gate::denies('staking_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = StakingCurrency::findOrFail($id);
            $names .= $item->symbol . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Symbols' : 'Symbol') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        abort_if(Gate::denies('staking_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = StakingCurrency::findOrFail($id);
            $names .= $item->symbol . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Symbols' : 'Symbol') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        abort_if(Gate::denies('staking_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $names = '';
        $count = count($this->getSelected());
        $path = imagePath()['staking']['path'];
        foreach ($this->getSelected() as $id) {
            $item = StakingCurrency::findOrFail($id);
            $names .= $item->id . ', ';
            if ($item->icon != null) {
                unlink(public_path('/' . $path . '/' . $item->icon));
            }
            $item->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' => ($count > 1 ? 'Stakes' : 'Stake') . ' ID: (' . rtrim($names, ", ") . ') Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
