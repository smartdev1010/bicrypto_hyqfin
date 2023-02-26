<?php

namespace App\Http\Livewire\Ext\ecommerce;

use App\Models\Ecommerce\EcommerceSlider;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Session;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class SlidersTable extends DataTableComponent
{
    protected $model = EcommerceSlider::class;

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
            Column::make('Image', "image")
                ->collapseOnTablet()
                ->format(
                    fn ($value, $row, Column $column) => '<img src="' . getImage(imagePath()['ecommerce_slider']['path'] . '/' . $row->image, imagePath()['ecommerce_slider']['size']) . '">'
                )
                ->html(),
            Column::make("Title", "title")
                ->sortable(),
            Column::make("Description", "description")
                ->sortable(),
            BooleanColumn::make('Status', 'status')
                ->collapseOnMobile()
                ->sortable(),
            Column::make("Actions", "id")
                ->view('extensions.admin.ecommerce.slider.actions'),
        ];
    }

    public function filters(): array
    {
        return [
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
            'activate' => ['title' => 'Activate', 'icon' =>  'check-circle'],
            'deactivate' => ['title' => 'Deactivate', 'icon' =>  'eye-slash'],
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
        ];
    }
    public function activate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcommerceSlider::where('id', $id)->first();
            $names .= $item->name . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Sliders' : 'slider') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcommerceSlider::where('id', $id)->first();
            $names .= $item->name . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Sliders' : 'Slider') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        $names = '';
        $count = count($this->getSelected());
        $path = imagePath()['ecommerce_slider']['path'];
        foreach ($this->getSelected() as $id) {
            $item = EcommerceSlider::where('id', $id)->first();
            $names .= $item->name . ', ';
            if ($item->icon != null) {
                unlink(public_path('/' . $path . '/' . $item->image));
            }
            $item->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Sliders' : 'Slider') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
