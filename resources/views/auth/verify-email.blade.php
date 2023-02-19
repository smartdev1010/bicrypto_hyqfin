<x-guest-layout>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="grid h-screen place-items-center px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12 lg:gap-20">
            <div class="mr-auto place-self-center lg:col-span-6">
                <img class="hidden mx-auto lg:flex scale-125" src="../assets/images/illustrations/login.svg"
                    alt="illustration">
            </div>
            <div class="w-full place-self-center lg:col-span-6">

                <div class="p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
                    <!-- Session Status -->

                    <x-jet-validation-errors class="mb-4" />

                    @if (session('status'))
                        <div class="mb-4 font-medium text-sm text-green-600">
                            {{ session('status') }}
                        </div>
                    @endif

                    <x-slot name="logo">
                        <x-jet-authentication-card-logo />
                    </x-slot>

                    <div class="mb-2 text-sm font-light text-gray-500 dark:text-gray-300">
                        {{ __('Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
                    </div>

                    @if (session('status') == 'verification-link-sent')
                        <div class="text-sm font-light text-gray-500 dark:text-gray-300">
                            {{ __('A new verification link has been sent to the email address you provided in your profile settings.') }}
                        </div>
                    @endif

                    <div class="flex w-full justify-between mt-5">
                        <form method="POST" action="{{ route('verification.send') }}">
                            @csrf

                            <x-jet-button class="
                                    btn btn-info">
                                {{ __('Resend Verification Email') }}
                            </x-jet-button>
                        </form>

                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <x-jet-button class="
                                    btn btn-danger">
                                {{ __('Log Out') }}
                            </x-jet-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-guest-layout>
