<?php

namespace App\Exports;

use App\Models\TradeLog;
use Maatwebsite\Excel\Concerns\FromCollection;

class BinaryTradeLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return TradeLog::whereIn('id', $this->logs)->get();
    }
}