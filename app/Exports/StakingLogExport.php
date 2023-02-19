<?php

namespace App\Exports;

use App\Models\Staking\StakingLog;
use Maatwebsite\Excel\Concerns\FromCollection;

class StakingLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return StakingLog::whereIn('id', $this->logs)->get();
    }
}