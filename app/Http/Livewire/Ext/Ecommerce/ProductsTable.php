<?php

namespace App\Http\Livewire\Ext\ecommerce;

use App\Models\Ecommerce\EcommerceProducts;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateFilter;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class ProductsTable extends DataTableComponent
{
    public function builder(): Builder
    {
        return EcommerceProducts::query()->with('category');
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
            Column::make("Thumbnail", "thumbnail")
                ->sortable(),
            Column::make("Category", "category_id")
                ->format(
                    fn ($value, $row, Column $column) => '<a class="badge bg-primary" href="' . route('admin.ecommerce.category.index') . '">' . $row->category->name . '</a>'
                )
                ->html(),
            Column::make("Name", "name")
                ->sortable(),
            Column::make("Description", "description")
                ->sortable(),
            Column::make("Price", "price")
                ->sortable(),
            BooleanColumn::make("Hot Deals", "hot")
                ->collapseOnMobile()
                ->sortable(),
            BooleanColumn::make('Featured', 'featured')
                ->collapseOnMobile()
                ->sortable(),
            BooleanColumn::make('Status', 'status')
                ->collapseOnMobile()
                ->sortable(),
            Column::make("Actions", "id")
                ->view('extensions.admin.ecommerce.products.actions'),
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
            $item = EcommerceCategory::where('id', $id)->first();
            $names .= $item->name . ', ';
            $item->status = 1;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Categories' : 'Category') . ' Activated Successfully'
        ]);

        $this->clearSelected();
    }

    public function deactivate()
    {
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = EcommerceCategory::where('id', $id)->first();
            $names .= $item->name . ', ';
            $item->status = 0;
            $item->save();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Categories' : 'Category') . ' Deactivated Successfully'
        ]);
        $this->clearSelected();
    }

    public function delete()
    {
        $names = '';
        $count = count($this->getSelected());
        $path = imagePath()['ecommerce_category']['path'];
        foreach ($this->getSelected() as $id) {
            $item = EcommerceCategory::where('id', $id)->first();
            $names .= $item->name . ', ';
            if ($item->icon != null) {
                unlink(public_path('/' . $path . '/' . $item->icon));
            }
            $item->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Categories' : 'Category') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
