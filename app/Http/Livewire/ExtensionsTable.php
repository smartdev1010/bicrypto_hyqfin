<?php

namespace App\Http\Livewire;

use App\Http\Controllers\Admin\Ext\InstallController;
use App\Models\Extension;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class ExtensionsTable extends DataTableComponent
{

    public function builder(): Builder
    {
        return Extension::query();
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id')
            ->setDefaultSort('id', 'asc')
            ->setFilterLayoutSlideDown()
            ->setOfflineIndicatorEnabled()
            ->setEmptyMessage('No Extension found');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make("Image", "image")
                ->hideIf(true),
            Column::make("Name", "name")
                ->collapseOnTablet()
                ->format(
                    fn ($value, $row, Column $column) => '<div class="flex flex-justify-between items-center"><img src="' . getImage(imagePath()['extensions']['path'] . '/' . $row->image, '36x36') . '"
                    alt="' . __($row->name) . '" class="mr-2 rounded-full" height="64e" width="64">' . '<div>' . $row->name . '</div></div>'
                )
                ->html(),
            Column::make("Description", "description")
                ->hideIf(true),
            Column::make("product_id", "product_id")
                ->hideIf(true),
            Column::make("activated", "activated")
                ->hideIf(true),
            Column::make("installed", "installed")
                ->hideIf(true),
            BooleanColumn::make("Status", "status")
                ->sortable()
                ->view('admin.extension.status_view'),
            Column::make("Actions", "id")
                ->collapseOnTablet()
                ->view('admin.extension.actions_view'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Status')
                ->setFilterPillValues([
                    ''    => 'Any',
                    '1' => 'Active',
                    '0'  => 'Disabled',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Active',
                    '0'  => 'Disabled',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
        ];
    }
}
