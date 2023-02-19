<?php

namespace App\Exports;

use App\Models\Deposit;
use App\Models\Withdrawal;
use Maatwebsite\Excel\Concerns\FromCollection;

class FundingWithdrawalLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return Withdrawal::whereIn('id', $this->logs)->get();
    }
}
