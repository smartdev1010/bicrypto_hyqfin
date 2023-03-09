<?php

namespace App\Http\Livewire\Ext\Bot;

use App\Models\Bot\Bot;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\ButtonGroupColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\LinkColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class BotTable extends DataTableComponent
{

    protected $model = Bot::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id')
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
            Column::make("Title", "title")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-primary">' . $row->title . '</span>'
                )
                ->html(),
            Column::make("Annual Profit Rate", "perc")
                ->hideIf(true),
            Column::make("Uses", "uses")
                ->hideIf(true),
            Column::make("Min Profit", "min_profit")
                ->searchable()
                ->collapseOnMobile()
                ->sortable(),
            Column::make("Max Profit", "max_profit")
                ->searchable()
                ->collapseOnMobile()
                ->sortable(),
            BooleanColumn::make('Status')
                ->collapseOnMobile()
                ->sortable(),
            ButtonGroupColumn::make('Actions')
                ->attributes(function ($row) {
                    return [
                        'class' => 'space-x-2',
                    ];
                })
                ->buttons([
                    LinkColumn::make('Edit')
                        ->title(fn ($row) => 'Edit')
                        ->location(fn ($row) => route('admin.bot.edit', $row->id))
                        ->attributes(function ($row) {
                            return [
                                'class' => 'btn btn-outline-warning btn-sm',
                            ];
                        }),
                    LinkColumn::make('Durations')
                        ->title(fn ($row) => 'Durations')
                        ->location(fn ($row) => route('admin.bot.time.index', $row->id))
                        ->attributes(function ($row) {
                            return [
                                'class' => 'btn btn-outline-info btn-sm',
                            ];
                        }),
                ]),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Active')
                ->setFilterPillTitle('User Status')
                ->setFilterPillValues([
                    '1' => 'Active',
                    '0' => 'Inactive',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Yes',
                    '0' => 'No',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === '1') {
                        $builder->where('status', true);
                    } elseif ($value === '0') {
                        $builder->where('status', false);
                    }
                }),
        ];
    }
    public function bulkActions(): array
    {
        return [
            'activate' => ['title' => 'Activate', 'icon' =>  'eye'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = Bot::findOrFail($id);
            $names .= $item->title . ', ';
            $item->status = 1;
            $item->save();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Bots' : 'Bot') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = Bot::findOrFail($id);
            $names .= $item->title . ', ';
            $item->status = 0;
            $item->save();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Bots' : 'Bot') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        abort_if(Gate::denies('bot_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $names = '';
        $count = count($this->getSelected());
        $path = imagePath()['bot']['path'];
        foreach ($this->getSelected() as $id) {
            $item = Bot::findOrFail($id);
            $names .= $item->title . ', ';
            if ($item->image != null) {
                unlink(public_path('/' . $path . '/' . $item->image));
            }
            $item->delete();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Bots' : 'Bot') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
