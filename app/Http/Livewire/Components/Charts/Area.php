<?php

namespace App\Http\Livewire\Components\Charts;

use Livewire\Component;

class Area extends Component
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
            case 'total_users':
                $data = auth()->user()->allusers(30);
                break;
            case 'verified_users':
                $data = auth()->user()->verified(30);
                break;
            case 'unverified_users':
                $data = auth()->user()->unverified(30);
                break;
            default:
                break;
        }
        return view('livewire.components.charts.area', [
            'data' => $data,
            'icon' => $this->icon,
            'element' => $this->element,
            'title' => $this->title,
            'tooltip' => $this->tooltip,
            'color' => $this->color,
        ]);
        //     } else {
        //         return view('livewire.components.charts.empty-area');
        //     }
        // } catch (\Exception $e) {
        //     return view('livewire.components.charts.empty-area');
        // }
    }
}
