<div class="flex justify-start items-center">
    <img class="h-8 mr-1"
        src="{{ getImage(imagePath()['staking']['path'] . '/' . $row->icon, imagePath()['staking']['size']) }}"
        alt="{{ __('image') }}">
    <div>
        <div>{{ $row->title }}</div>
        <div>({{ $row->network }})</div>
    </div>
</div>
