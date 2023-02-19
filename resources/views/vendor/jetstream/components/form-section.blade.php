@props(['submit'])

<div {{ $attributes->merge(['class' => 'md:grid md:grid-cols-3 md:gap-6']) }}>
    <x-jet-section-title>
        <x-slot name="title">{{ $title }}</x-slot>
        <x-slot name="description">{{ $description }}</x-slot>
    </x-jet-section-title>

    <div class="mt-5 md:mt-0 md:col-span-2">
        <form wire:submit.prevent="{{ $submit }}">
            <div class="card">
                <div class="card-body">
                    <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {{ $form }}
                    </div>
                </div>
                @if (isset($actions))
                    <div class="card-footer">
                        {{ $actions }}
                    </div>
                @endif
            </div>

        </form>
    </div>
</div>
