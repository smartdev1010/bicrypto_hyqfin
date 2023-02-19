<?php

namespace App\Http\Livewire;

use App\Exports\KycExport;
use App\Models\KYC;
use App\Models\KycTemplates;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Session;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Facades\Excel;
use Flowgistics\XML\XMLFacade;
use Illuminate\Support\Facades\Storage;
use Rappasoft\LaravelLivewireTables\Views\Columns\BooleanColumn;

class KycTemplatesTable extends DataTableComponent
{
    public function builder(): Builder
    {
        return KycTemplates::query();
    }

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
                ->collapseOnTablet()
                ->sortable(),
            BooleanColumn::make("Status", "status")
                ->collapseOnMobile()
                ->sortable(),
            Column::make("", "id")
                ->view('admin.kyc.views.template.actions'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Kyc Status')
                ->setFilterPillValues([
                    '' => 'All',
                    '1' => 'Active',
                    '0' => 'Disabled',
                ])
                ->options([
                    '' => 'All',
                    '1' => 'Active',
                    '0' => 'Disabled',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
        ];
    }
    public function bulkActions(): array
    {
        return [
            'delete' => ['title' => 'Delete', 'icon' =>  'x-lg'],
        ];
    }

    public function delete()
    {
        abort_if(Gate::denies('kyc_manager_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = KycTemplates::where('id', $id)->first();
            $names .= $item->title . ', ';
            $item->delete();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Templates' : 'Template') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
