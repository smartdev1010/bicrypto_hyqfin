<div tabindex="-1" aria-hidden="true" data-modal-placement="center-center"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    id="{{ $getModelIdString() }}">
    <div class="relative w-full flex items-center justify-center h-screen max-w-6xl md:h-4x1">
        <!-- Modal content -->
        <div class="modal-content">
            <form action="{{ $action }}" method="POST" enctype="multipart/form-data"
                id="{{ $getModelIdString() }}form">
                @csrf
                <!-- Modal header -->
                <div class="modal-header">
                    <h3 class="modal-title">
                        {{ $title }}
                    </h3>
                    <button type="button"
                        class="shadow text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="{{ $getModelIdString() }}">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body overflow-y-auto" style="max-height: calc(60vh)">
                    {{ $slot }}
                </div>
                <!-- Modal footer -->
                <div class="modal-footer text-end">
                    @php
                        $disabled = false;
                    @endphp
                    <button type="submit" id="{{ $getModelIdString() }}btn"
                        class="btn btn-outline-{{ $btn }}">
                        <div role="status" id="{{ $getModelIdString() }}spinner" class="hidden">
                            <svg class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 dark:fill-blue-500"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>{{ $submit }}
                    </button>
                    <button data-modal-toggle="{{ $getModelIdString() }}" id="{{ $getModelIdString() }}close"
                        type="button" class="btn btn-outline-secondary">Close</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        $(function() {
            $('#{{ $getModelIdString() }}form').on('submit', function(e) {
                $('#{{ $getModelIdString() }}btn').prop("disabled", true);
                $('#{{ $getModelIdString() }}btn').addClass("focus:outline-none disabled:opacity-50");
                $('#{{ $getModelIdString() }}spinner').removeClass('hidden');
                var frm = $('#{{ $getModelIdString() }}form');
                var formData = new FormData(frm[0]);
                $.ajax({
                    method: 'post',
                    headers: {
                        "X-CSRF-TOKEN": "{{ csrf_token() }}",
                    },
                    url: "{{ $action }}",
                    data: $('#{{ $getModelIdString() }}form').serialize(),
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        notify(response.type, response.message)
                        $('#{{ $getModelIdString() }}btn').prop("disabled", false);
                        $('#{{ $getModelIdString() }}btn').removeClass(
                            "focus:outline-none disabled:opacity-50");
                        $('#{{ $getModelIdString() }}spinner').addClass('hidden');
                        window.livewire.emit('refreshDatatable');
                        $('#{{ $getModelIdString() }}close').click();
                    },
                    error: function(response) {
                        notify(response.type, response.message)
                        $('#{{ $getModelIdString() }}btn').prop("disabled", false);
                        $('#{{ $getModelIdString() }}btn').removeClass(
                            "focus:outline-none disabled:opacity-50");
                        $('#{{ $getModelIdString() }}spinner').addClass('hidden');
                        $('#{{ $getModelIdString() }}close').click();
                    }
                });
                e.preventDefault();
            });
        });
    </script>
</div>
