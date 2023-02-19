@extends('layouts.admin')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">Deposits Log</h4>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Name') }}</th>
                                <th scope="col">{{ __('Subject') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($email_templates as $template)
                                <tr>
                                    <td data-label="{{ __('Name') }}">{{ __($template->name) }}</td>
                                    <td data-label="{{ __('Subject') }}">{{ __($template->subj) }}</td>
                                    <td data-label="{{ __('Status') }}">
                                        @if ($template->email_status == 1)
                                            <span class="text--small badge fw-normal bg-success">{{ __('Active') }}</span>
                                        @else
                                            <span
                                                class="text--small badge fw-normal bg-warning">{{ __('Disabled') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        <a href="{{ route('admin.email.template.edit', $template->id) }}">
                                            <button class="btn-icon btn-warning rounded ml-1 editGatewayBtn"
                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                title="{{ __('Edit') }}">
                                                <i class="bi bi-pencil"></i>
                                            </button>
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
            </div>
        </div><!-- card end -->
    </div>
@endsection
