@extends('layouts.app')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('locale.Coins') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('locale.Details') }}</th>
                                <th scope="col">{{ __('locale.Amount') }}</th>
                                <th scope="col">{{ __('locale.Limits') }}</th>
                                <th scope="col">{{ __('locale.Duration') }}</th>
                                <th scope="col">{{ __('locale.Status') }}</th>
                                <th scope="col">{{ __('locale.Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($coins as $coin)
                                <tr>
                                    <td data-label="{{ __('locale.Details') }}">

                                        <div class="row centerize">
                                            <div class="col-md-3 thumb">
                                                <img src="{{ getImage(imagePath()['staking']['path'] . '/' . $coin->icon, imagePath()['staking']['size']) }}"
                                                    alt="{{ __('locale.image') }}">
                                            </div>
                                            <span class="col-md-9 name">
                                                <div class="fw-bold ">{{ __('locale.Title') }}: <span
                                                        class="text-success">{{ $coin->title }}</span></div>
                                                <div class="fw-bold ">{{ __('locale.Symbol') }}: <span
                                                        class="text-success">{{ $coin->symbol }}</span></div>
                                                <div class="fw-bold ">{{ __('locale.Network') }}: <span
                                                        class="text-success">{{ $coin->network }}</span></div>
                                            </span>
                                        </div>
                                    </td>
                                    <td data-label="{{ __('locale.Amount') }}">
                                        <div class="fw-bold ">{{ __('locale.Total Amount') }}: <span
                                                class="text-success">{{ ttz($coin->amount) }}</span>
                                            {{ $coin->symbol }}</div>
                                        <div class="fw-bold ">{{ __('locale.Total Profit') }}: <span
                                                class="text-success">{{ $coin->profit }}</span>%</div>
                                    </td>
                                    <td data-label="{{ __('locale.Limits') }}">
                                        <div class="fw-bold ">{{ __('locale.Minimum Stake') }}: <span
                                                class="text-success">{{ ttz($coin->min_stake) }}</span>
                                            {{ $coin->symbol }}</div>
                                        <div class="fw-bold ">{{ __('locale.Maximum Stake') }}: <span
                                                class="text-success">{{ ttz($coin->max_stake) }}</span>
                                            {{ $coin->symbol }}</div>
                                    </td>
                                    <td class="fw-bold" data-label="{{ __('locale.Duration') }}">
                                        <div class="fw-bold ">{{ __('locale.Days') }}: <span
                                                class="text-success">{{ $coin->period }}</span></div>
                                        <div class="fw-bold ">{{ __('locale.Daily Profit') }}: <span
                                                class="text-success">{{ ttz($coin->daily_profit) }}</span>%</div>

                                    <td data-label="{{ __('locale.Status') }}">
                                        @if ($coin->status == 1)
                                            <span class="badge bg-success">{{ __('locale.Active') }}</span>
                                        @else
                                            <span class="badge bg-warning">{{ __('locale.Disabled') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('locale.Action') }}">
                                        <a href="javascript:void(0)" data-id="{{ $coin->id }}"
                                            class="btn btn-icon btn-danger btn-sm removeModalBtn" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('locale.Remove') }}"
                                            onclick="$('#removeModal').find('input[name=id]').val($(this).data('id'));$('#removeModal').modal('show');">
                                            <i class="bi bi-trash"></i>
                                        </a>
                                        <a href="{{ route('admin.staking.edit', $coin->id) }}"
                                            class="btn btn-icon btn-warning btn-sm" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('locale.Edit') }}">
                                            <i class="bi bi-pencil-square"></i>
                                        </a>
                                        @if ($coin->status == 0)
                                            <button type="button" class="btn btn-icon btn-success btn-sm activateBtn"
                                                data-bs-toggle="modal" data-bs-target="#activateModal"
                                                data-id="{{ $coin->id }}" data-name="{{ __($coin->title) }}"
                                                title="{{ __('locale.Enable') }}">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                        @else
                                            <button type="button" class="btn btn-icon btn-danger btn-sm deactivateBtn"
                                                data-bs-toggle="modal" data-bs-target="#deactivateModal"
                                                data-id="{{ $coin->id }}" data-name="{{ __($coin->title) }}"
                                                title="{{ __('locale.Disable') }}">
                                                <i class="bi bi-eye-slash"></i>
                                            </button>
                                        @endif
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
            <div class="mb-1">{{ paginateLinks($coins) }}</div>
        </div>
    </div>
    <div id="removeModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('locale.Are you sure want to remove?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.staking.remove') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <p><span class="fw-bold"></span> {{ __('locale.coin will be removed.') }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark"
                            data-bs-dismiss="modal">{{ __('locale.Close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ __('locale.Remove') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {{-- ACTIVATE METHOD MODAL --}}
    <div id="activateModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('locale.Staking Currency Activation Confirmation') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.staking.activate') }}" method="POST">
                    @csrf
                    <input type="hidden" name="id">
                    <div class="modal-body">
                        <p>{{ __('locale.Are you sure to activate') }} <span class="fw-bold staking-name"></span>
                            {{ __('locale.Staking Currency') }}?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark"
                            data-bs-dismiss="modal">{{ __('locale.Close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ __('locale.Activate') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    {{-- DEACTIVATE METHOD MODAL --}}
    <div id="deactivateModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('locale.Staking Currency Disable Confirmation') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.staking.deactivate') }}" method="POST">
                    @csrf
                    <input type="hidden" name="id">
                    <div class="modal-body">
                        <p>{{ __('locale.Are you sure to disable') }} <span class="fw-bold staking-name"></span>
                            {{ __('locale.Staking Currency') }}?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark"
                            data-bs-dismiss="modal">{{ __('locale.Close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ __('locale.Disable') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.staking.new') }}" class="btn btn-primary"><i class="bi bi-plus-lg"></i>
        {{ __('locale.New Staking Currency') }}</a>
@endpush
@push('script')
    <script>
        $(function() {
            "use strict";

            $('.activateBtn').on('click', function() {
                var modal = $('#activateModal');
                modal.find('.staking-name').text($(this).data('name'));
                modal.find('input[name=id]').val($(this).data('id'));
            });

            $('.deactivateBtn').on('click', function() {
                var modal = $('#deactivateModal');
                modal.find('.staking-name').text($(this).data('name'));
                modal.find('input[name=id]').val($(this).data('id'));
            });
        });
    </script>
@endpush
