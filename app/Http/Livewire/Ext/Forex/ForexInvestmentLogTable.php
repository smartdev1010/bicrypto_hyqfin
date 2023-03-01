<?php

namespace App\Http\Livewire\Ext\Forex;

use App\Exports\ForexLogExport;
use App\Models\Forex\ForexLogs;
use App\Models\Forex\ForexInvestments;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;

class ForexInvestmentLogTable extends DataTableComponent
{
    public function builder(): Builder
    {
        return ForexLogs::query()->where('type', 3)->where('user_id', '!=', 1);
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
        // $investments = ForexInvestments::get();
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
            Column::make("Investment Plan", "investment_id")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.forex.investment.edit', $row->investment_id) . '" class="badge bg-danger">' . ucfirst($row->investment->title) . '</a>'
                )
                ->html(),
            Column::make("Amount", "amount")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => getamount($row->amount)
                )
                ->html(),
            Column::make("Profit", "profit")
                ->hideIf(true),
            Column::make("Profit", "result")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                    ->format(
                        fn ($value, $row, Column $column) => ForexInvestments::where('id', $row->investment_id)->first()->roi * $row->amount / 100 * ForexInvestments::where('id', $row->investment_id)->first()->duration
                    )
                ->html(),
            Column::make("Status", "status")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                    ->format(
                        fn ($value, $row, Column $column) => '<span class="badge bg-warning>' . (date_diff(date_create($row->end_date), date_create($row->start_date))->format('%a') >= ForexInvestments::where('id', $row->investment_id)->first()->duration) ? 'Completed' : 'Running' . '</span>'
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
            Column::make("Actions", 'id')
                ->view('extensions.admin.forex.investment.logs_actions_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '2' => 'Adjusted',
                    '1' => 'Completed',
                    '0' => 'Running',
                ])
                ->options([
                    '' => 'All',
                    '2' => 'Adjusted',
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
        return Excel::download(new ForexLogExport($logs), 'forex_investment_log.xlsx');
    }
}