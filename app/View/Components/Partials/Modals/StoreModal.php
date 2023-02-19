<?php

namespace App\View\Components\Partials\Modals;

use Illuminate\View\Component;

class StoreModal extends Component
{
    public $title = '';
    public $action = '#';
    public $submit = 'Submit';
    public $id = '';
    public $done = '';
    public $btn = 'success';
    public function __construct($title, $action = '#', $submit = 'Submit', $id = '', $done = '', $btn = 'success')
    {
        $this->title = $title;
        $this->action = $action;
        $this->submit = $submit;
        $this->id = $id;
        $this->done = $done;
        $this->btn = $btn;
    }

    public function getModelIdString(): string
    {
        if ($this->id != '') {
            return $this->id;
        }

        return "modal" . rand(1111, 9999);
    }
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.partials.modals.store-modal');
    }
}
