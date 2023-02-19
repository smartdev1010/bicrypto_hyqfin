<?php

namespace App\Http\Livewire\Report;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;
use App\Models\WalletsTransactions;
use Maatwebsite\Excel\Facades\Excel;

class WalletTransactions extends DataTableComponent
{
    protected $model = WalletsTransactions::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No results found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("User", "user_id")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.users.detail', $row->user_id) . '" class="badge bg-primary">' . isset($row->user) ? ucfirst($row->user->username) : 'User not found' . '</a>'
                )
                ->html(),
            Column::make("Symbol", "symbol")
                ->hideIf(true),
            Column::make("Amount", "amount")
                ->hideIf(true),
            Column::make("Amount recieved", "amount_recieved")
                ->hideIf(true),
            Column::make("Charge", "charge")
                ->hideIf(true),
            Column::make("Fees", "fees")
                ->hideIf(true),
            Column::make("To", "to")
                ->hideIf(true),
            Column::make("Type", "type")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->view('admin.reports.views.wallet.type'),
            Column::make("Chain", "chain")
                ->hideIf(true),
            Column::make("Status", "status")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->view('admin.reports.views.wallet.status'),
            Column::make("Trx", "trx")
                ->hideIf(true),
            Column::make("Wallet type", "wallet_type")
                ->hideIf(true),
            Column::make("Address", "address")
                ->hideIf(true),
            Column::make("Details", "details")
                ->sortable()
                ->collapseOnTablet()
                ->view('admin.reports.views.wallet.info'),
            Column::make("Created at", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Actions", "id")
                ->view('admin.reports.views.wallet.actions'),
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
                    '1' => 'Completed',
                ])
                ->options([
                    '' => 'All',
                    '3' => 'Rejected',
                    '2' => 'Pending',
                    '1' => 'Completed',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
            SelectFilter::make('Type')
                ->setFilterPillTitle('Type')
                ->setFilterPillValues([
                    '4' => 'Transfer From Funding',
                    '3' => 'Transfer From Trading',
                    '2' => 'Withdraw',
                    '1' => 'Deposit',
                ])
                ->options([
                    '' => 'All',
                    '4' => 'Transfer From Funding',
                    '3' => 'Transfer From Trading',
                    '2' => 'Withdraw',
                    '1' => 'Deposit',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('type', $value);
                }),
            DateFilter::make('From Date')
                ->config([
                    'min' => '2020-01-01',
                    'max' => date('y-m-d'),
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('created_at', '>=', $value);
                }),
            DateFilter::make('To Date')
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('created_at', '<=', $value);
                }),
        ];
    }

    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'eye'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
            'export' => ['title' => 'Export', 'icon' =>  'download'],
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WalletsTransactions::findOrFail($id);
            $names .= $item->username . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Transactions' : 'Transaction') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WalletsTransactions::findOrFail($id);
            $names .= $item->username . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Transactions' : 'Transaction') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function export()
    {
        $names = '';
        $count = count($this->getSelected());
        $items = $this->getSelected();
        foreach ($this->getSelected() as $id) {
            $names .= WalletsTransactions::findOrFail($id)->username . ', ';
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Transactions' : 'Transaction') . ' Exported Successfully'
        ]);

        $this->clearSelected();
        return Excel::download(new WalletsTransactionsExport($items), 'users.xlsx');
    }

    public function delete()
    {
        abort_if(Gate::denies('user_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = WalletsTransactions::findOrFail($id);
            $names .= $item->username . ', ';
            $item->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Transactions' : 'Transaction') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
