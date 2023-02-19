<?php

namespace App\Http\Livewire\Ext\Eco;

use App\Models\Eco\EcoNetworks;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Support\Facades\Session;

class EcoBlockchainsTable extends DataTableComponent
{

    protected $model = EcoNetworks::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setPerPageAccepted([10, 20, 40, 100])
            ->setPerPage(20)
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
            Column::make("Blockchain", "name")
                ->searchable()
                ->collapseOnTablet()
                ->format(
                    fn ($value, $row, Column $column) => $row->chain == 'ETH' ? $row->name . ' (<span class="fw-bolder">' . $row->chain . '</span>)' . '<span class="text-danger"> *Important to have</span>' : $row->name . ' (<span class="fw-bolder">' . $row->chain . '</span>)'
                )
                ->html()
                ->sortable(),
            Column::make("Chain", "chain")
                ->hideIf(true),
            Column::make("Development", "dev")
                ->hideIf(true),
            Column::make('Status')
                ->view('extensions.admin.eco.views.blockchains_status'),
            Column::make('Actions', 'id')
                ->view('extensions.admin.eco.views.blockchains_actions'),
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
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcoNetworks::findOrFail($id);
            if ($item->dev != 1) {
                $names .= $item->name . ', ';
                $item->status = 1;
                $item->save();
            }
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Blockchains' : 'Blockchain') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcoNetworks::findOrFail($id);
            if ($item->dev != 1) {
                $names .= $item->name . ', ';
                $item->status = 0;
                $item->save();
            }
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Blockchains' : 'Blockchain') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }
}
