<?php

namespace App\Http\Livewire\Components\Charts;

use App\Models\TradeLog;
use Livewire\Component;

class Monthly extends Component
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
            case 'binary_trades':
                $data = (new TradeLog())->binary(12);
                break;
            default:
                break;
        }
        return view('livewire.components.charts.monthly', [
            'data' => $data,
            'icon' => $this->icon,
            'element' => $this->element,
            'title' => $this->title,
            'tooltip' => $this->tooltip,
            'colors' => $this->colors,
        ]);
        //     } else {
        //         return view('livewire.components.charts.empty-monthly');
        //     }
        // } catch (\Exception $e) {
        //     return view('livewire.components.charts.empty-monthly');
        // }
    }
}
