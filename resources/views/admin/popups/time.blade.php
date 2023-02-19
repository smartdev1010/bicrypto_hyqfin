@extends('layouts.app')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Bot Timing') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Bot Name') }}</th>
                                <th scope="col">{{ __('Duration') }}</th>
                                <th scope="col">{{ __('Type') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($bot_timings as $bot_timing)
                                <tr>
                                    <td data-label="{{ __('Bot Name') }}">{{ $bot->title }}</td>
                                    <td data-label="{{ __('Duration') }}">{{ $bot_timing->duration }}</td>
                                    <td data-label="{{ __('Type') }}">{{ $bot_timing->type }}</td>
                                    <td data-label="{{ __('Status') }}">
                                        @if ($bot_timing->status == 1)
                                            <span class="badge bg-success">{{ __('Active') }}</span>
                                        @else
                                            <span class="badge bg-warning">{{ __('Disabled') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        <a href="javascript:void(0)" data-id="{{ $bot_timing->id }}"
                                            class="btn btn-icon btn-danger btn-sm removeModalBtn" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('Remove') }}"
                                            onclick="$('#removeModal').find('input[name=id]').val($(this).data('id'));$('#removeModal').modal('show');">
                                            <i class="bi bi-trash"></i>
                                        </a>
                                        <a href="javascript:void(0)" data-id="{{ $bot_timing->id }}"
                                            class="btn btn-icon btn-warning btn-sm editModalBtn" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('Edit') }}"
                                            onclick="$('#editModal').find('input[name=id]').val($(this).data('id'));$('#editModal').modal('show');">
                                            <i class="bi bi-pencil-square"></i>
                                        </a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                                </tr>
                            @endforelse

                        </tbody>
                    </table><!-- table end -->
                </div>
            </div><!-- card end -->
            <div class="mb-1">{{ paginateLinks($bot_timings) }}</div>

        </div>


    </div>

    <div id="newModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('New Bot Duration') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.bot.time.store') }}" method="POST" id="timeUnit">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id" value="{{ $bot->id }}">
                        <input type="hidden" name="type" id="type">
                        <label for="duration">{{ __('Bot Duration') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" id="duration" name="duration"
                                placeholder="Bot Duration" aria-label="Bot Duration" aria-describedby="duration">
                        </div>
                        <label for="duration_unit">{{ __('Duration Unit') }}</label>
                        <div class="dropdown">
                            <button class="btn btn-outline-warning dropdown-toggle w-100" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" id="duration_unitt" name="duration_unitt">
                                {{ __('Select Time Unit') }}
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item"
                                        onclick="$('#duration_unitt').text($(this).text());$('#timeUnit').find('input[name=type]').val($(this).data('type'));"
                                        data-type="Min">{{ __('Minute') }}</a></li>
                                <li><a class="dropdown-item"
                                        onclick="$('#duration_unitt').text($(this).text());$('#timeUnit').find('input[name=type]').val($(this).data('type'));"
                                        data-type="Hour">{{ __('Hour') }}</a></li>
                                <li><a class="dropdown-item"
                                        onclick="$('#duration_unitt').text($(this).text());$('#timeUnit').find('input[name=type]').val($(this).data('type'));"
                                        data-type="Day">{{ __('Day') }}</a></li>
                            </ul>
                        </div>
                        <div class="form-check mt-1">
                            <input class="form-check-input" type="checkbox" data-bs-toggle="toggle" name="status"
                                id="status">
                            <label class="form-check-label" for="is_new">{{ __('is Active') }}?</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Submit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="editModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Edit Bot Duration') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.bot.time.update') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <div class="input-group mb-1">
                            <span class="input-group-text" for="duration">{{ __('Bot Duration') }}</span>
                            <input type="number" class="form-control" id="duration" name="duration"
                                aria-label="Bot Duration" aria-describedby="duration">
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" data-bs-toggle="toggle" name="status"
                                id="status">
                            <label class="form-check-label" for="is_new">{{ __('is Active') }}?</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-warning">{{ __('Edit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="removeModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Remove Bot Duration') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.bot.time.remove') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <p><span class="fw-bold"></span> {{ __('Bot will be removed.') }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ __('Remove') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.bot.index') }}" class="btn btn-primary me-1"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
    <a data-bs-target="#newModal" data-bs-toggle="modal" class="btn btn-primary">
        <i class="bi bi-plus-lg"></i> {{ __('Add New Duration') }}</a>
@endpush
