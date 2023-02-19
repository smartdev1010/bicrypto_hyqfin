<div class="card">
    <form action="{{ route('user.profile.update') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="card-body space-y-5">
            <h4 name="card-title">
                {{ __('Profile Information') }}
            </h4>

            <div name="description">
                {{ __('Update your account\'s profile information and email address.') }}
            </div>

            <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div class="mr-1">
                        <img class="img-thumbnail mb-1"
                            src="{{ getImage(imagePath()['profileImage']['path'] . '/' . $user->profile_photo_path, imagePath()['profileImage']['size']) }}" />
                    </div>
                    <div>
                        <input class="upload" name="image" type="file" id="image"
                            accept=".jpg,.jpeg,.png,.svg" />
                    </div>
                </div>
            </div>

            <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <!-- Firstname -->
                    <label class="form-label" for="firstname">{{ __('First Name') }}</label>
                    <input id="firstname" type="text" class="form-control" name="firstname" autocomplete="firstname"
                        required value="{{ $user->firstname }}" @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1) disabled @endif>
                </div>
                <div>
                    <!-- Lastname -->
                    <label class="form-label" for="lastname">{{ __('Last Name') }}</label>
                    <input id="lastname" type="text" class="form-control" name="lastname" autocomplete="lastname"
                        required value="{{ $user->lastname }}" @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1) disabled @endif>
                </div>
                <div>
                    <!-- Email -->
                    <label class="form-label" for="email">{{ __('Email') }}</label>
                    <input id="email" type="email" class="form-control" name="email" required
                        value="{{ $user->email }}">
                </div>
                <div>
                    <!-- Address -->
                    <label class="form-label" for="address">{{ __('Address') }}</label>
                    <input id="address" type="text" class="form-control" name="address" autocomplete="address"
                        required value="{{ $user->address }}" @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1) disabled @endif>
                </div>
                <div>
                    <!-- City -->
                    <label class="form-label" for="city">{{ __('City') }}</label>
                    <input id="city" type="text" class="form-control" name="city" autocomplete="city"
                        required value="{{ $user->city }}" @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1) disabled @endif>
                </div>
                <div>
                    <!-- State -->
                    <label class="form-label" for="state">{{ __('State') }}</label>
                    <input id="state" type="text" class="form-control" name="state" autocomplete="state"
                        required value="{{ $user->state }}" @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1) disabled @endif>
                </div>
                <div>
                    <!-- Zip -->
                    <label class="form-label" for="zip">{{ __('Zip') }}</label>
                    <input id="zip" type="text" class="form-control" name="zip" autocomplete="zip" required
                        value="{{ $user->zip }}" @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1) disabled @endif>

                </div>
                <div>
                    <!-- Country -->
                    <label class="form-label" for="country">{{ __('Country') }}</label>
                    <select class="form-select" name="country" id="country" data-dd-class="search-on" required
                        @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1) disabled @endif>
                        <option value="">{{ __('Select Country') }}</option>
                        @foreach (getCountries() as $country)
                            <option {{ (isset($user->country) ? $user->country : '') == $country ? 'selected' : '' }}
                                value="{{ $country }}" name="country">{{ $country }}</option>
                        @endforeach
                    </select>
                </div>
                @if (checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1)
                    <!-- Country -->
                    <label class="form-label" for="country">{{ __('Resubmit KYC') }}</label>
                    <a href="/user/kyc/application?state=new"
                        class="w-full btn btn-success">{{ __('Resubmit KYC') }}</a>
                @endif
            </div>
        </div>

        @if (auth()->user()->role_id != 3)
            <div class="card-footer text-end">
                <button class="btn btn-success" type="submit">
                    {{ __('Update') }}
                </button>
            </div>
        @endif
    </form>

</div>
