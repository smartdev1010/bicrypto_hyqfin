<?php

namespace App\Http\Livewire\Components\Nav;

use Livewire\Component;

class Profile extends Component
{
    public function render()
    {
        $user = auth()->user();
        return view('livewire.components.nav.profile', compact('user'));
    }
}
