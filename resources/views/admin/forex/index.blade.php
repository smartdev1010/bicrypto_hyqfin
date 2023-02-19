@extends('layouts.app')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Accounts') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('User') }}</th>
                                <th scope="col">{{ __('Account Details') }}</th>
                                <th scope="col">{{ __('Broker') }}</th>
                                <th scope="col">{{ __('Signal') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($accounts as $account)
                                <tr>
                                    <td class="fw-bold" data-label="{{ __('User') }}">
                                        @if (getUser($account->user_id) != null)
                                            <a href="{{ route('admin.users.detail', $account->user_id) }}">
                                                {{ getUser($account->user_id)->username }}
                                            </a>
                                        @else
                                            <span class="text-danger">Error: Account Removed</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Account Details') }}">
                                        <div class="fw-bold ">MT {{ __('Account') }} No: <span
                                                class="text-success">{{ $account->number }}</span></div>
                                        <div class="fw-bold ">MT {{ __('Password') }}: <span
                                                class="text-success">{{ $account->password }}</span></div>
                                    </td>
                                    <td data-label="{{ __('Broker') }}">
                                        <div class="fw-bold ">MT {{ __('Broker') }}: <span
                                                class="text-success">{{ $account->broker }}</span></div>
                                        <div class="fw-bold ">MT {{ __('Version') }}: <span
                                                class="text-success">{{ $account->mt }}</span></div>
                                        <div class="fw-bold ">MT {{ __('Balance') }}: <span
                                                class="text-success">{{ $account->balance }}</span></div>
                                    </td>
                                    <td class="fw-bold" data-label="{{ __('Signal') }}">
                                        <div class="fw-bold ">{{ __('Signal') }} 1: <span class="text-success">
                                                @if ($account->signal1_id != null)
                                                    {{ getSignal($account->signal1_id)->title }}
                                                @else
                                                @endif
                                            </span></div>
                                        <div class="fw-bold ">{{ __('Signal') }} 2: <span class="text-success">
                                                @if ($account->signal2_id != null)
                                                    {{ getSignal($account->signal2_id)->title }}
                                                @else
                                                @endif
                                            </span></div>
                                        <div class="fw-bold ">{{ __('Signal') }} 3: <span class="text-success">
                                                @if ($account->signal3_id != null)
                                                    {{ getSignal($account->signal3_id)->title }}
                                                @else
                                                @endif
                                            </span></div>
                                        <div class="fw-bold ">{{ __('Signal') }} 4: <span class="text-success">
                                                @if ($account->signal4_id != null)
                                                    {{ getSignal($account->signal4_id)->title }}
                                                @else
                                                @endif
                                            </span></div>
                                        <div class="fw-bold ">{{ __('Signal') }} 5: <span class="text-success">
                                                @if ($account->signal5_id != null)
                                                    {{ getSignal($account->signal5_id)->title }}
                                                @else
                                                @endif
                                            </span></div>
                                    </td>
                                    <td data-label="{{ __('Status') }}">
                                        @if ($account->status == 1)
                                            <span class="badge bg-success">{{ __('Active') }}</span>
                                        @else
                                            <span class="badge bg-warning">{{ __('Disabled') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        <a href="javascript:void(0)" data-id="{{ $account->id }}"
                                            class="btn btn-icon btn-danger btn-sm removeModalBtn" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('Remove') }}"
                                            onclick="$('#removeModal').find('input[name=id]').val($(this).data('id'));$('#removeModal').modal('show');">
                                            <i class="bi bi-trash"></i>
                                        </a>
                                        <a href="{{ route('admin.forex.edit', $account->id) }}"
                                            class="btn btn-icon btn-warning btn-sm" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('Edit') }}">
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
            <div class="mb-1">{{ paginateLinks($accounts) }}</div>
        </div>
    </div>
    <div id="removeModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Are you sure want to remove?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.forex.remove') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <p><span class="fw-bold"></span> {{ __('Account will be removed.') }}</p>
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
    <a href="{{ route('admin.forex.new') }}" class="btn btn-primary"><i class="bi bi-plus-lg"></i>
        {{ __('New Account') }}</a>
@endpush
