<?php $__env->startSection('content'); ?>
    <form action="/admin/settings" method="POST" id="generalSettings">
        <?php echo csrf_field(); ?>
        <div class="card mb-5">
            <h4 class="card-header card-title"><?php echo e(__('Settings')); ?></h4>
            <div class="card-body">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <?php echo e(__('Site Title')); ?> </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="sitename" value="<?php echo e($general->sitename); ?>">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('TinyMCE API')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="tinymce" value="<?php echo e($general->tinymce); ?>">
                        <small><?php echo e(__('You can create api key from ')); ?> <a
                                href="https://www.tiny.cloud/my-account/dashboard/"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Tiny
                                Cloud</a></small>
                    </div>

                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('User Default Language')); ?></label>
                        <select
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="VUE_APP_I18N_LOCALE" name="VUE_APP_I18N_LOCALE">
                            <option value="" <?php if(getenv('VUE_APP_I18N_LOCALE') == null || getenv('VUE_APP_I18N_LOCALE') == ''): ?> selected <?php endif; ?> disabled="">
                                <?php echo e(__('Choose an option')); ?>

                            </option>
                            <option value="ar" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'ar'): ?> selected <?php endif; ?>>
                                Arabic
                            </option>
                            <option value="bn" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'bn'): ?> selected <?php endif; ?>>
                                Bengali
                            </option>
                            <option value="de" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'de'): ?> selected <?php endif; ?>>
                                German
                            </option>
                            <option value="en" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'en'): ?> selected <?php endif; ?>>
                                English
                            </option>
                            <option value="es" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'es'): ?> selected <?php endif; ?>>
                                Spanish
                            </option>
                            <option value="fa" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'fa'): ?> selected <?php endif; ?>>
                                Farsi
                            </option>
                            <option value="fr" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'fr'): ?> selected <?php endif; ?>>
                                French
                            </option>
                            <option value="id" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'id'): ?> selected <?php endif; ?>>
                                Indonesian
                            </option>
                            <option value="it" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'it'): ?> selected <?php endif; ?>>
                                Italian
                            </option>
                            <option value="ja" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'ja'): ?> selected <?php endif; ?>>
                                Japanese
                            </option>
                            <option value="ko" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'ko'): ?> selected <?php endif; ?>>
                                Korean
                            </option>
                            <option value="nb" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'nb'): ?> selected <?php endif; ?>>
                                Norwegian
                            </option>
                            <option value="nl" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'nl'): ?> selected <?php endif; ?>>
                                Netherlands
                            </option>
                            <option value="pt" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'pt'): ?> selected <?php endif; ?>>
                                Portuguese
                            </option>
                            <option value="ru" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'ru'): ?> selected <?php endif; ?>>
                                Russain
                            </option>
                            <option value="th" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'th'): ?> selected <?php endif; ?>>
                                Thai
                            </option>
                            <option value="tr" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'tr'): ?> selected <?php endif; ?>>
                                Turkish
                            </option>
                            <option value="vi" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'vi'): ?> selected <?php endif; ?>>
                                Vietnamese
                            </option>
                            <option value="zh" <?php if(getenv('VUE_APP_I18N_LOCALE') == 'zh'): ?> selected <?php endif; ?>>
                                Chinese
                            </option>
                        </select>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('User Fallback Language')); ?></label>
                        <select
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="VUE_APP_I18N_FALLBACK_LOCALE" name="VUE_APP_I18N_FALLBACK_LOCALE">
                            <option value="" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == null || getenv('VUE_APP_I18N_FALLBACK_LOCALE') == ''): ?> selected <?php endif; ?> disabled="">
                                <?php echo e(__('Choose an option')); ?>

                            </option>
                            <option value="ar" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ar'): ?> selected <?php endif; ?>>
                                Arabic
                            </option>
                            <option value="bn" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'bn'): ?> selected <?php endif; ?>>
                                Bengali
                            </option>
                            <option value="de" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'de'): ?> selected <?php endif; ?>>
                                German
                            </option>
                            <option value="en" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'en'): ?> selected <?php endif; ?>>
                                English
                            </option>
                            <option value="es" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'es'): ?> selected <?php endif; ?>>
                                Spanish
                            </option>
                            <option value="fa" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'fa'): ?> selected <?php endif; ?>>
                                Farsi
                            </option>
                            <option value="fr" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'fr'): ?> selected <?php endif; ?>>
                                French
                            </option>
                            <option value="id" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'id'): ?> selected <?php endif; ?>>
                                Indonesian
                            </option>
                            <option value="it" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'it'): ?> selected <?php endif; ?>>
                                Italian
                            </option>
                            <option value="ja" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ja'): ?> selected <?php endif; ?>>
                                Japanese
                            </option>
                            <option value="ko" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ko'): ?> selected <?php endif; ?>>
                                Korean
                            </option>
                            <option value="nb" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'nb'): ?> selected <?php endif; ?>>
                                Norwegian
                            </option>
                            <option value="nl" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'nl'): ?> selected <?php endif; ?>>
                                Netherlands
                            </option>
                            <option value="pt" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'pt'): ?> selected <?php endif; ?>>
                                Portuguese
                            </option>
                            <option value="ru" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'ru'): ?> selected <?php endif; ?>>
                                Russain
                            </option>
                            <option value="th" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'th'): ?> selected <?php endif; ?>>
                                Thai
                            </option>
                            <option value="tr" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'tr'): ?> selected <?php endif; ?>>
                                Turkish
                            </option>
                            <option value="vi" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'vi'): ?> selected <?php endif; ?>>
                                Vietnamese
                            </option>
                            <option value="zh" <?php if(getenv('VUE_APP_I18N_FALLBACK_LOCALE') == 'zh'): ?> selected <?php endif; ?>>
                                Chinese
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Cors Link')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="cors" value="<?php echo e($general->cors); ?>">
                        <small><?php echo e(__('Follow cors guide on our documentation')); ?></small>
                    </div>
                    <?php if($general->staging != 1 && getExt(7) == 1): ?>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Wallet Connect Project ID')); ?></label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="VUE_APP_WALLET_CONNECT_PROJECT_ID"
                                value="<?php echo e(getenv('VUE_APP_WALLET_CONNECT_PROJECT_ID')); ?>">
                            <small><?php echo e(__('You can create project id from ')); ?>

                                <a href="https://cloud.walletconnect.com/"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Walletconnect
                                    Cloud</a></small>
                        </div>
                    <?php else: ?>
                        <input type="hidden" class="hidden" name="VUE_APP_WALLET_CONNECT_PROJECT_ID"
                            value="<?php echo e(getenv('VUE_APP_WALLET_CONNECT_PROJECT_ID')); ?>">
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php if($general->staging != 1 && getExt(10) == 1): ?>
            <div class="card my-10">
                <h4 class="card-header card-title"><?php echo e(__('Native Trading')); ?></h4>
                <div class="card-body">
                    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('TATUM API URL')); ?></label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_API_URL" value="<?php echo e(getenv('TATUM_API_URL')); ?>">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('TATUM API KEY')); ?></label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_API_KEY" value="<?php echo e(getenv('TATUM_API_KEY')); ?>">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('TATUM TESTNET API KEY')); ?>

                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_TESTNET_API_KEY"
                                value="<?php echo e(getenv('TATUM_TESTNET_API_KEY')); ?>">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('NETWORK')); ?></label>
                            <select id="NETWORK" name="NETWORK" value="<?php echo e(getenv('NETWORK')); ?>"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value=""
                                    <?php echo e(getenv('NETWORK') == null || getenv('NETWORK') == '' ? 'selected' : ''); ?>>
                                    <?php echo e(__('Choose an option')); ?>

                                </option>
                                <option value="testnet" <?php echo e(getenv('NETWORK') == 'testnet' ? 'selected' : ''); ?>>
                                    <?php echo e(__('testnet')); ?></option>
                                <option value="mainnet" <?php echo e(getenv('NETWORK') == 'mainnet' ? 'selected' : ''); ?>>
                                    <?php echo e(__('mainnet')); ?></option>

                            </select>
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('TESTNET_TYPE')); ?>

                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TESTNET_TYPE" id="TESTNET_TYPE"
                                value="<?php echo e(getenv('TESTNET_TYPE') ?? 'ethereum-sepolia'); ?>">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('TATUM_RETRIES')); ?>

                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_RETRIES" id="TATUM_RETRIES"
                                value="<?php echo e(getenv('TATUM_RETRIES') ?? '5'); ?>">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('TATUM_RETRY_DELAY')); ?>

                            </label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="TATUM_RETRY_DELAY" id="TATUM_RETRY_DELAY"
                                value="<?php echo e(getenv('TATUM_RETRY_DELAY') ?? '1000'); ?>">
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <?php if($general->staging != 1 && getExt(12) == 1): ?>
            <div class="card my-10">
                <h4 class="card-header card-title"><?php echo e(__('PUSHER')); ?></h4>
                <div class="card-body">
                    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('PUSHER APP ID')); ?></label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="PUSHER_APP_ID" value="<?php echo e(getenv('PUSHER_APP_ID')); ?>">
                            <small><?php echo e(__('Create an app in')); ?> <a
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://dashboard.pusher.com/apps"
                                    target="__blank"><?php echo e(__('Pusher')); ?></a></small>
                        </div>

                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('PUSHER APP KEY')); ?></label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="PUSHER_APP_KEY" value="<?php echo e(getenv('PUSHER_APP_KEY')); ?>">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('PUSHER APP SECRET')); ?></label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text" name="PUSHER_APP_SECRET" value="<?php echo e(getenv('PUSHER_APP_SECRET')); ?>">
                        </div>
                        <div>
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('PUSHER APP CLUSTER')); ?>

                            </label>
                            <select
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="PUSHER_APP_CLUSTER" name="PUSHER_APP_CLUSTER">
                                <option value="" <?php if(getenv('PUSHER_APP_CLUSTER') == ''): ?> selected <?php endif; ?> disabled="">
                                    <?php echo e(__('Choose an option')); ?>

                                </option>
                                <option value="mt1" <?php if(getenv('PUSHER_APP_CLUSTER') == 'mt1'): ?> selected <?php endif; ?>>
                                    mt1 (US East (N. Virginia))
                                </option>
                                <option value="ap1" <?php if(getenv('PUSHER_APP_CLUSTER') == 'ap1'): ?> selected <?php endif; ?>>
                                    ap1 (Asia Pacific (Singapore))
                                </option>
                                <option value="ap2" <?php if(getenv('PUSHER_APP_CLUSTER') == 'ap2'): ?> selected <?php endif; ?>>
                                    ap2 (Asia Pacific (Mumbai))
                                </option>
                                <option value="us2" <?php if(getenv('PUSHER_APP_CLUSTER') == 'us2'): ?> selected <?php endif; ?>>
                                    us2 (US East (Ohio))
                                </option>
                                <option value="ap3" <?php if(getenv('PUSHER_APP_CLUSTER') == 'ap3'): ?> selected <?php endif; ?>>
                                    ap3 (Asia Pacific (Tokyo))
                                </option>
                                <option value="us3" <?php if(getenv('PUSHER_APP_CLUSTER') == 'us3'): ?> selected <?php endif; ?>>
                                    us3 (US West (Oregon))
                                </option>
                                <option value="ap4" <?php if(getenv('PUSHER_APP_CLUSTER') == 'ap4'): ?> selected <?php endif; ?>>
                                    ap4 (Asia Pacific (Sydney))
                                </option>
                                <option value="eu" <?php if(getenv('PUSHER_APP_CLUSTER') == 'eu'): ?> selected <?php endif; ?>>
                                    eu (EU (Ireland))
                                </option>
                                <option value="sa1" <?php if(getenv('PUSHER_APP_CLUSTER') == 'sa1'): ?> selected <?php endif; ?>>
                                    sa1 (South America (São Paulo))
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <div class="card my-10">
            <h4 class="card-header card-title"><?php echo e(__('Rates Settings')); ?></h4>
            <div class="card-body">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Currency')); ?></label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="cur_text" value="<?php echo e($general->cur_text); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Currency Symbol')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="cur_sym" value="<?php echo e($general->cur_sym); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Practice Balance')); ?></label>
                        <div class="input-group">
                            <input type="text" name="practice_balance" placeholder="<?php echo e(__('Enter Amount')); ?>"
                                value="<?php echo e(getAmount($general->practice_balance)); ?>" aria-describedby="basic-addon2">
                            <span id="basic-addon2"><?php echo e($general->practice_wallet); ?></span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Practice Wallet')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text" name="practice_wallet" value="<?php echo e($general->practice_wallet); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trade Profit')); ?></label>
                        <div class="input-group">
                            <input type="text" name="profit" placeholder="<?php echo e(__('Enter Amount')); ?>"
                                value="<?php echo e(getAmount($general->profit)); ?>" aria-describedby="basic-addon2">

                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Exchange Fee')); ?></label>
                        <div class="input-group">
                            <input type="text" name="exchange_fee" placeholder="<?php echo e(__('Enter Percentage')); ?>"
                                value="<?php echo e(getAmount($general->exchange_fee)); ?>" aria-describedby="basic-addon2">
                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Transaction Fee')); ?></label>
                        <div class="input-group">
                            <input type="text" name="trx_fee" placeholder="<?php echo e(__('Enter Percentage')); ?>"
                                value="<?php echo e(getAmount($general->trx_fee)); ?>" aria-describedby="basic-addon2">
                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Thirdparty Withdraw Fees')); ?></label>
                        <div class="input-group">
                            <input type="text" name="provider_withdraw_fee" placeholder="<?php echo e(__('Enter Amount')); ?>"
                                value="<?php echo e(getAmount($general->provider_withdraw_fee)); ?>" aria-describedby="basic-addon2">
                            <span id="basic-addon2">
                                %
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card my-10">
            <h4 class="card-header card-title"><?php echo e(__('Trade Limits Settings')); ?></h4>
            <div class="card-body">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Minimum Amount')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_amount" step="0.00000001" value="<?php echo e($limits->min_amount ?? 0); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Maximum Amount')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_amount" value="<?php echo e($limits->max_amount ?? 0); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Minimum Seconds')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_time_sec" value="<?php echo e($limits->min_time_sec ?? 0); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Maximum Seconds')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_time_sec" value="<?php echo e($limits->max_time_sec ?? 0); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Minimum Minutes')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_time_min" value="<?php echo e($limits->min_time_min ?? 0); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Maximum Minutes')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_time_min" value="<?php echo e($limits->max_time_min ?? 0); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Minimum Hours')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="min_time_hour" value="<?php echo e($limits->min_time_hour ?? 0); ?>">
                    </div>
                    <div>
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Trades Maximum Hours')); ?>

                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number" name="max_time_hour" value="<?php echo e($limits->max_time_hour ?? 0); ?>">
                    </div>
                </div>
            </div>
        </div>
        <div class="card my-10">
            <h4 class="card-header card-title"><?php echo e(__('Extra Settings')); ?></h4>
            <div class="card-body">
                <div class="grid gap-5 md:grid-cols-3">
                    <div class="flex items-center pl-4  dark:border-gray-700">
                        <div class="flex items-center justify-between">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                type="checkbox" data-bs-toggle="toggle" data-onstyle="success" data-offstyle="danger"
                                data-on="<?php echo e(__('Enable')); ?>" data-off="<?php echo e(__('Disabled')); ?>" name="registration"
                                <?php if($general->registration): ?> checked <?php endif; ?>>
                            <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                                for="registration"><?php echo e(__('User Registration')); ?></label>
                        </div>
                    </div>
                    <div class="flex items-center pl-4  dark:border-gray-700">
                        <div class="flex items-center justify-between">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                type="checkbox" data-bs-toggle="toggle" data-onstyle="success" data-offstyle="danger"
                                data-on="<?php echo e(__('Enable')); ?>" data-off="<?php echo e(__('Disabled')); ?>" name="force_ssl"
                                <?php if($general->force_ssl): ?> checked <?php endif; ?>>
                            <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                                for="force_ssl"><?php echo e(__('Force SSL')); ?></label>
                        </div>
                    </div>
                    <div class="flex items-center pl-4  dark:border-gray-700">
                        <div class="flex items-center justify-between">
                            <input
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                type="checkbox" name="APP_DEBUG" <?php if(getenv('APP_DEBUG') == 'true'): ?> checked <?php endif; ?>>
                            <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                                for="APP_DEBUG"><?php echo e(__('App Debug')); ?></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-outline-primary"><?php echo e(__('Update')); ?></button>
            </div>
        </div>
    </form>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/hyqfin/public_html/resources/views/admin/setting/general_setting.blade.php ENDPATH**/ ?>