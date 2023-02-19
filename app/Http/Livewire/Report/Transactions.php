<?php

namespace App\Http\Livewire\Report;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Transaction;

class Transactions extends DataTableComponent
{
    public function builder(): Builder
    {
        return Transaction::query()->with('user')->orderBy('id', 'desc');
    }
    public function mount(): void
    {
        $this->general = getGen();
    }
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
            Column::make("Date", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("User", "user_id")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.users.detail', $row->user_id) . '" class="badge bg-primary">' . isset($row->user) ? ucfirst($row->user->username) : 'User not found' . '</a>'
                )
                ->html(),
            Column::make("Currency", "currency")
                ->hideIf(true),
            Column::make("Trx type", "trx_type")
                ->hideIf(true),
            Column::make("Amount", "amount")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->view('admin.reports.views.transaction.amount'),
            Column::make("Charge", "Charge")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) =>  getAmount($row->charge) . ' ' . (isset($row->currency) ? $row->currency : $this->general->cur_text)
                )
                ->html(),
            Column::make("Post balance", "post_balance")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) =>  getAmount($row->post_balance) . ' ' . (isset($row->currency) ? $row->currency : $this->general->cur_text)
                )
                ->html(),
            Column::make("Trx", "trx")
                ->hideIf(true),
            Column::make("Details", "details")
                ->sortable(),
            Column::make("TxHash", "txHash")
                ->hideIf(true),
        ];
    }
    public function filters(): array
    {
        return [
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
}
