<?php

namespace App\Exports;

use App\Models\MLM\MLMBV;
use Maatwebsite\Excel\Concerns\FromCollection;

class BvLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return MLMBV::whereIn('id', $this->logs)->get();
    }
}