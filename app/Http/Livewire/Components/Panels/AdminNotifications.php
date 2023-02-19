<?php

namespace App\Http\Livewire\Components\Panels;

use App\Models\AdminNotification;
use Livewire\Component;

class AdminNotifications extends Component
{
    public $readyToLoad = false;

    public function loadData()
    {
        $this->readyToLoad = true;
    }

    public function render()
    {
        try {
            if ($this->readyToLoad) {
                $adminNotifications = (new AdminNotification())->getCacheUnread(5);
                return view('livewire.components.panels.admin-notifications', [
                    'adminNotifications' => $adminNotifications
                ]);
            } else {
                return <<<'blade'
                    <div wire:init="loadData">
                    </div>
                blade;
            }
        } catch (\Exception $e) {
            return <<<'blade'
                <div wire:init="loadData">
                </div>
            blade;
        }
    }
}
