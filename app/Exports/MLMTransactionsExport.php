<?php

namespace App\Exports;

use App\Models\MLM\MLMTransactions;
use Maatwebsite\Excel\Concerns\FromCollection;

class MLMTransactionsExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return MLMTransactions::whereIn('id', $this->logs)->get();
    }
}
