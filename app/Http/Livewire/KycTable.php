<?php

namespace App\Http\Livewire;

use App\Exports\KycExport;
use App\Models\KYC;
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

class KycTable extends DataTableComponent
{
    public function builder(): Builder
    {
        return KYC::query();
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
            Column::make("firstName", "firstName")
                ->hideIf(true),
            Column::make("lastName", "lastName")
                ->hideIf(true),
            Column::make("User", "userId")
                ->view('admin.kyc.views.user'),
            Column::make("Doc Type", "documentType")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => ucfirst($row->documentType)
                )
                ->html(),
            Column::make("Documents", "document")
                ->collapseOnTablet()
                ->view('admin.kyc.views.front'),
            Column::make("", "document2")
                ->collapseOnTablet()
                ->view('admin.kyc.views.back'),
            Column::make("", "document3")
                ->collapseOnTablet()
                ->view('admin.kyc.views.proof'),
            Column::make("lastName", "lastName")
                ->hideIf(true),
            Column::make("Submitted", "created_at")
                ->searchable()
                ->collapseOnTablet()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => showDateTime($row->created_at, 'd M, Y h:i:s')
                )
                ->html(),
            Column::make("Status", "status")
                ->collapseOnMobile()
                ->sortable()
                ->format(
                    fn ($value, $row, Column $column) => '<span class="badge bg-info">' . ucfirst($row->status) . '</span>'
                )
                ->html(),
            Column::make("", "id")
                ->view('admin.kyc.views.actions'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Status')
                ->setFilterPillTitle('Kyc Status')
                ->setFilterPillValues([
                    '' => 'All',
                    'approved' => 'Approved',
                    'missing' => 'Missing',
                    'rejected' => 'Rejected',
                    'pending' => 'Pending',
                ])
                ->options([
                    '' => 'All',
                    'approved' => 'Approved',
                    'missing' => 'Missing',
                    'rejected' => 'Rejected',
                    'pending' => 'Pending',
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
            'export_xlsx' => ['title' => 'Export XLSX', 'icon' =>  'x-lg'],
            'export_xml' => ['title' => 'Export XML', 'icon' =>  'x-lg'],
        ];
    }

    public function export_xlsx()
    {
        $logs = $this->getSelected();
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  'KYCs Exported Successfully'
        ]);

        $this->clearSelected();
        return Excel::download(new KycExport($logs), 'kycs.xlsx');
    }

    public function export_xml()
    {
        $logs = $this->getSelected();
        $data = collect(KYC::whereIn('id', $logs)->select(
            "userId",
            "firstName",
            "lastName",
            "email",
            "phone",
            "dob",
            "gender",
            "address1",
            "address2",
            "city",
            "state",
            "zip",
            "country",
            "telegram",
            "documentType",
            "notes",
            "status"
        )->get()->toArray());
        $array = [];
        foreach ($data as $key => $value) {
            $array['kyc'][] = $value;
        }
        if (!file_exists(storage_path('data/kyc/export.xml'))) {
            if (!storage_path('data')) {
                mkdir(storage_path('data'));
            }
            if (!storage_path('data/kyc')) {
                mkdir(storage_path('data/kyc'));
            }
        }
        XMLFacade::export($array)->usePrettyOutput()->toFile(storage_path('data/kyc/export.xml'));
        Session::flash('alert', [
            'class' => 'success',
            'icon' => 'check-circle', /* danger: exclamation-triangle , success: check-circle, info: exclamation-circle */
            'header' => 'Alert!',
            'message' =>  'KYCs exported successfully to ' . storage_path('data/kyc/export.xml')
        ]);

        return $this->clearSelected();
    }

    public function delete()
    {
        abort_if(Gate::denies('kyc_manager_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $names = '';
        $count = count($this->getSelected());
        foreach ($this->getSelected() as $id) {
            $item = KYC::where('id', $id)->first();
            $names .= $item->firstName . ', ';
            $doc1 = 'assets/images/kyc/' . $item->document;
            $doc2 = 'assets/images/kyc/' . $item->document2;
            $doc3 = 'assets/images/kyc/' . $item->document3;
            if (file_exists($doc1)) {
                File::delete($doc1);
            }
            if (file_exists($doc2)) {
                File::delete($doc2);
            }
            if (file_exists($doc3)) {
                File::delete($doc3);
            }

            $item->delete();
            $item->clearCache();
        }
        Session::flash('alert', [
            'class' => 'danger',
            'icon' => 'exclamation-triangle',
            'header' => 'Alert!',
            'message' =>  '(' . rtrim($names, ", ") . ') ' . ($count > 1 ? 'Kycs' : 'Kyc') . ' Removed Successfully'
        ]);
        $this->clearSelected();
    }
}
