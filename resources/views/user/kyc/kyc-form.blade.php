@php
    $option = $defaultDoc = $defaultImg = '';

    $has_docs = $options['kyc_document'];
    $support_docs = $options['kyc_document'];
    $default_docs = [];
    foreach ($support_docs as $doc => $type) {
        if ($type) {
            $default_docs = ['doc' => $doc, 'name' => $title[$doc], 'image' => $doc];
            break;
        }
    }
    if (!empty($default_docs)) {
        $defaultDoc = $default_docs['name'];
        $defaultImg = $default_docs['image'];
    }

    $step_01 = $has_docs ? '01' : '';
    $step_02 = $step_01 && $has_docs ? '02' : '';

@endphp

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/datepicker.min.js"></script>
<div class="space-y-5">
    <div class="form-step form-step1">
        <div class="form-step-head card-innr">
            <div class="step-head">
                <div class="step-number">{{ $step_01 }}</div>
                <div class="step-head-text">
                    <h4 class="text-warning">{{ __('Personal Details') }}</h4>
                    <p>{{ __('Your basic personal information is required for identification purposes.') }}</p>
                </div>
            </div>
        </div>{{-- .step-head --}}
        <div class="form-step-fields card-innr">
            <div class="note note-plane note-light-alt note-md pdb-1x">
                <p><i class="bi bi-info-circle"></i>
                    {{ __('Please type carefully and fill out the form with your personal details. You are not allowed to edit the details once you have submitted the application.') }}
                </p>
            </div>
            <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2">
                <div>
                    <label for="first-name" class="required">{{ __('First Name') }}</label>

                    <input required class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->firstName : '' }}" id="first-name" name="first_name">

                </div>{{-- .input-item --}}
                <div>
                    <label for="last-name" class="required">{{ __('Last Name') }}</label>

                    <input required class="form-control" value="{{ isset($user_kyc) ? $user_kyc->lastName : '' }}"
                        type="text" id="last-name" name="last_name">

                </div>{{-- .input-item --}}
                @if (isset($input_email) && $input_email == true)
                    <div>
                        <label for="email" class="required">{{ __('Email Address') }}
                        </label>

                        <input required class="form-control" value="{{ isset($user_kyc) ? $user_kyc->email : '' }}"
                            type="email" id="email" name="email">

                    </div>{{-- .input-item --}}
                @endif

                @if (!isset($user_kyc))
                    <div>
                        <label for="password">{{ __('Password') }}
                            <span class="text-require text-danger">*</span>
                        </label>

                        <input required class="form-control" placeholder="*******" type="password" minlength="6"
                            id="password" name="password">

                    </div>{{-- .input-item --}}
                @endif


                <div>
                    <label for="phone-number" class="required">{{ __('Phone Number ') }}</label>

                    <input required class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->phone : '' }}" id="phone-number" name="phone">

                </div>{{-- .input-item --}}


                <div>
                    <label for="date-of-birth" class="required">{{ __('Date of Birth') }}
                    </label>

                    <div required class="relative max-w-sm">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input autocomplete="off" value="{{ isset($user_kyc) ? $user_kyc->dob : '' }}" datepicker
                            type="text" id="date-of-birth" name="dob"
                            class=" date-picker-dob bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Select date">
                    </div>

                </div>{{-- .input-item --}}


                <div>
                    <label for="gender" class="required">{{ __('Gender') }}
                    </label>
                    <select required class="form-select" name="gender" id="gender">
                        <option value="">{{ __('Select Gender') }}</option>
                        <option {{ (isset($user_kyc) ? $user_kyc->gender : '') == 'male' ? 'selected' : '' }}
                            value="male">{{ __('Male') }}</option>
                        <option {{ (isset($user_kyc) ? $user_kyc->gender : '') == 'female' ? 'selected' : '' }}
                            value="female">{{ __('Female') }}</option>
                        <option {{ (isset($user_kyc) ? $user_kyc->gender : '') == 'other' ? 'selected' : '' }}
                            value="other">{{ __('Other') }}</option>
                    </select>

                </div>{{-- .input-item --}}


                <div>
                    <label for="telegram">{{ __('Telegram Username') }}</label>

                    <input class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->telegram : '' }}" id="telegram" name="telegram">

                </div>{{-- .input-item --}}

            </div>{{-- .row --}}
            <h4 class="text-dark mb-3 mt-5">{{ __('Your Address') }}</h4>
            <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2">

                <div>
                    <label for="country" class="required">{{ __('Country') }}</label>

                    <select required class="form-select" name="country" id="country" data-dd-class="search-on">
                        <option value="">{{ __('Select Country') }}</option>
                        @foreach ($countries as $country)
                            <option {{ (isset($user_kyc) ? $user_kyc->country : '') == $country ? 'selected' : '' }}
                                value="{{ $country }}">{{ $country }}</option>
                        @endforeach
                    </select>

                </div>{{-- .input-item --}}


                <div>
                    <label for="state" class="required">{{ __('State') }}</label>

                    <input required class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->state : '' }}" id="state" name="state">

                </div>{{-- .input-item --}}


                <div>
                    <label for="city" class="required">{{ __('City') }}</label>

                    <input required class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->city : '' }}" id="city" name="city">

                </div>{{-- .input-item --}}


                <div>
                    <label for="zip" class="required">{{ __('Zip / Postal Code') }}</label>

                    <input required class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->zip : '' }}" id="zip" name="zip">

                </div>{{-- .input-item --}}


                <div>
                    <label for="address_1" class="required">{{ __('Address Line 1') }}</label>

                    <input required class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->address1 : '' }}" id="address_1" name="address_1">

                </div>{{-- .input-item --}}


                <div>
                    <label for="address_2">{{ __('Address Line 2') }}</label>

                    <input class="form-control" type="text"
                        value="{{ isset($user_kyc) ? $user_kyc->address2 : '' }}" id="address_2" name="address_2">

                </div>{{-- .input-item --}}

            </div>{{-- .row --}}
        </div>{{-- .step-fields --}}
    </div>
    <div class="form-step form-step2">
        <div class="form-step-head card-innr">
            <div class="step-head">
                <div class="step-number">{{ $step_02 }}</div>
                <div class="step-head-text">
                    <h4 class="text-warning">{{ __('Document Upload') }}</h4>
                    <p>{{ __('To verify your identity, we ask you to upload high-quality scans or photos of your official identification documents issued by the government.') }}
                    </p>
                </div>
            </div>
        </div>{{-- .step-head --}}
        <div class="form-step-fields card-innr">
            <div class="note note-plane note-light-alt note-md pdb-0-5x">
                <p><i class="bi bi-info-circle"></i>
                    {{ __('In order to complete, please upload any of the following personal documents.') }}</p>
            </div>
            @if (!empty($support_docs))
                <ul class="document-list grid gap-5 xs:grid-cols-1 md:grid-cols-2">
                    @foreach ($support_docs as $doc_item => $opt)
                        @if ($opt)
                            <div>
                                @if ($doc_item == 'passport' && $opt)
                                    <input class="document-type" type="radio" name="documentType"
                                        value="{{ $doc_item }}" id="docType-{{ $doc_item }}"
                                        data-title="{{ $title[$doc_item] }}"
                                        data-img="{{ asset('assets/images/vector-' . $doc_item . '.png') }}"{{ isset($default_docs['doc']) && $default_docs['doc'] == $doc_item ? ' checked' : '' }}>
                                    <label for="docType-{{ $doc_item }}">
                                        <img style="height:36px;"
                                            src="{{ asset('assets/images/icon-passport.png') }}" alt="">
                                        <span>{{ $title[$doc_item] }}</span>
                                    </label>
                                @endif
                                @if ($doc_item == 'nidcard' && $opt)
                                    <input class="document-type" type="radio" name="documentType"
                                        data-change=".doc-upload-d2" value="{{ $doc_item }}"
                                        id="docType-{{ $doc_item }}" data-title="{{ $title[$doc_item] }}"
                                        data-img="{{ asset('assets/images/vector-' . $doc_item . '.png') }}"{{ isset($default_docs['doc']) && $default_docs['doc'] == $doc_item ? ' checked' : '' }}>
                                    <label for="docType-{{ $doc_item }}">
                                        <img style="height:36px;"
                                            src="{{ asset('assets/images/icon-national-id.png') }}" alt="">
                                        <span>{{ $title[$doc_item] }}</span>
                                    </label>
                                @endif
                                @if ($doc_item == 'driving' && $opt)
                                    <input class="document-type" type="radio" name="documentType"
                                        value="{{ $doc_item }}" id="docType-{{ $doc_item }}"
                                        data-title="{{ $title[$doc_item] }}"
                                        data-img="{{ asset('assets/images/vector-' . $doc_item . '.png') }}"{{ isset($default_docs['doc']) && $default_docs['doc'] == $doc_item ? ' checked' : '' }}>
                                    <label for="docType-{{ $doc_item }}">
                                        <img style="height:36px;" src="{{ asset('assets/images/icon-license.png') }}"
                                            alt="">
                                        <span>{{ $title[$doc_item] }}</span>
                                    </label>
                                @endif
                            </div>
                        @endif
                    @endforeach
                </ul>
            @endif
            <div class="doc-upload-area">
                <p class="text-dark font-bold">
                    {{ __('To avoid delays with verification process, please double-check to ensure the below requirements are fully met:') }}
                </p>
                <ul class="list-disc mb-5">
                    <li>{{ __('Chosen credential must not be expired.') }}</li>
                    <li>{{ __('Document should be in good condition and clearly visible.') }}</li>
                    <li>{{ __('There is no light glare or reflections on the card.') }}</li>
                    <li>{{ __('File is at least 1 MB in size and has at least 300 dpi resolution.') }}</li>
                </ul>
                <div class="doc-upload doc-upload-d1 border-b border-gray-300 dark:border-gray-600 pb-5">
                    <h6 class="font-mid doc-type-title text-dark">{!! __('Upload Here Your :doctype Copy', [
                        'doctype' => '<storng class="doc-type-name">' . $defaultDoc . '</storng>',
                    ]) !!}</h6>
                    <div class="flex justify-between items-center">
                        <div class="col-sm-8">
                            <input class="upload" type="file" id="document_one" name="document_one" required />
                        </div>
                        <div class="xs:hidden sm:block">
                            <div class="mx-md-4">
                                <img width="160" class="_image"
                                    src="{{ asset('assets/images/vector-' . $defaultImg . '.png') }}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="doc-upload doc-upload-d2{{ isset($default_docs['doc']) && $default_docs['doc'] == 'nidcard' ? '' : ' hidden' }} border-b border-gray-300 dark:border-gray-600 pb-5">
                    <h6 class="font-mid text-dark">{{ __('Upload Here Your National ID Back Side') }}</h6>
                    <div class="flex justify-between items-center">
                        <div class="col-sm-8">
                            <input class="upload" type="file" id="document_two" name="document_two" />
                        </div>
                        <div class="xs:hidden sm:block">
                            <div class="mx-md-4">
                                <img width="160" src="{{ asset('assets/images/vector-id-back.png') }}"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="doc-upload doc-upload-d3">
                    <h6 class="font-mid text-dark">
                        {{ __('Upload a selfie as a Photo Proof while holding document in your hand') }}</h6>
                    <div class="flex justify-between items-center">
                        <div class="col-sm-8">
                            <input class="upload" type="file" id="document_image_hand" name="document_image_hand"
                                required />
                        </div>
                        <div class="xs:hidden sm:block">
                            <div class="mx-md-4">
                                <img width="160" src="{{ asset('assets/images/vector-hand.png') }}"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @if (isset($options['extra_field']) && count($options['extra_field']) > 0)
        <div class="form-step form-step3">
            <div class="form-step-head card-innr">
                <div class="step-head">
                    <div class="step-number">3</div>
                    <div class="step-head-text">
                        <h4>{{ __('Extra Informations') }}</h4>
                        <p>{{ __('We require extra essential information to get to know you better') }}</p>
                    </div>
                </div>
            </div>{{-- .step-head --}}
            <div class="form-step-fields card-innr addedField grid xs:grid-cols-1 md:grid-cols-2
            gap-3">
                @foreach ($options['extra_field'] as $key => $v)
                    @if ($v['type'] == 'text')
                        <div>
                            <label class="label mt-1"><strong>{{ __(inputTitle($v['field_level'])) }}
                                    @if ($v['validation'] == 'required')
                                        <span class="text-danger">*</span>
                                    @endif
                                </strong>
                            </label>
                            <input type="text" class="form-control" name="extra_field[{{ $key }}]"
                                value="{{ old($v['field_level']) }}" placeholder="{{ __($v['field_level']) }}">
                        </div>
                    @elseif($v['type'] == 'textarea')
                        <div>
                            <label class="label mt-1"><strong>{{ __(inputTitle($v['field_level'])) }}
                                    @if ($v['validation'] == 'required')
                                        <span class="text-danger">*</span>
                                    @endif
                                </strong>
                            </label>
                            <textarea name="extra_field[{{ $key }}]" class="form-control" placeholder="{{ __($v['field_level']) }}"
                                rows="3">{{ old($v['field_level']) }}</textarea>

                        </div>
                    @elseif($v['type'] == 'file')
                        <div>
                            <label><strong>{{ __($v['field_level']) }} @if ($v['validation'] == 'required')
                                        <span class="text-danger">*</span>
                                    @endif
                                </strong></label>
                            <br>

                            <input type="file" class="upload" name="extra_field[{{ $key }}]"
                                accept="image/*">
                        </div>
                    @endif
                @endforeach
            </div>{{-- .step-fields --}}
        </div>
    @endif

    <div class="form-step form-step-final">
        <div class="form-step-fields card-innr">
            @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
                <div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="term-condition" name="condition"
                            required="required"
                            data-msg-required="{{ __('You should read our terms and policy.') }}" />
                        <label class="form-check-label" for="term-condition">
                            I agree to the <a href="{{ route('terms.show') }}" target="_blank">terms_of_service</a>
                            and
                            <a href="{{ route('policy.show') }}" target="_blank">privacy_policy</a>
                        </label>
                    </div>
                </div>
            @endif
            <div class="input-item">
                <input class="form-check-input" id="info-currect" name="currect" type="checkbox"
                    required="required" data-msg-required="{{ __('Confirm that all information is correct.') }}">
                <label class="form-check-label"
                    for="info-currect">{{ __('All the personal information I have entered is correct.') }}</label>
            </div>
            <div class="input-item">
                <input class="form-check-input" id="certification" name="certification" type="checkbox"
                    required="required" data-msg-required="{{ __('Certify that you are individual.') }}">
                <label class="form-check-label"
                    for="certification">{{ __('I certify that, I am registering to participate in the trading platform in the capacity of an individual (and beneficial owner) and not as an agent or representative of a third party corporate entity.') }}</label>
            </div>
            <div class="gaps-1x"></div>
            <button class="btn btn-primary" type="submit">{{ __('Proceed to Verify') }}</button>
        </div>{{-- .step-fields --}}
    </div>
</div>
<div class="hiddenFiles"></div>
