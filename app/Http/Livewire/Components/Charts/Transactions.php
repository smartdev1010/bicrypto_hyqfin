<?php

namespace App\Http\Livewire\Components\Charts;

use App\Models\ThirdpartyOrders;
use Livewire\Component;

class Transactions extends Component
{
    public $icon;
    public $route;
    public $element;
    public $title;
    public $tooltip;
    public $color;
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
            case 'trades_report':
                $data = (new ThirdpartyOrders())->trades(30);
                break;
            default:
                break;
        }
        return view('livewire.components.charts.transactions', [
            'data' => $data,
            'icon' => $this->icon,
            'element' => $this->element,
            'title' => $this->title,
            'tooltip' => $this->tooltip,
            'color' => $this->color,
        ]);
        //     } else {
        //         return view('livewire.components.charts.empty-transactions');
        //     }
        // } catch (\Exception $e) {
        //     return view('livewire.components.charts.empty-transactions');
        // }
    }
}
