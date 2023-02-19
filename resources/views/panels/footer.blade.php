<!-- BEGIN: Footer-->
<footer
    class="footer footer-light {{ $configData['footerType'] === 'footer-hidden' ? 'd-none' : '' }} {{ $configData['footerType'] }}">
    <div class="col d-flex justify-content-between">
        <span class="float-md-start d-none d-md-inline-block mt-25">{{ __('COPYRIGHT') }} &copy;
            <script>
                document.write(new Date().getFullYear())
            </script><a class="ms-25" target="_blank">{{ siteName() }}</a>,
            <span class="d-none d-sm-inline-block">{{ __('All rights Reserved') }}</span>
        </span>
        <div class="float-md-end d-block d-md-inline-block ms-auto my-auto border-start px-1" id="txt"></div>
        <div class="dropdown dropdown-language my-auto border-end border-start px-1">
            <a id="dropdown-flag" href="#" data-bs-toggle="dropdown" aria-haspopup="true">
                <i class="flag-icon flag-icon-us"></i>
                <i class="bi bi-chevron-up text-dark"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-flag">
                @php
                    $locales = [
                        'ar' => ['lang' => 'Arabic', 'icon' => 'iq'],
                        'bn' => ['lang' => 'Bengali', 'icon' => 'in'],
                        'de' => ['lang' => 'German', 'icon' => 'de'],
                        'en' => ['lang' => 'English', 'icon' => 'us'],
                        'es' => ['lang' => 'Spanish', 'icon' => 'es'],
                        'fa' => ['lang' => 'Farsi', 'icon' => 'ir'],
                        'fr' => ['lang' => 'French', 'icon' => 'fr'],
                        'hi' => ['lang' => 'Hindi', 'icon' => 'in'],
                        'hu' => ['lang' => 'Hungarian', 'icon' => 'hu'],
                        'id' => ['lang' => 'Indonesian', 'icon' => 'id'],
                        'it' => ['lang' => 'Italian', 'icon' => 'it'],
                        'ja' => ['lang' => 'Japanese', 'icon' => 'jp'],
                        'ko' => ['lang' => 'Korean', 'icon' => 'kr'],
                        'nb' => ['lang' => 'Norwegian', 'icon' => 'no'],
                        'nl' => ['lang' => 'Netherlands', 'icon' => 'nl'],
                        'pt' => ['lang' => 'Portuguese', 'icon' => 'pt'],
                        'ru' => ['lang' => 'Russain', 'icon' => 'ru'],
                        'th' => ['lang' => 'Thai', 'icon' => 'th'],
                        'tr' => ['lang' => 'Turkish', 'icon' => 'tr'],
                        'uk' => ['lang' => 'Ukrainian', 'icon' => 'ua'],
                        'ur' => ['lang' => 'Urdo', 'icon' => 'pk'],
                        'vi' => ['lang' => 'Vietnamese', 'icon' => 'vn'],
                        'zh' => ['lang' => 'Chinese', 'icon' => 'cn'],
                    ];
                    $locale = arrayToObject($locales);
                @endphp
                @foreach ($locales as $key => $locale)
                    <a class="dropdown-item" style="padding: 3px" href="{{ url('lang/' . $key) }}"
                        data-language="{{ $key }}">
                        <i class="flag-icon flag-icon-{{ $locale['icon'] }}"> </i>
                        {{ $locale['lang'] }}
                    </a>
                @endforeach
            </div>
        </div>
        @if (getExt(12)->status == 1)
            <div class="d-none d-lg-block my-auto border-start">
                <a class="nav-link fs-4 mx-1"
                    style="
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    "
                    target="_blank" href="/user/livechat">
                    <i class="bi bi-chat-dots"></i>
                </a>
            </div>
        @endif
        <div class="d-none d-lg-block my-auto border-start px-1">
            <a class="nav-link fs-4" style="padding-top:0!important;padding-bottom:0!important;">
                <i id="toggleFullScreen" class="bi bi-aspect-ratio" onclick="toggleFullScreen();"></i>
            </a>
        </div>
        <div class="my-auto border-start border-end px-1">
            <a class="nav-link nav-link-style fs-4" style="padding-top:0!important;padding-bottom:0!important;">
                <i class="bi bi-sun"></i>
            </a>
        </div>

    </div>

    <script>
        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                $('#toggleFullScreen')
                    .removeClass('bi-aspect-ratio')
                    .addClass('bi-fullscreen-exit');
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    $('#toggleFullScreen')
                        .removeClass('bi-fullscreen-exit')
                        .addClass('bi-aspect-ratio');
                }
            }
        }

        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            var d = today.getFullYear();
            var mm = today.getMonth() + 1;
            var dd = today.getDate();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('txt').innerHTML =
                '<div class="d-block d-md-inline-block">' + '<i class="bi bi-clock" style="margin-right:5px"></i>' + d +
                '-' + mm + '-' + dd + '<i class="bi bi-chevron-right mx-1"></i>' + h + ':' + m + ':' +
                '<span class="text-danger">' + s + '</span>' + '</div>';
            var t = setTimeout(startTime, 500);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i
            }; // add zero in front of numbers < 10
            return i;
        }
    </script>
    <button class="btn scroll-top" style="z-index:10000;" type="button"><i
            class="bi bi-arrow-up-square-fill font-medium-5"></i></button>
    <!-- END: Footer-->
