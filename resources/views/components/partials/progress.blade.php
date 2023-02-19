<div class="my-1">
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="h-2.5 rounded-full" style="width: {{ $percentage }}%;background-color:{{ $color }}">
        </div>
    </div>
    <div class="flex justify-between mt-1">
        <span class="text-xs dark:text-gray-300" style="color:{{ $color }}">{{ $title }}</span>
        <span class="text-xs dark:text-gray-300" style="color:{{ $color }}">{{ $percentage }}%</span>
    </div>
</div>
