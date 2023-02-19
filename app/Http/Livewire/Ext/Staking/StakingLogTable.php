<?php

namespace App\Http\Livewire\Ext\Staking;

use App\Exports\StakingLogExport;
use App\Models\Staking\StakingLog;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class StakingLogTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return StakingLog::query()->where('user_id', '!=', 1);
    }
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
            Column::make("Username", "user_id")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.users.detail', $row->user_id) . '" class="badge bg-primary bg-' . ($row->user->username ?? 'danger') . '">' . ucfirst($row->user->username ?? 'Account Not Found') . '</a>'
                )
                ->html(),
            Column::make("Coin", "coin_id")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.staking.edit', $row->coin_id) . '" class="badge bg-danger">' . ucfirst($row->coin->title) . '</a>'
                )
                ->html(),
            Column::make("Total Stake", "staked")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("last_profit", "last_profit")
                ->hideIf(true),
            Column::make("Profit", "total_profit")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<div>Yesterday Profit: <span class="fw-bold text-success">' . (getAmount($row->last_profit) ?? 0) . '</span> USDT</div><div>Total Profit: <span class="fw-bold text-success"> ' . (getAmount($row->total_profit) ?? 0) . ' </span> USDT</div>'
                )
                ->html(),
            Column::make("Start Date", "start_date")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->start_date, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("End Date", "end_date")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->end_date, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Status", "status")
                ->view('extensions.admin.staking.staking_status_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '3' => 'Claimed',
                    '2' => 'Completed',
                    '1' => 'Staking',
                    '0' => 'Canceled',
                ])
                ->options([
                    '' => 'All',
                    '3' => 'Claimed',
                    '2' => 'Completed',
                    '1' => 'Staking',
                    '0' => 'Canceled',
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
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
            'export' => ['title' => 'Export', 'icon' =>  'download'],
        ];
    }

    public function export()
    {
        $logs = $this->getSelected();
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  'Logs Exported Successfully'
        ]);

        $this->clearSelected();
        return Excel::download(new StakingLogExport($logs), 'staking_log.xlsx');
    }
    public function delete()
    {
        abort_if(Gate::denies('staking_log_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = StakingLog::findOrFail($id);
            $names .= $item->id . ', ';
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
