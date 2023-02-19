<?php

namespace App\Http\Livewire;

use App\Exports\FundingDepositLogExport;
use App\Exports\FundingWithdrawalLogExport;
use App\Models\Deposit;
use App\Models\Withdrawal;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;

class FundingWithdrawalLogTable extends DataTableComponent
{

    public string $type = '';
    public string $user = '';
    public $gen;
    public function mount(string $type, string $user): void
    {
        $this->type = $type;
        $this->user = $user;
        $this->gen = getGen();
    }

    public function builder(): Builder
    {
        return Withdrawal::query()->with(['user', 'method'])->where('status', '!=', 0);
        // ->where('user_id', '!=', 1)
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
            Column::make("Date", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Trx", "trx")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => strtoupper($row->trx)
                )
                ->html(),
            Column::make("Username", "user_id")
                ->hideIf(request()->routeIs('admin.users.withdrawals') && request()->routeIs('admin.users.withdrawals.method'))
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.users.detail', $row->user_id) . '" class="badge bg-primary bg-' . ($row->user->username ?? 'danger') . '">' . ucfirst($row->user->username ?? 'Account Not Found') . '</a>'
                )
                ->html(),
            Column::make("Method", "method_id")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => (request()->routeIs('admin.users.withdrawals') || request()->routeIs('admin.users.withdrawals')) ? '<a href="' . route('admin.users.withdrawals.method', [$row->method->id, @$this->type ? $this->type : 'all', $this->user]) . '">' . __($row->method->name) . '</a>' : '<a href="' . route('admin.withdraw.method', [$row->method->id, @$this->type ? $this->type : 'all']) . '">' . __($row->method->name) . '</a>'
                )
                ->html(),
            Column::make("Amount", "amount")
                ->view('admin.withdraw.log.amounts'),
            Column::make("Charge", "charge")
                ->hideIf(true),
            Column::make("After Charge", "after_charge")
                ->hideIf(true),
            Column::make("Rate", "rate")
                ->hideIf(true),
            Column::make("Payable", "final_amount")
                ->hideIf(true),
            Column::make("Actions", "id")
                ->view('admin.withdraw.log.actions_view'),
            Column::make("Status", "status")
                ->view('admin.withdraw.log.status_view'),
            Column::make("Info", "status")
                ->view('admin.withdraw.log.info_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '3' => 'Rejected',
                    '2' => 'Pending',
                    '1' => 'Approved',
                ])
                ->options([
                    '' => 'All',
                    '3' => 'Rejected',
                    '2' => 'Pending',
                    '1' => 'Approved',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === '1') {
                        $builder->where('status', 1);
                    } elseif ($value === '2') {
                        $builder->where('status', 2);
                    } elseif ($value === '3') {
                        $builder->where('status', 3);
                    }
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
        return Excel::download(new FundingWithdrawalLogExport($logs), 'funding_withdraw_log.xlsx');
    }
}
