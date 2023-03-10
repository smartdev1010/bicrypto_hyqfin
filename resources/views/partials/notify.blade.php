<link rel="stylesheet" href="{{ asset('vendors/iziToast/css/iziToast.min.css') }}">
<script src="{{ asset('vendors/iziToast/js/iziToast.min.js') }}"></script>
@if (session()->has('notify'))
    @foreach (session('notify') as $msg)
        <script>
            "use strict";
            iziToast.{{ $msg[0] }}({
                zindex: 50,
                message: "{{ __($msg[1]) }}",
                position: "topRight",
                animateInside: true,
                drag: true
            });
        </script>
    @endforeach
@endif

@if ($errors->any())
    @php
        $collection = collect($errors->all());
        $errors = $collection->unique();
    @endphp

    <script>
        "use strict";
        @foreach ($errors as $error)
            iziToast.error({
                message: '{{ __($error) }}',
                position: "topRight",
                animateInside: true,
                drag: true
            });
        @endforeach
    </script>
@endif
<script>
    "use strict";

    function notify(status, message) {
        iziToast[status]({
            message: message,
            position: "topRight",
            animateInside: true,
            drag: true
        });
    }
</script>
