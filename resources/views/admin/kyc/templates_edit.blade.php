@extends('layouts.admin')

@section('content')
    <div class="grid xs:grid-cols-1 md:grid-cols-3">
        <div class="card xs:col-span-1 md:col-span-2">
            <div class="card-header">
                <h3 class="card-title">KYC Form Settings</h3>
            </div>
            <form action="{{ route('admin.kyc.template.update') }}" method="POST" id="kyc_settings">
                @csrf
                <div class="card-body">
                    <input type="hidden" name="template_id" value="{{ $template->id }}">
                    <input type="hidden" name="kyc_firstname[]" value="show">
                    <input type="hidden" name="kyc_firstname[]" value="req">
                    <input type="hidden" name="kyc_email[]" value="show">
                    <input type="hidden" name="kyc_email[]" value="req">
                    <div class="kyc-option popup-body-innr border-b border-gray-300 dark:border-gray-600 mb-5">
                        <div class="kyc-option-head toggle-content-tigger collapse-icon-right">
                            <h5 class="font-medium">Personal Form Options</h5>
                        </div>
                        <div class="kyc-option-content toggle-content">
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">First Name</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded disabled:opacity-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="fname-show" value="show" name="kyc_firstname[]" checked type="checkbox"
                                            disabled>
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="fname-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600  disabled:opacity-50"
                                            id="fname-req" value="req" name="kyc_firstname[]" checked type="checkbox"
                                            disabled>
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="fname-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Last Name</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="lname-show" value="show"
                                            name="kyc_lastname[]"{{ isset($options['kyc_lastname']) ? (field_value($options['kyc_lastname'], 'show') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="lname-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="lname-req" value="req"
                                            name="kyc_lastname[]"{{ isset($options['kyc_lastname']) ? (field_value($options['kyc_lastname'], 'req') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="lname-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Email Address</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded  disabled:opacity-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="kyc-email-show" value="show" name="kyc_email[]" checked type="checkbox"
                                            disabled>
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="kyc-email-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 disabled:opacity-50 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="kyc-email-req" value="req" name="kyc_email[]" checked type="checkbox"
                                            disabled>
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="kyc-email-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Phone Number</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="phone-show" value="show"
                                            name="kyc_phone[]"{{ isset($options['kyc_phone']) ? (field_value($options['kyc_phone'], 'show') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="phone-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="phone-req" value="req"
                                            name="kyc_phone[]"{{ isset($options['kyc_phone']) ? (field_value($options['kyc_phone'], 'req') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="phone-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Date of Birth</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="dob-show" value="show" name="kyc_dob[]"
                                            {{ isset($options['kyc_dob']) ? (field_value($options['kyc_dob'], 'show') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="dob-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="dob-req" value="req" name="kyc_dob[]"
                                            {{ isset($options['kyc_dob']) ? (field_value($options['kyc_dob'], 'req') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="dob-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Gender</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="gender-show" value="show" name="kyc_gender[]"
                                            {{ isset($options['kyc_gender']) ? (field_value($options['kyc_gender'], 'show') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="gender-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="gender-req" value="req" name="kyc_gender[]"
                                            {{ isset($options['kyc_gender']) ? (field_value($options['kyc_gender'], 'req') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="gender-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Country</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="country-show" value="show" name="kyc_country[]"
                                            {{ isset($options['kyc_country']) ? (field_value($options['kyc_country'], 'show') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="country-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="country-req" value="req" name="kyc_country[]"
                                            {{ isset($options['kyc_country']) ? (field_value($options['kyc_country'], 'req') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="country-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Address Line 1</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="address-l1-show" value="show"
                                            name="kyc_address1[]"{{ isset($options['kyc_address1']) ? (field_value($options['kyc_address1'], 'show') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="address-l1-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="address-l1-req" value="req"
                                            name="kyc_address1[]"{{ isset($options['kyc_address1']) ? (field_value($options['kyc_address1'], 'req') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="address-l1-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Address Line 2</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="address-l2-show" value="show"
                                            name="kyc_address2[]"{{ isset($options['kyc_address2']) ? (field_value($options['kyc_address2'], 'show') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="address-l2-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="address-l2-req" value="req"
                                            name="kyc_address2[]"{{ isset($options['kyc_address2']) ? (field_value($options['kyc_address2'], 'req') ? ' checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="address-l2-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">City</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="city-show" value="show" name="kyc_city[]"
                                            {{ isset($options['kyc_city']) ? (field_value($options['kyc_city'], 'show') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="city-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="city-req" value="req" name="kyc_city[]"
                                            {{ isset($options['kyc_city']) ? (field_value($options['kyc_city'], 'req') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="city-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">State</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="state-show" value="show" name="kyc_state[]"
                                            {{ isset($options['kyc_state']) ? (field_value($options['kyc_state'], 'show') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="state-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="state-req" value="req" name="kyc_state[]"
                                            {{ isset($options['kyc_state']) ? (field_value($options['kyc_state'], 'req') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="state-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Zip Code</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="zip-code-show" value="show" name="kyc_zip[]"
                                            {{ isset($options['kyc_zip']) ? (field_value($options['kyc_zip'], 'show') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="zip-code-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="zip-code-req" value="req" name="kyc_zip[]"
                                            {{ isset($options['kyc_zip']) ? (field_value($options['kyc_zip'], 'req') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="zip-code-req">Required</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Telegram</h6>
                                    </div>
                                    <div class="flex items-center justify-between mr-5">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="telegram-show" value="show" name="kyc_telegram[]"
                                            {{ isset($options['kyc_telegram']) ? (field_value($options['kyc_telegram'], 'show') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="telegram-show">Show</label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="telegram-req" value="req" name="kyc_telegram[]"
                                            {{ isset($options['kyc_telegram']) ? (field_value($options['kyc_telegram'], 'req') ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="telegram-req">Required</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{{-- .kyc-option --}}
                    <div class="kyc-option popup-body-innr border-b border-gray-300 dark:border-gray-600 mb-5">
                        <div class="kyc-option-head toggle-content-tigger collapse-icon-right">
                            <h5 class="font-medium">Document Verification Options</h5>
                        </div>
                        <div class="kyc-option-content toggle-content">
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Verify by Passport</h6>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="kyc_document-passport" name="kyc_document[passport][]"
                                            value="{{ $options['kyc_document']['passport'] ?? 0 }}"
                                            {{ isset($options['kyc_document']['passport']) ? ($options['kyc_document']['passport'] == 1 ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="passport-enable">Enable</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Verify by National Card</h6>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="kyc_document-nidcard" name="kyc_document[nidcard][]"
                                            value="{{ $options['kyc_document']['nidcard'] ?? 0 }}"
                                            {{ isset($options['kyc_document']['nidcard']) ? ($options['kyc_document']['nidcard'] == 1 ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="nid-enable">Enable</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-item">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h6 class="kyc-option-subtitle">Verify by Driving License</h6>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <input
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            id="kyc_document-driving" name="kyc_document[driving][]"
                                            value="{{ $options['kyc_document']['driving'] ?? 0 }}"
                                            {{ isset($options['kyc_document']['driving']) ? ($options['kyc_document']['driving'] == 1 ? 'checked' : '') : '' }}
                                            type="checkbox">
                                        <label
                                            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"for="dlicense-enable">Enable</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{{-- .kyc-option --}}

                    <div class="flex items-center justify-between mb-5">
                        <h5 class="font-medium">Extra Verification Options</h5>
                        <button type="button" class="btn btn-outline-secondary addUserData a btn-sm"><i
                                class="bi bi-plus"></i>{{ __('Add new') }}
                        </button>
                    </div>

                    <div class="space-y-2 addedField">
                        @if (isset($options['extra_field']))
                            @foreach ($options['extra_field'] as $key => $v)
                                <div class="extra-data grid grid-cols-3 gap-3">
                                    <input name="extra_field[field_name][]" class="form-control" type="text"
                                        value="{{ $v['field_level'] }}" required placeholder="{{ __('Field Name') }}">
                                    <select name="extra_field[type][]" class="form-control">
                                        <option value="text" @if ($v['type'] == 'text') selected @endif>
                                            {{ __('Input Text') }} </option>
                                        <option value="textarea" @if ($v['type'] == 'textarea') selected @endif>
                                            {{ __('Textarea') }} </option>
                                        <option value="file" @if ($v['type'] == 'file') selected @endif>
                                            {{ __('File upload') }} </option>
                                    </select>
                                    <div class="flex">
                                        <select name="extra_field[validation][]" class="form-control">
                                            <option value="required" @if ($v['validation'] == 'required') selected @endif>
                                                {{ __('Required') }} </option>
                                            <option value="nullable" @if ($v['validation'] == 'nullable') selected @endif>
                                                {{ __('Optional') }} </option>
                                        </select>
                                        <button class="btn btn-danger removeBtn btn-icon ml-2" type="button">
                                            <i class="bi bi-x-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary" type="submit">Update</button>
                </div>
            </form>
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a class="btn btn-outline-secondary" href="{{ route('admin.kyc.templates') }}"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush

@section('page-scripts')
    <script>
        $(function() {
            "use strict";
            $('.addUserData').on('click', function() {
                var html = `
                <div class="extra-data grid grid-cols-3 gap-3">
                    <input name="extra_field[field_name][]" class="form-control"
                        type="text" value="" required placeholder="{{ __('Field Name') }}">
                    <select name="extra_field[type][]" class="form-control">
                        <option value="text" > {{ __('Input Text') }} </option>
                        <option value="textarea" > {{ __('Textarea') }} </option>
                        <option value="file"> {{ __('File upload') }} </option>
                    </select>
                    <div class="flex">
                        <select name="extra_field[validation][]" class="form-control">
                            <option value="required"> {{ __('Required') }} </option>
                            <option value="nullable">  {{ __('Optional') }} </option>
                        </select>
                        <button class="btn btn-danger removeBtn btn-icon ml-2" type="button">
                            <i class="bi bi-x text-2xl"></i>
                        </button>
                    </div>
                </div>`;
                $('.addedField').append(html)
            });

            $(document).on('click', '.removeBtn', function() {
                $(this).closest('.extra-data').remove();
            });

        });
    </script>
@endsection
