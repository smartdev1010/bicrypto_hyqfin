<?php

namespace App\Http\Livewire\Binary;

use App\Exports\BinaryTradeLogExport;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;
use App\Models\TradeLog;

class TradeTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return TradeLog::query()->where('user_id', '!=', 1);
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
            Column::make("Currency", "symbol")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Pair", "pair")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Amount", "amount")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Type", "hilow")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->hilow != null ? 'success' : 'danger') . '">' . ($row->hilow != null ? 'High' : 'Low') . '</span>'
                )
                ->html(),
            Column::make("Result", "result")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->result == 1 ? 'success' : ($row->result == 2 ? 'danger' : ($row->result == 3 ? 'secondary' : 'warning'))) . '">' . ($row->result == 1 ? 'Win' : ($row->result == 2 ? 'Lose' : ($row->result == 3 ? 'Draw' : 'Pending'))) . '</span>'
                )
                ->html(),
            Column::make("Status", "status")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->status == 1 ? 'success' : 'warning') . '">' . ($row->status == 1 ? 'Completed' : 'Running') . '</span>'
                )
                ->html(),
            Column::make("Start Date", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("End Date", "in_time")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->in_time, 'd M, Y h:i:s')
                )
                ->html(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Result', 'result')
                ->setFilterPillTitle('Verified')
                ->options([
                    ''    => 'Any',
                    '3' => 'Draw',
                    '2' => 'Lose',
                    '1' => 'Win',
                    '0'  => 'Pending',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('result', $value);
                }),
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '1' => 'Completed',
                    '0' => 'Running',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Completed',
                    '0' => 'Running',
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
        return Excel::download(new BinaryTradeLogExport($logs), 'binary_trade_log.xlsx');
    }
}
