<?php

namespace App\Http\Livewire\Ext\Ico;

use App\Exports\IcoLogExport;
use App\Models\Ico\IcoLogs;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;

class IcoLogTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return IcoLogs::query()->where('user_id', '!=', 1);
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
            Column::make("Token", "ico_id")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.ico.edit', $row->ico_id) . '" class="badge bg-danger">' . ucfirst($row->ico->name) . '</a>'
                )
                ->html(),
            Column::make("Cost", 'cost')
                ->view('extensions.admin.ico.amounts_view'),
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
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->status == 1 ? 'success' : ($row->status == 2 ? 'danger' : 'warning')) . '">' . ($row->status == 1 ? 'Paid' : ($row->status == 2 ? 'Canceled' : 'Pending')) . '</span>'
                )
                ->html(),
            Column::make("Actions", 'id')
                ->view('extensions.admin.ico.actions_view'),
            Column::make("rec_wallet", "rec_wallet")
                ->hideIf(true),
            Column::make("network_symbol", "network_symbol")
                ->hideIf(true),
            Column::make("Amount", "amount")
                ->hideIf(true),
            Column::make("Recieved", "recieved")
                ->hideIf(true),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    '2' => 'Canceled',
                    '1' => 'Paid',
                    '0' => 'Pending',
                ])
                ->options([
                    '' => 'All',
                    '2' => 'Canceled',
                    '1' => 'Paid',
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
        return Excel::download(new IcoLogExport($logs), 'ico_log.xlsx');
    }
}
