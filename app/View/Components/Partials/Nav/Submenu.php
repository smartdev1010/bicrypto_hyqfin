<?php

namespace App\View\Components\Partials\Nav;

use Illuminate\View\Component;

class Submenu extends Component
{
    public $submenu;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($submenu)
    {
        $this->submenu = $submenu;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $submenu = $this->submenu;
        return view('components.partials.nav.submenu', compact('submenu'));
    }
}
