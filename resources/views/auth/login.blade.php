<x-guest-layout>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="grid h-screen place-items-center px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12 lg:gap-20">
      <div class="mr-auto place-self-center lg:col-span-6">
        <img class="hidden mx-auto lg:flex scale-125" src="../assets/images/illustrations/login.svg" alt="illustration">
      </div>
      <div class="w-full place-self-center lg:col-span-6">
        <div class="p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:max-w-xl sm:p-8"
          style="display: flex; justify-content:center">
          <img src="/assets/images/logoIcon/logo.png" />
        </div>
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

          <h1 class="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Welcome back
          </h1>
          <p class="text-sm font-light text-gray-500 dark:text-gray-300">
            Start trading in seconds. Don’t have an account? <a href="{{ route('register') }}"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>.
          </p>
          <form method="POST" action="{{ route('login') }}" id="loginForm" class="mt-4 space-y-6 sm:mt-6">
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <x-jet-label for="email" value="{{ __('Email') }}"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                <x-jet-input id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text" name="email" :value="old('email')" required autofocus />
              </div>
              <div>
                <x-jet-label for="password" value="{{ __('Password') }}"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" />
                <x-jet-input id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password" name="password" required autocomplete="current-password" />
              </div>
            </div>
            @if (getExt('7') == 1)
            <div class="flex items-center">
              <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
              <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div class="space-y-3">
              <div id="app">
                <div class="flex justify-between items-center">
                  <div>
                    <x-jet-label for="network" value="{{ __('Select Network') }}"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white" />
                    <w3m-network-switch></w3m-network-switch>
                  </div>
                  <div>
                    <x-jet-label for="core" value="{{ __('Connect Wallet') }}"
                      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white" />
                    <w3m-core-button></w3m-core-button>
                  </div>
                </div>
                <button type="button" id="connect-button"
                  class="mt-5 w-full disabled:opacity-50 inline-flex items-center justify-center py-1 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <div role="status" id="spinnerWeb3" class="hidden">
                    <svg class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <svg version="1.0" id="katman_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 824 618"
                    style="height:32px;enable-background:new 0 0 824 618;" xml:space="preserve">
                    <style type="text/css">
                    .st0 {
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      fill: url(#SVGID_1_);
                    }

                    .st1 {
                      fill: #FFFFFF;
                    }
                    </style>
                    <g>

                      <radialGradient id="SVGID_1_" cx="13.2793" cy="609.416" r="1"
                        gradientTransform="matrix(512 0 0 -512 -6643 312330)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style="stop-color:#5D9DF6" />
                        <stop offset="1" style="stop-color:#006FFF" />
                      </radialGradient>
                      <path class="st0"
                        d="M412,53c141.4,0,256,114.6,256,256S553.4,565,412,565S156,450.4,156,309S270.6,53,412,53z" />
                      <path class="st1" d="M318.7,250.7c51.5-50.3,135.1-50.3,186.6,0l6.2,6.1c2.6,2.5,2.6,6.6,0,9.1l-21.2,20.7c-1.3,1.3-3.4,1.3-4.7,0
		l-8.5-8.3c-36-35.1-94.2-35.1-130.2,0l-9.1,8.9c-1.3,1.3-3.4,1.3-4.7,0l-21.2-20.7c-2.6-2.5-2.6-6.6,0-9.1L318.7,250.7z
		 M549.2,293.5l18.9,18.4c2.6,2.5,2.6,6.6,0,9.1l-85.1,83.1c-2.6,2.5-6.8,2.5-9.3,0c0,0,0,0,0,0l-60.4-59c-0.6-0.6-1.7-0.6-2.3,0
		c0,0,0,0,0,0l-60.4,59c-2.6,2.5-6.8,2.5-9.3,0c0,0,0,0,0,0L255.9,321c-2.6-2.5-2.6-6.6,0-9.1l18.9-18.4c2.6-2.5,6.8-2.5,9.3,0
		l60.4,59c0.6,0.6,1.7,0.6,2.3,0c0,0,0,0,0,0l60.4-59c2.6-2.5,6.8-2.5,9.3,0c0,0,0,0,0,0l60.4,59c0.6,0.6,1.7,0.6,2.3,0l60.4-59
		C542.4,291,546.6,291,549.2,293.5L549.2,293.5z" />
                    </g>
                  </svg>

                  {{ __('Sign In') }}
                </button>
              </div>
              @include('partials.notify')
              <script>
              window.csrf = "{{ csrf_token() }}"
              window.walletconnectid = "{{ getenv('VUE_APP_WALLET_CONNECT_PROJECT_ID') }}"
              </script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
                integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
              @vite('resources/src/login.js')
            </div>
            @endif
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5 dark:text-gray-50">
                  <x-jet-checkbox id="remember_me" name="remember" />
                  <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                </div>
              </div>
              @if (Route::has('password.request'))
              <a class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="{{ route('password.request') }}">
                {{ __('Forgot your password?') }}
              </a>
              @endif
            </div>

            <div id="loginBtn">
              @csrf
              <x-jet-button
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <div role="status" id="spinner" class="hidden">
                  <svg class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor" />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                {{ __('Sign in to your account') }}
              </x-jet-button>
            </div>

            <script>
            let btn = document.querySelector('button');
            let loginBtn = document.getElementById('loginBtn');
            let loginForm = document.getElementById('loginForm');
            let spinner = document.getElementById('spinner');
            loginBtn.addEventListener('click', function() {
              loginForm.submit();
              spinner.classList.remove('hidden');
              btn.disabled = true;
              btn.form.firstElementChild.disabled = true;
              window.setTimeout(function() {
                spinner.classList.add('hidden');
                btn.disabled = false;
                btn.form.firstElementChild.disabled = false;
              }, 4000);
            }, false);
            </script>
          </form>
        </div>
      </div>
    </div>
  </section>
</x-guest-layout>