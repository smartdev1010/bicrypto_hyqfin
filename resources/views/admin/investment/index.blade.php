@extends('layouts.admin')

@section('content')
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Minimum Investment
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Maximum Investment
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration (in days)
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Interest Rate (%)
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recommanded
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse ($plans as $plan)
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ $plan->name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ $plan->min_amount }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ $plan->max_amount }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ $plan->duration_in_days }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ $plan->interest_rate }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <input type="checkbox" class="toggle-status" data-id="{{ $plan->id }}" data-toggle="toggle"
                                data-onstyle="success" data-offstyle="danger"
                                @if ($plan->status) checked @endif>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <input type="checkbox" class="toggle-recommanded" data-id="{{ $plan->id }}"
                                data-toggle="toggle" data-onstyle="success" data-offstyle="danger"
                                @if ($plan->recommanded) checked @endif>
                        </td>
                        <td class="border px-4 py-2">
                            <a href="{{ route('admin.investment.plans.edit', $plan->id) }}"
                                class="text-green-500 hover:text-green-700 underline mr-4">Edit</a>
                            <form action="{{ route('admin.investment.plans.destroy', $plan->id) }}" method="POST"
                                class="inline-block">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500 hover:text-red-700 underline">Delete</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td class="px-6 py-4">No investment plan found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a class="btn btn-outline-primary" href="{{ route('admin.investment.plans.create') }}"><i
            class="bi bi-plus-lg"></i>{{ __('Add New') }}</a>
@endpush

@section('page-scripts')
    <script>
        $(document).ready(function() {
            $('.toggle-status').change(function() {
                var id = $(this).data('id');
                var status = $(this).prop('checked');

                $.ajax({
                    url: '/admin/investment/plans/' + id + '/toggle-status',
                    type: 'PUT',
                    data: {
                        _token: '{{ csrf_token() }}',
                        status: status ? 1 : 0
                    },
                    success: function(response) {
                        console.log(response);
                    }
                });
            });
            $('.toggle-recommanded').change(function() {
                var id = $(this).data('id');
                var recommanded = $(this).prop('checked');

                $.ajax({
                    url: '/admin/investment/plans/' + id + '/toggle-recommanded',
                    type: 'PUT',
                    data: {
                        _token: '{{ csrf_token() }}',
                        recommanded: recommanded ? 1 : 0
                    },
                    success: function(response) {
                        console.log(response);
                    }
                });
            });
        });
    </script>
@endsection
