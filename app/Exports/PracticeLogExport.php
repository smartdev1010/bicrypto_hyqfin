<?php

namespace App\Exports;

use App\Models\PracticeLog;
use Maatwebsite\Excel\Concerns\FromCollection;

class PracticeLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return PracticeLog::whereIn('id', $this->logs)->get();
    }
}