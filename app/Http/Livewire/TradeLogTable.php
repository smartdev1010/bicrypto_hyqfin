<?php

namespace App\Http\Livewire;

use App\Exports\TradeLogExport;
use App\Models\ExchangeLogs;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;

class TradeLogTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return ExchangeLogs::query()->where('user_id', '!=', 1);
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
            Column::make("symbol", "symbol")
                ->hideIf(true),
            Column::make("Info", "type")
                ->collapseOnTablet()
                ->view('admin.exchange.info_view'),
            Column::make("Amount", "amount")
                ->collapseOnTablet()
                ->view('admin.exchange.amount_view'),
            Column::make("Filling", "filled")
                ->view('admin.exchange.filling_view'),
            Column::make("stopPrice", "stopPrice")
                ->hideIf(true),
            Column::make("side", "side")
                ->hideIf(true),
            Column::make("cost", "cost")
                ->hideIf(true),
            Column::make("average", "average")
                ->hideIf(true),
            Column::make("price", "price")
                ->hideIf(true),
            Column::make("remaining", "remaining")
                ->hideIf(true),
            Column::make("fee", "fee")
                ->hideIf(true),
            Column::make("Status", "status")
                ->view('admin.exchange.status_view'),
            Column::make("Date", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    ''    => 'Any',
                    '1' => 'Completed',
                    '0'  => 'Pending',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Completed',
                    '0'  => 'Pending',
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
        return Excel::download(new TradeLogExport($logs), 'trade_log.xlsx');
    }
}
