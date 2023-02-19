<?php

namespace App\Http\Livewire\Components\Charts;

use App\Models\Deposit;
use App\Models\Withdrawal;
use Livewire\Component;

class MonthlyTransactions extends Component
{
    public $icon;
    public $route;
    public $element;
    public $title;
    public $tooltip;
    public $colors;
    public $readyToLoad = false;

    public function loadData()
    {
        $this->readyToLoad = true;
    }

    public function render()
    {
        // try {
        //     if ($this->readyToLoad) {
        switch ($this->element) {
            case 'deposits':
                $data = (new Deposit())->deposits_chart(30);
                break;
            case 'withdrawals':
                $data = (new Withdrawal())->withdrawals_chart(30);
                break;
            default:
                break;
        }
        return view('livewire.components.charts.monthly-transactions', [
            'data' => $data,
            'icon' => $this->icon,
            'element' => $this->element,
            'title' => $this->title,
            'tooltip' => $this->tooltip,
            'colors' => $this->colors,
        ]);
        //     } else {
        //         return view('livewire.components.charts.empty-monthly-transactions');
        //     }
        // } catch (\Exception $e) {
        //     return view('livewire.components.charts.empty-monthly-transactions');
        // }
    }
}
