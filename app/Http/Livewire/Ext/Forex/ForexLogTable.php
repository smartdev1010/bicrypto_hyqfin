<?php

namespace App\Http\Livewire\Ext\Forex;

use App\Exports\ForexLogExport;
use App\Models\Forex\ForexLogs;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;

class ForexLogTable extends DataTableComponent
{
    public function builder(): Builder
    {
        return ForexLogs::query()->where('type', '!=', 3)->where('user_id', '!=', 1);
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
            Column::make("Type", "type")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->type == 1 ? 'success' : 'danger') . '">' . ($row->type == 1 ? 'Deposit' : 'Withdraw') . '</span>'
                )
                ->html(),
            Column::make("Amount", "amount")
                ->searchable()
                ->sortable(),
            Column::make("Date", "created_at")
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Status", "status")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->status == 1 ? 'success' : 'warning') . '">' . ($row->status == 1 ? 'Completed' : 'Pending') . '</span>'
                )
                ->html(),
            Column::make("Actions", 'id')
                ->view('extensions.admin.forex.account_logs_actions_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Type')
                ->setFilterPillTitle('Type')
                ->setFilterPillValues([
                    '1' => 'Deposit',
                    '2' => 'Withdraw',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Deposit',
                    '2' => 'Withdraw',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('type', $value);
                }),
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '1' => 'Completed',
                    '0' => 'Pending',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Completed',
                    '0' => 'Pending',
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
        return Excel::download(new ForexLogExport($logs), 'forex_log.xlsx');
    }
}
