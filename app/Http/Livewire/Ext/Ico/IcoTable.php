<?php

namespace App\Http\Livewire\Ext\Ico;

use App\Models\Ico\ICO;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\ButtonGroupColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\LinkColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class IcoTable extends DataTableComponent
{

    protected $model = ICO::class;

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
            Column::make("Name", "name")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-primary">' . $row->name . '</span>'
                )
                ->html(),
            Column::make("Symbol", "symbol")
                ->searchable()
                ->collapseOnTablet()
                ->sortable(),
            Column::make("Price", "soft_price")
                ->hideIf(true),
            Column::make("Price", "hard_price")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<div span class="text-danger">Soft Cap: <span class="fw-bold">' . getAmount($row->soft_price) . '</span></div> <div span class="text-success">Hard Cap: <span class="fw-bold">' . getAmount($row->hard_price) . '</span></div>'
                )
                ->html(),
            Column::make("Type", "type")
                ->searchable()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-info">' . ($row->type == 1 ? 'Soft' : 'Soft/Hard') . '</span>'
                )
                ->html(),
            Column::make("Stage", "stage")
                ->hideIf(true),
            Column::make("Status")
                ->view('extensions.admin.ico.status_view'),
            ButtonGroupColumn::make('Actions')
                ->attributes(function ($row) {
                    return [
                        'class' => 'space-x-2',
                    ];
                })
                ->buttons([
                    LinkColumn::make('Edit')
                        ->title(fn ($row) => 'Edit')
                        ->location(fn ($row) => route('admin.ico.edit', $row->id))
                        ->attributes(function ($row) {
                            return [
                                'class' => 'btn btn-outline-warning btn-sm',
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
            $item = ICO::findOrFail($id);
            $names .= $item->name . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Token Offers' : 'Token Offer') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = ICO::findOrFail($id);
            $names .= $item->name . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Token Offers' : 'Token Offer') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        abort_if(Gate::denies('ico_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $names = '';
        $count = count($this->getSelected());
        $path = imagePath()['ico']['path'];
        foreach ($this->getSelected() as $id) {
            $item = ICO::findOrFail($id);
            $names .= $item->name . ', ';
            if ($item->image != null) {
                unlink(public_path('/' . $path . '/' . $item->image));
            }
            $item->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Token Offers' : 'Token Offer') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
