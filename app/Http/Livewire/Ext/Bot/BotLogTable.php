<?php

namespace App\Http\Livewire\Ext\Bot;

use App\Exports\BotLogExport;
use App\Models\Bot\BotContract;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;

class BotLogTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return BotContract::query()->where('user_id', '!=', 1);
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
            Column::make("Bot", "bot_id")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<a href="' . route('admin.bot.edit', $row->bot_id) . '" class="badge bg-danger">' . ucfirst($row->bot->title) . '</a>'
                )
                ->html(),
            Column::make("Currency", "symbol")
                ->hideIf(true),
            Column::make("Pair", "pair")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => $row->symbol . '/' . $row->pair
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
            Column::make("Result", "result")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->result == 1 ? 'success' : ($row->result == 2 ? 'danger' : ($row->result == 3 ? 'secondary' : 'warning'))) . '">' . ($row->result == 1 ? '+' . getamount($row->profit) : ($row->result == 2 ? '-' . getamount($row->profit) : ($row->result == 3 ? '0' : 'Running'))) . '</span>'
                )
                ->html(),
            Column::make("Status", "status")
                ->searchable()
                ->sortable()
                ->collapseOnMobile()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-' . ($row->status == 1 ? 'success' : ($row->status == 2 ? 'primary' : 'warning')) . '">' . ($row->status == 1 ? 'Completed' : ($row->status == 2 ? 'Adjusted' : 'Running')) . '</span>'
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
            Column::make("End Date", "end_date")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->end_date, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Actions", "id")
                ->collapseOnMobile()
                ->view('extensions.admin.bot.actions_view'),
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
        return Excel::download(new BotLogExport($logs), 'bot_log.xlsx');
    }
}
