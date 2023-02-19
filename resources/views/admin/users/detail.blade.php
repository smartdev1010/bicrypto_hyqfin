@extends('layouts.admin')
@php
    $country_code = json_decode(json_encode(getIpInfo()), true)['code'];
@endphp
@section('content')
    <div class="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <div class="xs:col-span-1 md:col-span-2 lg:col-span-3">
            <div class="row">
                <div class="col-xl-9 lg:col-span-7 md:col-span-7">
                    <div class="card">
                        <form action="{{ route('admin.users.update', [$user->id]) }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                <div class="card-header">
                                    <h5 class="card-title border-bottom pb-2">{{ $user->fullname }} {{ __('Information') }}
                                    </h5>
                                </div>
                                <div class="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label for="firstname"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('First Name') }}</label>
                                        <input type="text"name="firstname"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->firstName : $user->firstname }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="lastname"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Last Name') }}</label>
                                        <input type="text"name="lastname"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->lastName : $user->lastname }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Email') }}</label>
                                        <input type="email" name="email"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->email : $user->email }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="mobile"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Mobile Number') }}</label>
                                        <input type="text" name="mobile"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->phone : $user->mobile }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="address"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Address') }}</label>
                                        <input type="text"name="address"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->address1 : $user->address }}"
                                            placeholder=" {{ __('House number, street address') }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="city"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('City') }}</label>
                                        <input type="text"name="city"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->city : $user->city }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="city"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('State') }}</label>
                                        <input type="text" name="state"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->state : $user->state }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="zip"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Zip/Postal') }}</label>
                                        <input type="text" name="zip"
                                            value="{{ isset($user->kyc_application) ? $user->kyc_application->zip : $user->zip }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="zip"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Country') }}</label>

                                        <select id="country" name="country" placeholder="Country"
                                            aria-describedby="country" value="{{ old('country') }}" class="form-control">
                                            @include('partials.country')
                                        </select>
                                    </div>
                                    @if (isset($user->kyc_application))
                                        <div>
                                            <label for="kyc"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('KYC Status') }}</label>
                                            <div class="input-group">
                                                <input value="{{ $user->kyc_application->status }}">
                                                <span><a class="text-white"
                                                        href="{{ route('admin.kyc.view', [$user->kyc_application->id, 'kyc_details']) }}">View</a></span>
                                            </div>
                                        </div>
                                    @endif

                                </div>



                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-outline-success">{{ __('Save Changes') }}</button>


                            </div>
                        </form>
                    </div>
                    <br>



                </div>


            </div>
        </div>
        <div class="col-span-1 space-y-4">
            <div class="card">
                <div class="card-body">
                    <a href="#">
                        <img src="{{ getImage(imagePath()['profileImage']['path'] . '/' . $user->profile_photo_path, imagePath()['profileImage']['size']) }}"
                            alt="{{ __('Profile Image') }}" class="rounded-full">
                    </a>
                    <div>

                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {{ $user->fullname }}
                        </h5>
                        <span class="text-small">{{ __('Joined At') }}
                            <strong>{{ showDateTime($user->created_at, 'd M, Y h:i A') }}</strong></span>

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            {{ __('User information') }}
                        </h5>

                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            @if ($refer_by)
                                <li class="list-group-item flex justify-between items-center">
                                    <span class="float-start">{{ __('Referred By') }}</span>
                                    <span class="float-end text-muted">{{ __($refer_by->username) }}</span>
                                </li>
                            @endif
                            </p>

                        </ul>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        @switch($user->status)
                            @case(1)
                                <span class="badge rounded-pill bg-success">{{ __('Active') }}</span>
                            @break

                            @case(0)
                                <span class="badge rounded-pill bg-danger">{{ __('Banned') }}</span>
                            @break
                        @endswitch
                    </div>
                </div>
            </div>

            {{-- <div class="card">
                <div class="card-body">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ __('User Action') }}
                    </h5>


                    <div class="flex flex-col space-y-4">
                        <div>
                            <a href="{{ route('admin.users.email.single', $user->id) }}"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                {{ __('Send Email') }}

                            </a>
                        </div>
                        <div>
                            <a href="{{ route('admin.users.referral.log', $user->id) }}"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>{{ __('Referral Log') }}

                            </a>
                        </div>
                    </div>
                </div>
            </div> --}}




        </div>

    </div>

    <div class="card mb-5">
        <div class="card-body">
            <livewire:wallets-table :user="$user->id" />
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <livewire:wallets-frozen-table :frozen="count($frozen_wallet) > 0 ? 1 : 0" />
        </div>
    </div>
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Add / Subtract Balance') }}"
        action="{{ route('admin.users.addSubBalanceFrozen', $user->id) }}" submit="{{ __('Submit') }}"
        id="addSubModalFrozen">
        <div>
            <input type="hidden" name="symbol">
            <select id="act" name="act"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="1" checked>{{ __('Add Balance') }}</option>
                <option value="0">{{ __('Subtract Balance') }}</option>
            </select>
        </div>

        <div>
            <label>{{ __('Amount') }}<span class="text-danger">*</span></label>
            <div class="input-group">
                <input type="text" name="amount" placeholder="{{ __('Please provide positive amount') }}">
                <span>{{ __($general->cur_sym) }}</span>
            </div>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Create Frozen Wallet') }}"
        action="{{ route('admin.users.wallet.frozen.create') }}" submit="{{ __('Create') }}" id="createFrozenWallet">
        <div>
            <input type="hidden" name="user_id" class="hidden" value="{{ $user->id }}">
            <label>{{ __('Symbol') }}<span class="text-danger">*</span></label>
            <input type="text" name="symbol" class="form-control">
        </div>
        <div>
            <label>{{ __('Hover Text') }}<span class="text-danger">*</span></label>
            <textarea type="text" name="text" class="form-control"></textarea>
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('Add / Subtract Balance') }}"
        action="{{ route('admin.users.addSubBalance', $user->id) }}" submit="{{ __('Submit') }}" id="addSubModal">
        <div>
            <input type="hidden" name="address">
            <input type="hidden" name="symbol">
            <select id="act" name="act"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="1" checked>{{ __('Add Balance') }}</option>
                <option value="0">{{ __('Subtract Balance') }}</option>
            </select>
        </div>

        <div>
            <label>{{ __('Amount') }}<span class="text-danger">*</span></label>
            <div class="input-group">
                <input type="text" name="amount" placeholder="{{ __('Please provide positive amount') }}">
                <span>{{ __($general->cur_sym) }}</span>
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
@push('breadcrumb-plugins')
    <a href="{{ route('admin.users.all') }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        {{ __('Back') }}</a>
@endpush

@push('script')
    <script>
        "use strict";
        $("select[name=country]").val("{{ @$user->country }}");
        @if ($country_code)
            $(`option[data-code={{ $country_code[0] }}]`).attr('selected', '');
        @endif
        $('select[name=country_code]').change(function() {
            $('input[name=country]').val($('select[name=country_code] :selected').data('country'));
        }).change();
    </script>
@endpush
