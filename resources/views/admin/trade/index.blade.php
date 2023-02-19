@extends('layouts.admin')
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">{{ __('Trade Settings') }}</h4>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('ID') }}</th>
                                <th scope="col">{{ __('Time') }}</th>
                                <th scope="col">{{ __('Unit') }}</th>
                                <th scope="col">{{ __('Created Date') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($trades as $trade)
                                <tr>
                                    <td data-label="{{ __('ID') }}">{{ __($loop->iteration) }}</td>
                                    <td data-label="{{ __('Time') }}">{{ __($trade->time) }}</td>
                                    <td data-label="{{ __('Unit') }}" class="text-uppercase">{{ __($trade->unit) }}
                                    </td>
                                    <td data-label="{{ __('Created Date') }}">
                                        {{ __(showDateTime($trade->created_at, 'd M Y')) }}</td>
                                    <td data-label="{{ __('Action') }}">
                                        <button class="btn-icon btn-primary rounded-2 update" data-bs-toggle="modal"
                                            data-bs-target="#updateModal" data-id="{{ $trade->id }}"
                                            data-time="{{ $trade->time }}" data-unit="{{ $trade->unit }}"><i
                                                class="bi bi-pencil-square"></i></button>
                                        <button class="btn-icon btn-danger rounded-2 delete" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal" data-id="{{ $trade->id }}"><i
                                                class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="mb-1">{{ paginateLinks($trades) }}</div>

        </div>
    </div>

    <div class="modal fade text-start" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Add Trade Setting') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.trade.store') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <div class="col mb-1">
                            <label for="time" class="form-control-label fw-bold">{{ __('Time') }}</label>
                            <input type="text" class="form-control" id="time" name="time"
                                value="{{ old('time') }}" placeholder="{{ __('Time') }}" required>
                        </div>

                        <div class="col mb-1">
                            <label for="unit" class="form-control-label fw-bold">{{ __('Unit') }}</label>
                            <select class="form-control" id="unit" name="unit" required="">
                                <option value="">{{ __('Select Unit') }}</option>
                                <option value="seconds">{{ __('Seconds') }}</option>
                                <option value="minutes">{{ __('Minutes') }}</option>
                                <option value="hours">{{ __('Hours') }}</option>
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Save') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <div id="updateModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Update Trade Setting') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.trade.update') }}" method="POST">
                    @csrf
                    <input type="hidden" id="id" name="id">
                    <div class="modal-body">
                        <div class="col mb-1">
                            <label for="time" class="form-control-label fw-bold">{{ __('Time') }}</label>
                            <input type="text" class="form-control" id="time" name="time" value=""
                                placeholder="{{ __('Time') }}" required>
                        </div>

                        <div class="col mb-1">
                            <label for="unit" class="form-control-label fw-bold">{{ __('Unit') }}</label>
                            <select class="form-control" id="unit" name="unit" required="">
                                <option>{{ __('Select Unit') }}</option>
                                <option value="seconds">{{ __('Seconds') }}</option>
                                <option value="minutes">{{ __('Minutes') }}</option>
                                <option value="hours">{{ __('Hours') }}</option>
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Update') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="deleteModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Delete Confirmation') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.trade.delete') }}" method="POST">
                    @csrf
                    <input type="hidden" id="idd" name="id">
                    <div class="modal-body">
                        <p>{{ __('Are you sure want to delete this tradeing time') }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Delete') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    <button type="button" class="btn btn-primary " data-bs-toggle="modal"
        data-bs-target="#addModal">{{ __('Add New') }}</button>
@endpush

@push('script')
    <script>
        $(document).on('click', '.delete', function() {
            $('#idd').val($(this).attr('data-id'));
        });
        $(document).on('click', '.update', function() {
            $('#id').val($(this).attr('data-id'));
        });
    </script>
@endpush
