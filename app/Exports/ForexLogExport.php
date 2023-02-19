<?php

namespace App\Exports;

use App\Models\Forex\ForexLogs;
use Maatwebsite\Excel\Concerns\FromCollection;

class ForexLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return ForexLogs::whereIn('id', $this->logs)->get();
    }
}