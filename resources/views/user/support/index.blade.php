@extends('layouts.user')
@section('content')

    <div class=" my-2 text-end">
        <a href="{{ route('user.ticket.open') }}" class="btn btn-primary btn-sm">{{ __('New Ticket') }}</a>
    </div>
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>{{ __('Subject') }}</th>
                                <th>{{ __('Status') }}</th>
                                <th>{{ __('Last Reply') }}</th>
                                <th>{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($supports as $key => $support)
                                <tr>
                                    <td data-label="{{ __('Subject') }}"> <a
                                            href="{{ route('user.ticket.view', $support->ticket) }}"
                                            class="fw-bold">[{{ __('Ticket') }}#{{ $support->ticket }}]
                                            {{ __($support->subject) }} </a></td>
                                    <td data-label="{{ __('Status') }}">
                                        @if ($support->status == 0)
                                            <span class="badge bg-success">{{ __('Open') }}</span>
                                        @elseif($support->status == 1)
                                            <span class="badge bg-primary">{{ __('Answered') }}</span>
                                        @elseif($support->status == 2)
                                            <span class="badge bg-warning">{{ __('Customer Reply') }}</span>
                                        @elseif($support->status == 3)
                                            <span class="badge bg-danger">{{ __('Closed') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Last Reply') }}">
                                        {{ \Carbon\Carbon::parse($support->last_reply)->diffForHumans() }} </td>

                                    <td data-label="{{ __('Action') }}">
                                        <a href="{{ route('user.ticket.view', $support->ticket) }}"
                                            class="btn btn-primary btn-sm">
                                            <i class="bi bi-display"></i>
                                        </a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="100%"> {{ __('No results found') }}!</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
                {{ paginateLinks($supports) }}
            </div>
        </div>
    </div>
@endsection
