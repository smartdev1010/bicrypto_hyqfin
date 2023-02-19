@extends('layouts.app')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('locale.Ranks') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('locale.Rank') }}</th>
                                @if (getPlatform('mlm')->type == 'binary')
                                    <th scope="col">{{ __('locale.Business Value (BV)') }}</th>
                                @else
                                    <th scope="col">VIP Rank Requirements</th>
                                @endif
                                <th scope="col">{{ __('locale.Commissions') }}</th>
                                <th scope="col">{{ __('locale.Status') }}</th>
                                <th scope="col">{{ __('locale.Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($plans as $plan)
                                <tr>
                                    <td data-label="{{ __('locale.Rank') }}">{{ $plan->title }}</td>
                                    @if (getPlatform('mlm')->type == 'binary')
                                        <td data-label="{{ __('locale.Business Value (BV)') }}">{{ $plan->bv }}</td>
                                    @else
                                        <td data-label="VIP Rank Requirements">
                                            <div class="fw-bold ">
                                                Directs Required:
                                                <span class="text-success">{{ $plan->direct_required }}</span> Referral
                                            </div>
                                            <div class="fw-bold ">
                                                Deposits Required:
                                                <span class="text-success">{{ $plan->deposits_required }}</span>
                                                {{ getPlatform('mlm')->membership_deposit_currency ?? 'USDT' }}
                                            </div>
                                            <div class="fw-bold ">
                                                BV Required:
                                                <span class="text-success">{{ $plan->bv_required }}</span> BV
                                            </div>
                                            <div class="fw-bold ">
                                                Withdraw Percentage:
                                                <span class="text-success">{{ $plan->margin }}</span> %
                                            </div>
                                        </td>
                                    @endif
                                    <td data-label="{{ __('locale.Network Commission') }}">
                                        @if (getPlatform('mlm')->deposits == 1)
                                            <div class="fw-bold ">{{ __('locale.Referral Deposit') }}: <span
                                                    class="text-success">{{ $plan->deposit_commission }}</span> BV</div>
                                        @endif
                                        @if (getPlatform('mlm')->first_deposit == 1)
                                            <div class="fw-bold ">{{ __('locale.Referral First Deposit') }}: <span
                                                    class="text-success">{{ $plan->ref_commission }}</span> BV</div>
                                        @endif
                                        @if (getPlatform('mlm')->active_first_deposit == 1)
                                            <div class="fw-bold ">{{ __('locale.Active Referral First Deposit') }}: <span
                                                    class="text-success">{{ $plan->active_ref_commission }}</span> BV</div>
                                        @endif
                                        @if (getPlatform('mlm')->trades == 1)
                                            <div class="fw-bold ">{{ __('locale.Trade') }}: <span
                                                    class="text-success">{{ $plan->trade_commission }}</span> BV</div>
                                        @endif
                                        @if (getExt('1')->status == 1 && getPlatform('mlm')->bot_investment == 1)
                                            <div class="fw-bold ">{{ __('locale.Bot Investment') }}: <span
                                                    class="text-success">{{ $plan->bot_commission }}</span> BV</div>
                                        @endif
                                        @if (getExt('2')->status == 1 && getPlatform('mlm')->ico_purchase == 1)
                                            <div class="fw-bold ">{{ __('locale.Token ICO Purchase') }}: <span
                                                    class="text-success">{{ $plan->ico_commission }}</span> BV</div>
                                        @endif
                                        @if (getExt('4')->status == 1)
                                            @if (getPlatform('mlm')->forex_deposit == 1)
                                                <div class="fw-bold ">{{ __('locale.Forex Deposit Commission') }}: <span
                                                        class="text-success">{{ $plan->forex_commission }}</span> BV</div>
                                            @endif
                                            @if (getPlatform('mlm')->forex_investment == 1)
                                                <div class="fw-bold ">{{ __('locale.Forex Investment Commission') }}: <span
                                                        class="text-success">{{ $plan->forex_investment_commission }}</span>
                                                    BV
                                                </div>
                                            @endif
                                        @endif
                                        @if (getExt('6')->status == 1 && getPlatform('mlm')->staking == 1)
                                            <div class="fw-bold ">Staking: <span
                                                    class="text-success">{{ $plan->staking }}</span> BV</div>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('locale.Status') }}">
                                        @if ($plan->status == 1)
                                            <span class="badge bg-success">{{ __('locale.Active') }}</span>
                                        @else
                                            <span class="badge bg-warning">{{ __('locale.Disabled') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('locale.Action') }}">
                                        <a href="javascript:void(0)" data-id="{{ $plan->id }}"
                                            class="btn btn-icon btn-danger btn-sm removeModalBtn" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('locale.Remove') }}"
                                            onclick="$('#removeModal').find('input[name=id]').val($(this).data('id'));$('#removeModal').modal('show');">
                                            <i class="bi bi-trash"></i>
                                        </a>
                                        <a href="{{ route('admin.mlm.edit', $plan->id) }}"
                                            class="btn btn-icon btn-warning btn-sm" data-bs-toggle="tooltip"
                                            data-bs-placement="top" title="{{ __('locale.Edit') }}">
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
            <div class="mb-1">{{ paginateLinks($plans) }}</div>
        </div>
    </div>
    <div id="removeModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('locale.Are you sure want to remove?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.mlm.remove') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <p><span class="fw-bold"></span> {{ __('locale.Rank will be removed.') }}</p>
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
@endsection

{{-- @push('breadcrumb-plugins')
    <a href="{{ route('admin.mlm.new') }}" class="btn btn-primary"><i class="bi bi-plus-lg"></i>
        {{ __('locale.New Rank') }}</a>
@endpush --}}
