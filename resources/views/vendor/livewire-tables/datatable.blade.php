<x-livewire-tables::wrapper :component="$this">
    @if (Session::has('refresh'))
        @php
            $this->emit('refreshDatatable');
        @endphp
    @endif
    @if (Session::has('alert'))
        @php
            $session = Session::get('alert');
        @endphp
        <div id="alert-additional-content-1" class="alert alert-{{ $session['class'] }}" role="alert">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <i class="mr-2 bi bi-{{ $session['icon'] }}"></i>
                    <span class="sr-only">Info</span>
                    <h3 class="text-lg font-medium {{ $session['class'] }}">{{ $session['header'] }}</h3>
                </div>
                <button type="button" class="alert-btn alert-btn-{{ $session['class'] }}"
                    onclick="document.getElementById('alert-additional-content-1').remove()">
                    <span class="sr-only">Close</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="mt-2 mb-4 text-sm {{ $session['class'] }}">
                {{ $session['message'] }}
            </div>
        </div>
    @endif
    <x-livewire-tables::tools>
        <x-livewire-tables::tools.sorting-pills />
        <x-livewire-tables::tools.filter-pills />
        <x-livewire-tables::tools.toolbar />
    </x-livewire-tables::tools>

    <x-livewire-tables::table>
        <x-slot name="thead">
            <x-livewire-tables::table.th.reorder />
            <x-livewire-tables::table.th.bulk-actions />
            <x-livewire-tables::table.th.row-contents />

            @foreach ($columns as $index => $column)
                @continue($column->isHidden())
                @continue($this->columnSelectIsEnabled() && !$this->columnSelectIsEnabledForColumn($column))
                @continue($this->currentlyReorderingIsDisabled() && $column->isReorderColumn() && $this->hideReorderColumnUnlessReorderingIsEnabled())

                <x-livewire-tables::table.th :column="$column" :index="$index" />
            @endforeach
        </x-slot>

        @if ($this->secondaryHeaderIsEnabled() && $this->hasColumnsWithSecondaryHeader())
            <x-livewire-tables::table.tr.secondary-header :rows="$rows" />
        @endif

        <x-livewire-tables::table.tr.bulk-actions :rows="$rows" />

        @forelse ($rows as $rowIndex => $row)
            <x-livewire-tables::table.tr :row="$row" :rowIndex="$rowIndex">
                <x-livewire-tables::table.td.reorder />
                <x-livewire-tables::table.td.bulk-actions :row="$row" />
                <x-livewire-tables::table.td.row-contents :rowIndex="$rowIndex" />

                @foreach ($columns as $colIndex => $column)
                    @continue($column->isHidden())
                    @continue($this->columnSelectIsEnabled() && !$this->columnSelectIsEnabledForColumn($column))
                    @continue($this->currentlyReorderingIsDisabled() && $column->isReorderColumn() && $this->hideReorderColumnUnlessReorderingIsEnabled())

                    <x-livewire-tables::table.td :column="$column" :colIndex="$colIndex">
                        {{ $column->renderContents($row) }}
                    </x-livewire-tables::table.td>
                @endforeach
            </x-livewire-tables::table.tr>

            <x-livewire-tables::table.row-contents :row="$row" :rowIndex="$rowIndex" />
        @empty
            <x-livewire-tables::table.empty />
        @endforelse

        @if ($this->footerIsEnabled() && $this->hasColumnsWithFooter())
            <x-slot name="tfoot">
                @if ($this->useHeaderAsFooterIsEnabled())
                    <x-livewire-tables::table.tr.secondary-header :rows="$rows" />
                @else
                    <x-livewire-tables::table.tr.footer :rows="$rows" />
                @endif
            </x-slot>
        @endif
    </x-livewire-tables::table>

    <x-livewire-tables::pagination :rows="$rows" />

    @isset($customView)
        @include($customView)
    @endisset
</x-livewire-tables::wrapper>
