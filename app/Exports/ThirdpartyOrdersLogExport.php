<?php

namespace App\Exports;

use App\Models\ThirdpartyOrders;
use Maatwebsite\Excel\Concerns\FromCollection;

class ThirdpartyOrdersLogExport implements FromCollection
{
    public $users;

    public function __construct($users)
    {
        $this->users = $users;
    }

    public function collection()
    {
        return ThirdpartyOrders::whereIn('id', $this->users)->get();
    }
}