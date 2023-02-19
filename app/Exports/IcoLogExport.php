<?php

namespace App\Exports;

use App\Models\Ico\IcoLogs;
use Maatwebsite\Excel\Concerns\FromCollection;

class IcoLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return IcoLogs::whereIn('id', $this->logs)->get();
    }
}