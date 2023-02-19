@extends('layouts.app')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Markets') }}</h4>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-success me-1" data-bs-toggle="modal"
                            data-bs-target="#create">{{ __('Create Market') }}</button>
                        <div class="card-search"></div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Market') }}</th>
                                <th scope="col">{{ __('Fees') }}</th>
                                <th scope="col">{{ __('Limits') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($markets as $market)
                                <tr>
                                    <td data-label="{{ __('Market') }}">
                                        <div>{{ __('Symbol') }}: <span class="fw-bold">{{ $market->symbol }}</span>
                                        </div>
                                        <div>{{ __('Type') }}: <span class="fw-bold">{{ $market->type }}</span>
                                        </div>
                                    </td>
                                    <td data-label="{{ __('Market') }}">
                                        <div>{{ __('Maker') }}: <span class="fw-bold">{{ ttz($market->maker) }}
                                                %</span></div>
                                        <div>{{ __('Taker') }}: <span class="fw-bold">{{ ttz($market->taker) }}
                                                %</span></div>
                                    </td>
                                    <td data-label="{{ __('Market') }}">
                                        <div>{{ __('Minimum') }}: <span
                                                class="fw-bold">{{ ttz($market->min_amount) }}</span></div>
                                        <div>{{ __('Maximum') }}: <span
                                                class="fw-bold">{{ ttz($market->max_amount) }}</span></div>
                                    </td>
                                    <td data-label="{{ __('Status') }}">
                                        <input type="checkbox" data-onstyle="success" data-offstyle="danger"
                                            data-toggle="toggle" data-on="Active" data-off="Disabled" data-width="100%"
                                            data-size="mini" name="status" id="status"
                                            @if ($market->status == 1) checked @endif
                                            onchange="ChangeStatus({{ $market->id }}, {{ $market->status === 1 ? 0 : 1 }})">
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Remove">
                                            <button type="button"
                                                class="btn btn-icon btn-danger btn-sm"onclick="
                                                    $('#removeModal').find('input[name=id]').val($(this).data('id'));"
                                                data-bs-toggle="modal" data-bs-target="#removeModal"
                                                data-id="{{ $market->id }}">
                                                <i class="bi bi-x-lg"></i>
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">{{ __('No Markets Found') }}
                                    </td>
                                </tr>
                            @endforelse

                        </tbody>
                    </table><!-- table end -->
                </div>
            </div><!-- card end -->
            <div class="mb-1">{{ paginateLinks($markets) }}</div>
        </div>
    </div>

    {{-- Remove Subscriber MODAL --}}
    <div id="removeModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Are you sure want to remove?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.eco.markets.remove') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <p><span class="fw-bold"></span> {{ __('Market will be removed.') }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ __('Remove') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="create" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Create Market') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.eco.markets.store') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <div class="input-group mb-1">
                            <label class="input-group-text">{{ __('Currency') }}<span
                                    class="text-danger">*</span></label>
                            <select class="form-select" id="currency" name="currency">
                                <option value="" disabled="" selected>
                                    {{ __('Choose a currency') }}
                                </option>
                                @foreach ($currencies as $currency)
                                    <option class="fs-5" value="{{ $currency->symbol . '|' . $currency->chain }}">
                                        {{ $currency->symbol }}
                                    </option>
                                @endforeach
                                @if ($net == 'mainnet')
                                    @foreach ($tokens as $token)
                                        <option class="fs-5" value="{{ $token->symbol . '|' . $token->chain }}">
                                            {{ $token->symbol }}
                                        </option>
                                    @endforeach
                                @endif
                            </select>
                        </div>
                        <div class="input-group mb-1">
                            <label class="input-group-text">{{ __('Pair') }}<span class="text-danger">*</span></label>
                            <select class="form-select" id="pair" name="pair">
                                <option value="" disabled="" selected>
                                    {{ __('Choose a pair') }}
                                </option>
                                @foreach ($currencies as $pair)
                                    <option class="fs-5" value="{{ $pair->symbol . '|' . $pair->chain }}">
                                        {{ $pair->symbol }}
                                    </option>
                                @endforeach
                                @if ($net == 'mainnet')
                                    @foreach ($tokens as $token)
                                        <option class="fs-5" value="{{ $token->symbol . '|' . $token->chain }}">
                                            {{ $token->symbol }}
                                        </option>
                                    @endforeach
                                @endif
                            </select>
                        </div>
                        <div class="input-group mb-1">
                            <label class="input-group-text">{{ __('Maker') }}<span class="text-danger">*</span></label>
                            <input type="number" name="maker" class="form-control" min="0.001" step=".001">
                            <span class="input-group-text">%</span>
                        </div>
                        <div class="input-group mb-1">
                            <label class="input-group-text">{{ __('Taker') }}<span class="text-danger">*</span></label>
                            <input type="number" name="taker" class="form-control" min="0.001" step=".001">
                            <span class="input-group-text">%</span>
                        </div>
                        <div class="input-group mb-1">
                            <label class="input-group-text">{{ __('Minimum Amount') }}<span
                                    class="text-danger">*</span></label>
                            <input type="number" name="minimum" class="form-control" min="0.0000001" step=".0000001">
                        </div>
                        <div class="input-group mb-1">
                            <label class="input-group-text">{{ __('Maximum Amount') }}<span
                                    class="text-danger">*</span></label>
                            <input type="number" name="maximum" class="form-control" min="0.0000001" step=".0000001">
                        </div>
                        <div class="input-group mb-1">
                            <label class="input-group-text">{{ __('Type') }}<span class="text-danger">*</span></label>
                            <input type="text" name="type" class="form-control" value="spot" readonly>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Create') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection
@section('page-script')
    <script>
        function ChangeStatus(id, status) {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
                url: "{{ route('admin.eco.markets.update.status') }}",
                method: "POST",
                data: {
                    id: id,
                    status: status,
                },
                success: function(response) {
                    notify(response.type, response.message)
                },
                error: function(response) {
                    notify(response.type, response.message)
                }
            });
        }
    </script>
@endsection
