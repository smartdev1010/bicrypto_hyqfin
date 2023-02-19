@extends('layouts.admin')

@section('content')
    @include('admin.notification.header')


    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 rounded-l-lg">
                        {{ __('Name') }}
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {{ __('Subject') }}
                    </th>
                    <th scope="col" class="px-6 py-3 text-right">
                        {{ __('Action') }}
                    </th>

                </tr>
            </thead>
            <tbody>
                @forelse($templates as $template)
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ __($template->name) }}
                        </th>
                        <td class="px-6 py-4">
                            {{ __($template->subj) }}
                            </th>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="{{ route('admin.settings.mail.template.edit', $template->id) }}"
                                class="btn btn-outline-info font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                {{ __('Edit') }}</a>
                        </td>


                    </tr>
                @empty
                    <tr>
                        <td class="text-muted text-center" colspan="100%">{{ __($emptyMessage) }}</td>
                    </tr>
                @endforelse
            </tbody>

        </table>
    </div>

    </div>
@endsection
