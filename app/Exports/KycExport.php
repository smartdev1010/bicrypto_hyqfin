<?php

namespace App\Exports;

use App\Models\KYC;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Excel as ExcelExcel;
use Maatwebsite\Excel\Facades\Excel;

class KycExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return KYC::whereIn('id', $this->logs)->get();
    }
}
