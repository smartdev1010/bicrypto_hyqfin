<?php

namespace App\Exports;

use App\Models\ExchangeLogs;
use Maatwebsite\Excel\Concerns\FromCollection;

class TradeLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return ExchangeLogs::whereIn('id', $this->logs)->get();
    }
}