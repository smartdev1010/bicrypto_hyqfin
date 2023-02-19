<?php

namespace App\View\Components\Partials;

use Illuminate\View\Component;

class Progress extends Component
{
    public $title;
    public $percentage;
    public $color;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($title, $percentage, $color)
    {

        $this->title = $title;
        $this->percentage = $percentage;
        $this->color = $color;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $title = $this->title;
        $percentage = $this->percentage;
        $color = $this->color;
        return view('components.partials.progress', compact('title', 'percentage', 'color'));
    }
}
