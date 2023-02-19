<?php

namespace App\Exports;

use App\Models\Bot\BotContract;
use Maatwebsite\Excel\Concerns\FromCollection;

class BotLogExport implements FromCollection
{
    public $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return BotContract::whereIn('id', $this->logs)->get();
    }
}