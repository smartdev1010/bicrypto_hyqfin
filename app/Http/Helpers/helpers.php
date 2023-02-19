<?php

use App\Models\Currencies;
use App\Models\Eco\EcoMainnetTokens;
use App\Models\Eco\EcoSettings;
use App\Models\Eco\EcoTokens;
use App\Models\Eco\EcoWallet;
use App\Models\Extension;
use App\Models\Forex\ForexAccounts;
use App\Models\Forex\ForexInvestments;
use App\Models\Forex\ForexSignals;
use App\Models\KYC;
use App\Models\GeneralSetting;
use App\Models\GlobalMeta;
use App\Models\MLM\MLM;
use App\Models\MLM\MLMBV;
use App\Models\MLM\MLMDaily;
use App\Models\MLM\MLMPlan;
use App\Models\NotificationSetting;
use App\Models\Page;
use App\Models\Setting;
use App\Models\SmsTemplate;
use App\Models\ThirdpartyProvider;
use App\Models\User;
use App\Models\Wallet;
use App\Models\Platform;
use App\Models\Staking\StakingLog;
use Carbon\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Intervention\Image\ImageManager;
use App\Notify\Notify;
use Illuminate\Support\Facades\Cache;
use Tatum\Tatum;

function getGen()
{

    $general = Cache::get('GeneralSetting');
    if (!$general) {
        $general = GeneralSetting::first();
        Cache::put('GeneralSetting', $general);
    }
    return $general;
}

function getNotify()
{

    $notification = Cache::get('NotificationSetting');
    if (!$notification) {
        $notification = NotificationSetting::first();
        Cache::put('NotificationSetting', $notification);
    }
    return $notification;
}

function notify($user, $templateName, $shortCodes = null, $sendVia = null, $createLog = true, $clickValue = null)
{
    $general = getNotify();
    $globalShortCodes = [
        'site_name' => $general->site_name,
        'logo' => getenv('APP_URL') . '/' . getImage(imagePath()['logoIcon']['path'] . '/logo.png'),
    ];

    if (gettype($user) == 'array') {
        $user = (object) $user;
    }

    $shortCodes = array_merge($shortCodes ?? [], $globalShortCodes);

    $notify = new Notify($sendVia);
    $notify->templateName = $templateName;
    $notify->shortCodes = $shortCodes;
    $notify->user = $user;
    $notify->createLog = $createLog;
    $notify->clickValue = $clickValue;
    $notify->send();
}

function BVstore(
    $user,
    $type,
    $amount,
    $log_id = null,
    $duration = null,
    $daily = false,
    $cl = false
) {
    $cm = true;
    $plat = getPlatform('mlm');
    $mlm = MLM::where('username', $user->username)->first();
    if ($plat->membership_status == 1) {
        if ($mlm->membership == 0) {
            if ($plat->membership_can_earn == 1) {
                $cm = false;
            }
        }
    }
    if ($cm == true) {
        $ref = User::where('id', $user->ref_by)->select(['id', 'username', 'ref_by'])->first();
        $refMLM = MLM::where('username', $ref->username)->first();
        $plan = MLMPlan::where('status', 1)->where('rank', $refMLM->rank)->first();

        $community_line_percentage = 0;
        $total_percentage = 100 + ($plat->membership_fees ?? 1);

        if ($cl == true && $plat->community_line_status == 1 && $plat->community_line_clients > 0) {
            $community_line_percentage = 1 / $total_percentage;
            $clients = MLM::where('id', '!=', $mlm->id)->where('membership', '>', 0)->orderBy('community_line', 'DESC')->limit($plat->community_line_clients)->get();
            foreach ($clients as $client) {
                BVnew(User::where('username', $client->username)->select(['id'])->first()->id, 10, $amount * ($type == 11 ? ((100 - $plan->margin) / 100) : 1) * $community_line_percentage);
            }
        }

        switch ($type) {
            case '1':
                $commission = $plan->deposit_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '2':
                $commission = $plan->ref_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '3':
                $commission = $plan->active_ref_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '4':
                $commission = $plan->trade_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '5':
                $commission = $plan->bot_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '6':
                $commission = $plan->ico_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '7':
                $commission = $plan->forex_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '8':
                $commission = $plan->forex_investment_commission / 100 + ($plat->membership_fees ?? 1);
                break;
            case '9':
                $commission = $plan->staking / 100 + ($plat->membership_fees ?? 1);
                break;
            case '10':
                $commission = $community_line_percentage / 100 + ($plat->membership_fees ?? 1);
                break;
            case '11':
                $commission = $plan->margin / (100 + ($plat->membership_fees ?? 1));
                break;
            default:
                $commission = 1;
                break;
        }

        if ($plat->type == 'unilevel') {
            if ($cl == true) {
                if ($type == 11) {
                    $bonus = $amount * $commission * ($plat->unilevel_upline1_percentage / $total_percentage);
                } else {
                    $bonus = $amount  * ($plat->unilevel_upline1_percentage / $total_percentage);
                }
            } else {
                $bonus = $amount  * $commission * ($plat->unilevel_upline1_percentage / 100 + ($plat->membership_fees ?? 1));
            }
            if ($daily != true) {
                if ($plat->membership_status == 1) {
                    if ($refMLM->membership != 0) {
                        BVnew($ref->id, $type, $bonus);
                    }
                } else {
                    BVnew($ref->id, $type, $bonus);
                }
            } else {
                if ($plat->membership_status == 1) {
                    if ($refMLM->membership != 0) {
                        BVplan($ref->id, $type, $bonus, $log_id, $duration);
                    }
                } else {
                    BVplan($ref->id, $type, $bonus, $log_id, $duration);
                }
            }
        } else {
            $bonus = $amount * $commission;
            if ($daily == true) {
                BVplan($ref->id, $type, $bonus, $log_id, $duration);
            }
            if ($type == 1) {
                $userMLM = MLM::where('username', $user->username)->first();
                if ($userMLM->status == 1) {
                    BVnew($ref->id, $type, $bonus);
                } else {
                    $bvLog = new MLMBV();
                    $bvLog->user_id = $ref->id;
                    if ($userMLM->rank == 0) {
                        if ($bonus >= $plan->ref_commission) {
                            $amount = $bonus;
                        } else {
                            $amount = $plan->ref_commission;
                        }
                        $bvLog->type = '2';
                    } else {
                        if ($bonus >= $plan->active_ref_commission) {
                            $amount = $bonus;
                        } else {
                            $amount = $plan->active_ref_commission;
                        }
                        $bvLog->type = '3';
                    }
                    $bvLog->amount = $amount;
                    $bvLog->status = 0;
                    $bvLog->save();

                    $userMLM->status = 1;
                    $userMLM->save();
                }
            }
        }
        if ($plat->type == 'unilevel' && $ref->ref_by != null && $plat->unilevel_upline2_status == 1) {
            $u1 = User::where('id', $ref->ref_by)->first();
            if ($daily != true) {
                $u1mlm = MLM::where('username', $u1->username)->first();
                if ($plat->membership_status == 1) {
                    if ($u1mlm->membership != 0) {
                        BVnew($u1->id, $type, $amount * $commission * ($plat->unilevel_upline2_percentage / ($cl == true ? $total_percentage : 100)));
                    }
                } else {
                    BVnew($u1->id, $type, $amount * $commission * ($plat->unilevel_upline2_percentage / ($cl == true ? $total_percentage : 100)));
                }
                if ($u1->ref_by != null && $plat->unilevel_upline3_status == 1) {
                    $u2 = User::where('id', $u1->ref_by)->first();
                    $u2mlm = MLM::where('username', $u2->username)->first();
                    if ($plat->membership_status == 1) {
                        if ($u2mlm->membership != 0) {
                            BVnew($u2->id, $type, $amount * $commission * ($plat->unilevel_upline3_percentage / ($cl == true ? $total_percentage : 100)));
                        }
                    } else {
                        BVnew($u2->id, $type, $amount * $commission * ($plat->unilevel_upline3_percentage / ($cl == true ? $total_percentage : 100)));
                    }
                    if ($u2->ref_by != null && $plat->unilevel_upline4_status == 1) {
                        $u3 = User::where('id', $u2->ref_by)->first();
                        $u3mlm = MLM::where('username', $u3->username)->first();
                        if ($plat->membership_status == 1) {
                            if ($u3mlm->membership != 0) {
                                BVnew($u3->id, $type, $amount * $commission * ($plat->unilevel_upline4_percentage / ($cl == true ? $total_percentage : 100)));
                            }
                        } else {
                            BVnew($u3->id, $type, $amount * $commission * ($plat->unilevel_upline4_percentage / ($cl == true ? $total_percentage : 100)));
                        }
                        if ($u3->ref_by != null && $plat->unilevel_upline5_status == 1) {
                            $u4 = User::where('id', $u3->ref_by)->first();
                            $u4mlm = MLM::where('username', $u4->username)->first();
                            if ($plat->membership_status == 1) {
                                if ($u4mlm->membership != 0) {
                                    BVnew($u4->id, $type, $amount * $commission * ($plat->unilevel_upline5_percentage / ($cl == true ? $total_percentage : 100)));
                                }
                            } else {
                                BVnew($u4->id, $type, $amount * $commission * ($plat->unilevel_upline5_percentage / ($cl == true ? $total_percentage : 100)));
                            }
                            if ($u4->ref_by != null && $plat->unilevel_upline6_status == 1) {
                                $u5 = User::where('id', $u4->ref_by)->first();
                                $u5mlm = MLM::where('username', $u5->username)->first();
                                if ($plat->membership_status == 1) {
                                    if ($u5mlm->membership != 0) {
                                        BVnew($u5->id, $type, $amount * $commission * ($plat->unilevel_upline6_percentage / ($cl == true ? $total_percentage : 100)));
                                    }
                                } else {
                                    BVnew($u5->id, $type, $amount * $commission * ($plat->unilevel_upline6_percentage / ($cl == true ? $total_percentage : 100)));
                                }
                                if ($u5->ref_by != null && $plat->unilevel_upline7_status == 1) {
                                    $u6 = User::where('id', $u5->ref_by)->first();
                                    $u6mlm = MLM::where('username', $u6->username)->first();
                                    if ($plat->membership_status == 1) {
                                        if ($u6mlm->membership != 0) {
                                            BVnew($u6->id, $type, $amount * $commission * ($plat->unilevel_upline7_percentage / ($cl == true ? $total_percentage : 100)));
                                        }
                                    } else {
                                        BVnew($u6->id, $type, $amount * $commission * ($plat->unilevel_upline7_percentage / ($cl == true ? $total_percentage : 100)));
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                $u1mlm = MLM::where('username', $u1->username)->first();
                if ($plat->membership_status == 1) {
                    if ($u1mlm->membership != 0) {
                        BVplan($u1->id, $type, $amount * $commission * ($plat->unilevel_upline2_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                    }
                } else {
                    BVplan($u1->id, $type, $amount * $commission * ($plat->unilevel_upline2_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                }
                if ($u1->ref_by != null && $plat->unilevel_upline3_status == 1) {
                    $u2 = User::where('id', $u1->ref_by)->first();
                    $u2mlm = MLM::where('username', $u2->username)->first();
                    if ($plat->membership_status == 1) {
                        if ($u2mlm->membership != 0) {
                            BVplan($u2->id, $type, $amount * $commission * ($plat->unilevel_upline3_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                        }
                    } else {
                        BVplan($u2->id, $type, $amount * $commission * ($plat->unilevel_upline3_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                    }
                    if ($u2->ref_by != null && $plat->unilevel_upline4_status == 1) {
                        $u3 = User::where('id', $u2->ref_by)->first();
                        $u3mlm = MLM::where('username', $u3->username)->first();
                        if ($plat->membership_status == 1) {
                            if ($u3mlm->membership != 0) {
                                BVplan($u3->id, $type, $amount * $commission * ($plat->unilevel_upline4_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                            }
                        } else {
                            BVplan($u3->id, $type, $amount * $commission * ($plat->unilevel_upline4_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                        }
                        if ($u3->ref_by != null && $plat->unilevel_upline5_status == 1) {
                            $u4 = User::where('id', $u3->ref_by)->first();
                            $u4mlm = MLM::where('username', $u4->username)->first();
                            if ($plat->membership_status == 1) {
                                if ($u4mlm->membership != 0) {
                                    BVplan($u4->id, $type, $amount * $commission * ($plat->unilevel_upline5_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                                }
                            } else {
                                BVplan($u4->id, $type, $amount * $commission * ($plat->unilevel_upline5_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                            }
                            if ($u4->ref_by != null && $plat->unilevel_upline6_status == 1) {
                                $u5 = User::where('id', $u4->ref_by)->first();
                                $u5mlm = MLM::where('username', $u5->username)->first();
                                if ($plat->membership_status == 1) {
                                    if ($u5mlm->membership != 0) {
                                        BVplan($u5->id, $type, $amount * $commission * ($plat->unilevel_upline6_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                                    }
                                } else {
                                    BVplan($u5->id, $type, $amount * $commission * ($plat->unilevel_upline6_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                                }
                                if ($u5->ref_by != null && $plat->unilevel_upline7_status == 1) {
                                    $u6 = User::where('id', $u5->ref_by)->first();
                                    $u6mlm = MLM::where('username', $u6->username)->first();
                                    if ($plat->membership_status == 1) {
                                        if ($u6mlm->membership != 0) {
                                            BVplan($u6->id, $type, $amount * $commission * ($plat->unilevel_upline7_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                                        }
                                    } else {
                                        BVplan($u6->id, $type, $amount * $commission * ($plat->unilevel_upline7_percentage / ($cl == true ? $total_percentage : 100)), $log_id, $duration);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function BVnew($id, $type, $bonus)
{
    $bv = new MLMBV();
    $bv->user_id = $id;
    $bv->type = $type;
    $bv->amount = $bonus;
    $bv->status = 0;
    $bv->save();
}

function BVplan($id, $type, $bonus, $log_id, $duration)
{
    $bv = new MLMDaily();
    $bv->user_id = $id;
    $bv->log_id = $log_id;
    $bv->type = $type;
    $bv->amount = $bonus;
    $bv->duration = $duration;
    $bv->days_left = $duration;
    $bv->save();
}


function applClasses()
{
    // default data array
    $DefaultData = [
        'mainLayoutType' => 'vertical', 'theme' => 'light', 'themeuser' => 'dark', 'sidebarCollapsed' => false, 'navbarColor' => '', 'horizontalMenuType' => 'floating', 'verticalMenuNavbarType' => 'floating', 'footerType' => 'static', //footer
        'layoutWidth' => 'boxed', 'showMenu' => true, 'bodyClass' => '', 'pageClass' => '', 'pageHeader' => true, 'contentLayout' => 'default', 'blankPage' => false, 'defaultLanguage' => 'en', 'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'),
    ];

    // if any key missing of array from custom.php file it will be merge and set a default value from dataDefault array and store in data variable
    $data = array_merge($DefaultData, config('custom.custom'));

    // All options available in the template
    $allOptions = ['mainLayoutType' => array(
        'vertical',
        'horizontal'
    ), 'theme' => array(
        'light' => 'light',
        'dark' => 'dark-layout',
        'bordered' => 'bordered-layout',
        'semi-dark' => 'semi-dark-layout'
    ), 'themeuser' => array(
        'light' => 'light',
        'dark' => 'dark-layout',
        'bordered' => 'bordered-layout',
        'semi-dark' => 'semi-dark-layout'
    ), 'sidebarCollapsed' => array(
        true,
        false
    ), 'showMenu' => array(
        true,
        false
    ), 'layoutWidth' => array(
        'full',
        'boxed'
    ), 'navbarColor' => array(
        'bg-primary',
        'bg-info',
        'bg-warning',
        'bg-success',
        'bg-danger',
        'bg-dark'
    ), 'horizontalMenuType' => array(
        'floating' => 'navbar-floating',
        'static' => 'navbar-static',
        'sticky' => 'navbar-sticky'
    ), 'horizontalMenuClass' => array(
        'static' => '',
        'sticky' => 'fixed-top',
        'floating' => 'floating-nav'
    ), 'verticalMenuNavbarType' => array(
        'floating' => 'navbar-floating',
        'static' => 'navbar-static',
        'sticky' => 'navbar-sticky',
        'hidden' => 'navbar-hidden'
    ), 'navbarClass' => array(
        'floating' => 'floating-nav',
        'static' => 'navbar-static-top',
        'sticky' => 'fixed-top',
        'hidden' => 'd-none'
    ), 'footerType' => array(
        'static' => 'footer-static',
        'sticky' => 'footer-fixed',
        'hidden' => 'footer-hidden'
    ), 'pageHeader' => array(
        true,
        false
    ), 'contentLayout' => array(
        'default',
        'content-left-sidebar',
        'content-right-sidebar',
        'content-detached-left-sidebar',
        'content-detached-right-sidebar'
    ), 'blankPage' => array(
        false,
        true
    ), 'sidebarPositionClass' => array(
        'content-left-sidebar' => 'sidebar-left',
        'content-right-sidebar' => 'sidebar-right',
        'content-detached-left-sidebar' => 'sidebar-detached sidebar-left',
        'content-detached-right-sidebar' => 'sidebar-detached sidebar-right',
        'default' => 'default-sidebar-position'
    ), 'contentsidebarClass' => array(
        'content-left-sidebar' => 'content-right',
        'content-right-sidebar' => 'content-left',
        'content-detached-left-sidebar' => 'content-detached content-right',
        'content-detached-right-sidebar' => 'content-detached content-left',
        'default' => 'default-sidebar'
    ), 'defaultLanguage' => array(
        'en' => 'en',
        'fr' => 'fr',
        'de' => 'de',
        'pt' => 'pt'
    ), 'direction' => array(
        'ltr',
        'rtl'
    ),];

    //if mainLayoutType value empty or not match with default options in custom.php config file then set a default value
    foreach ($allOptions as $key => $value) {
        if (array_key_exists($key, $DefaultData)) {
            if (gettype($DefaultData[$key]) === gettype($data[$key])) {
                // data key should be string
                if (is_string($data[$key])) {
                    // data key should not be empty
                    if (isset($data[$key]) && $data[$key] !== null) {
                        // data key should not be exist inside allOptions array's sub array
                        if (!array_key_exists($data[$key], $value)) {
                            // ensure that passed value should be match with any of allOptions array value
                            $result = array_search($data[$key], $value, 'strict');
                            if (empty($result) && $result !== 0) {
                                $data[$key] = $DefaultData[$key];
                            }
                        }
                    } else {
                        // if data key not set or
                        $data[$key] = $DefaultData[$key];
                    }
                }
            } else {
                $data[$key] = $DefaultData[$key];
            }
        }
    }

    //layout classes
    $layoutClasses = ['theme' => $data['theme'], 'themeuser' => $data['themeuser'], 'layoutTheme' => $allOptions['theme'][$data['theme']], 'layoutThemeUser' => $allOptions['themeuser'][$data['themeuser']], 'sidebarCollapsed' => $data['sidebarCollapsed'], 'showMenu' => $data['showMenu'], 'layoutWidth' => $data['layoutWidth'], 'verticalMenuNavbarType' => $allOptions['verticalMenuNavbarType'][$data['verticalMenuNavbarType']], 'navbarClass' => $allOptions['navbarClass'][$data['verticalMenuNavbarType']], 'navbarColor' => $data['navbarColor'], 'horizontalMenuType' => $allOptions['horizontalMenuType'][$data['horizontalMenuType']], 'horizontalMenuClass' => $allOptions['horizontalMenuClass'][$data['horizontalMenuType']], 'footerType' => $allOptions['footerType'][$data['footerType']], 'sidebarClass' => '', 'bodyClass' => $data['bodyClass'], 'pageClass' => $data['pageClass'], 'pageHeader' => $data['pageHeader'], 'blankPage' => $data['blankPage'], 'blankPageClass' => '', 'contentLayout' => $data['contentLayout'], 'sidebarPositionClass' => $allOptions['sidebarPositionClass'][$data['contentLayout']], 'contentsidebarClass' => $allOptions['contentsidebarClass'][$data['contentLayout']], 'mainLayoutType' => $data['mainLayoutType'], 'defaultLanguage' => $allOptions['defaultLanguage'][$data['defaultLanguage']], 'direction' => $data['direction'],];
    // set default language if session hasn't locale value the set default language
    if (!session()->has('locale')) {
        app()->setLocale($layoutClasses['defaultLanguage']);
    }

    // sidebar Collapsed
    if ($layoutClasses['sidebarCollapsed'] == 'true') {
        $layoutClasses['sidebarClass'] = "menu-collapsed";
    }

    // blank page class
    if ($layoutClasses['blankPage'] == 'true') {
        $layoutClasses['blankPageClass'] = "blank-page";
    }

    return $layoutClasses;
}

function updatePageConfig($pageConfigs)
{
    $demo = 'custom';
    if (isset($pageConfigs)) {
        if (count($pageConfigs) > 0) {
            foreach ($pageConfigs as $config => $val) {
                Config::set('custom.' . $demo . '.' . $config, $val);
            }
        }
    }
}

function slug($string)
{
    return Illuminate\Support\Str::slug($string);
}

function shortDescription($string, $length = 120)
{
    return Illuminate\Support\Str::limit($string, $length);
}

function shortCodeReplacer($shortCode, $replace_with, $template_string)
{
    return str_replace($shortCode, $replace_with, $template_string);
}

function grs($length = 34)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
function getNumber($no)
{
    $characters = '1234567890';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $no; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
//moveable
function uploadImg($file, $location, $size = null, $old = null, $filename = null, $naming = null)
{

    $path = makeDirectory($location);
    if (!$path) throw new Exception('File could not been created.');

    if (!empty($old)) {
        removeFile($location . '/' . $old);
    }
    if (!$filename) {
        if ($naming == 'same') {
            $filename = strtolower($file->getClientOriginalName());
        } else {
            $filename = uniqid() . time() . '.' . $file->getClientOriginalExtension();
        }
    }
    $file->move($location, $filename);
    if (!empty($size)) {
        $size = explode('x', strtolower($size));
        if ($file->getClientOriginalExtension() == 'png') {
            (new imagemanager('gd'))->make($location . '/' . $filename)->resize($size[0], $size[1])->toPng()->save($location . '/' . $filename);
        } elseif ($file->getClientOriginalExtension() == 'jpeg') {
            (new imagemanager('gd'))->make($location . '/' . $filename)->resize($size[0], $size[1])->toJpeg()->save($location . '/' . $filename);
        } elseif ($file->getClientOriginalExtension() == 'webp') {
            (new imagemanager('gd'))->make($location . '/' . $filename)->resize($size[0], $size[1])->toWebp()->save($location . '/' . $filename);
        } else {
            (new imagemanager('gd'))->make($location . '/' . $filename)->resize($size[0], $size[1])->toPng()->save($location . '/' . $filename);
        }
    } else {
        if ($file->getClientOriginalExtension() == 'png') {
            (new imagemanager('gd'))->make($location . '/' . $filename)->toPng()->save($location . '/' . $filename);
        } elseif ($file->getClientOriginalExtension() == 'jpeg') {
            (new imagemanager('gd'))->make($location . '/' . $filename)->toJpeg()->save($location . '/' . $filename);
        } elseif ($file->getClientOriginalExtension() == 'webp') {
            (new imagemanager('gd'))->make($location . '/' . $filename)->toWebp()->save($location . '/' . $filename);
        } else {
            (new imagemanager('gd'))->make($location . '/' . $filename)->toPng()->save($location . '/' . $filename);
        }
    }
    return $filename;
}
function uploadFile($file, $location, $size = null, $old = null)
{
    $path = makeDirectory($location);
    if (!$path) throw new Exception('File could not been created.');

    if (!empty($old)) {
        removeFile($location . '/' . $old);
    }

    $filename = uniqid() . time() . '.' . $file->getClientOriginalExtension();
    $file->move($location, $filename);
    return $filename;
}

function makeDirectory($path)
{
    if (file_exists($path)) return true;
    return mkdir($path, 0755, true);
}

function removeFile($path)
{
    return file_exists($path) && is_file($path) ? @unlink($path) : false;
}

function getTrx($length = 12)
{
    $characters = 'ABCDEFGHJKMNOPQRSTUVWXYZ123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function getAmount($amount, $length = 0)
{
    if (0 < $length) {
        return round($amount + 0, $length);
    }
    return $amount + 0;
}

function removeElement($array, $value)
{
    return array_diff($array, (is_array($value) ? $value : array(
        $value
    )));
}

function cryptoQR($wallet, $amount, $crypto = null)
{

    $varb = $wallet . "?amount=" . $amount;
    return "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=$varb&choe=UTF-8";
}

//moveable
function curlContent($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

//moveable
function curlPostContent($url, $arr = null)
{
    if ($arr) {
        $params = http_build_query($arr);
    } else {
        $params = '';
    }
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

function inputTitle($text)
{
    return ucfirst(preg_replace("/[^A-Za-z0-9 ]/", ' ', $text));
}

function titleToKey($text)
{
    return strtolower(str_replace(' ', '_', $text));
}

//moveable
function getIpInfo()
{
    $xml = @simplexml_load_file("http://www.geoplugin.net/xml.gp");

    $country = @$xml->geoplugin_countryName;
    $city = @$xml->geoplugin_city;
    $area = @$xml->geoplugin_areaCode;
    $code = @$xml->geoplugin_countryCode;
    $long = @$xml->geoplugin_longitude;
    $lat = @$xml->geoplugin_latitude;
    $ip = @$xml->geoplugin_request;

    $data['country'] = $country;
    $data['city'] = $city;
    $data['area'] = $area;
    $data['code'] = $code;
    $data['long'] = $long;
    $data['lat'] = $lat;
    $data['ip'] = $ip;
    $data['time'] = date('d-m-Y h:i:s A');

    return $data;
}

//moveable
function osBrowser()
{
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    $os_platform = "Unknown OS Platform";
    $os_array = array(
        '/windows nt 10/i' => 'Windows 10',
        '/windows nt 6.3/i' => 'Windows 8.1',
        '/windows nt 6.2/i' => 'Windows 8',
        '/windows nt 6.1/i' => 'Windows 7',
        '/windows nt 6.0/i' => 'Windows Vista',
        '/windows nt 5.2/i' => 'Windows Server 2003/XP x64',
        '/windows nt 5.1/i' => 'Windows XP',
        '/windows xp/i' => 'Windows XP',
        '/windows nt 5.0/i' => 'Windows 2000',
        '/windows me/i' => 'Windows ME',
        '/win98/i' => 'Windows 98',
        '/win95/i' => 'Windows 95',
        '/win16/i' => 'Windows 3.11',
        '/macintosh|mac os x/i' => 'Mac OS X',
        '/mac_powerpc/i' => 'Mac OS 9',
        '/linux/i' => 'Linux',
        '/ubuntu/i' => 'Ubuntu',
        '/iphone/i' => 'iPhone',
        '/ipod/i' => 'iPod',
        '/ipad/i' => 'iPad',
        '/android/i' => 'Android',
        '/blackberry/i' => 'BlackBerry',
        '/webos/i' => 'Mobile'
    );
    foreach ($os_array as $regex => $value) {
        if (preg_match($regex, $user_agent)) {
            $os_platform = $value;
        }
    }
    $browser = "Unknown Browser";
    $browser_array = array(
        '/msie/i' => 'Internet Explorer',
        '/firefox/i' => 'Firefox',
        '/safari/i' => 'Safari',
        '/chrome/i' => 'Chrome',
        '/edge/i' => 'Edge',
        '/opera/i' => 'Opera',
        '/netscape/i' => 'Netscape',
        '/maxthon/i' => 'Maxthon',
        '/konqueror/i' => 'Konqueror',
        '/mobile/i' => 'Handheld Browser'
    );
    foreach ($browser_array as $regex => $value) {
        if (preg_match($regex, $user_agent)) {
            $browser = $value;
        }
    }

    $data['os_platform'] = $os_platform;
    $data['browser'] = $browser;

    return $data;
}

function siteName()
{
    $general = GeneralSetting::first();
    $sitname = str_word_count($general->sitename);
    $sitnameArr = explode(' ', $general->sitename);
    if ($sitname > 1) {
        $title = "$sitnameArr[0] " . str_replace($sitnameArr[0], '', $general->sitename);
    } else {
        $title = "$general->sitename";
    }

    return $title;
}

function getImage($image, $size = null)
{
    $clean = '';
    $size = $size ? $size : 'undefined';
    if (file_exists($image) && is_file($image)) {
        return asset($image) . $clean;
    } else {
        return asset('market/notification.png') . $clean;
    }
}

//SMS EMIL moveable
function sendSms($user, $type, $shortCodes = [])
{
    $general = GeneralSetting::first(['sn', 'sms_api']);
    $sms_template = SmsTemplate::where('act', $type)->where('sms_status', 1)
        ->first();
    if ($general->sn == 1 && $sms_template) {

        $template = $sms_template->sms_body;

        foreach ($shortCodes as $code => $value) {
            $template = shortCodeReplacer('[[' . $code . ']]', $value, $template);
        }
        $template = urlencode($template);

        $message = shortCodeReplacer("[[number]]", $user->mobile, $general->sms_api);
        $message = shortCodeReplacer("[[message]]", $template, $message);
        $result = @curlContent($message);
    }
}

function getPaginate($paginate = 20)
{
    return $paginate;
}

function getH($username)
{
    return MLM::where('username', $username)->first();
}

function isWallet($user_id, $type, $symbol, $provider)
{
    return Wallet::where('user_id', $user_id)->where('provider', $provider)->where('type', $type)->where('symbol', $symbol)->exists();
}

function getWallet($user_id, $type, $symbol, $provider)
{
    return Wallet::where('user_id', $user_id)->where('provider', $provider)->where('type', $type)->where('symbol', $symbol)->first();
}

function getCurrency()
{
    return Currencies::where('status', 1)
        ->first();
}

function getPair($symbol)
{
    $pair = explode("/", $symbol);
    return $pair;
}

function imagePath()
{
    $data['cryptoCurrency'] = ['path' => 'assets/images/cryptoCurrency', 'size' => '64x64',];
    $data['profileImage'] = ['path' => 'assets/images/profile', 'size' => '80x80',];
    $data['popup'] = ['path' => 'assets/images/popup', 'size' => '600x400',];
    $data['bot'] = ['path' => 'assets/images/bot', 'size' => '64x64',];
    $data['staking'] = ['path' => 'assets/images/staking', 'size' => '64x64',];
    $data['provider'] = ['path' => 'assets/images/providers', 'size' => '85x25',];
    $data['template'] = ['path' => 'assets/images/template',];
    $data['article'] = ['path' => 'assets/images/article',];
    $data['forex_investment'] = ['path' => 'assets/images/forex/investment',];
    $data['signal'] = ['path' => 'assets/images/signal',];
    $data['ico'] = ['path' => 'assets/images/ico', 'size' => '64x64',];
    $data['contract'] = ['path' => 'assets/images/contract', 'size' => '64x64',];
    $data['kyc'] = ['path' => 'assets/images/kyc', 'size' => '1000x1000',];
    $data['post'] = ['path' => 'images/blog', 'size' => '600x450',];
    $data['gateway'] = ['path' => 'assets/images/gateway', 'size' => '400x200',];
    $data['verify'] = ['withdraw' => ['path' => 'assets/images/verify/withdraw'], 'deposit' => ['path' => 'assets/images/verify/deposit']];
    $data['image'] = ['default' => 'assets/images/default.png',];
    $data['withdraw'] = ['method' => ['path' => 'assets/images/withdraw/method', 'size' => '400x200',]];
    $data['ticket'] = ['path' => 'assets/images/support',];
    $data['language'] = ['path' => 'assets/images/lang', 'size' => '64x64'];
    $data['logoIcon'] = ['path' => 'assets/images/logoIcon', 'size' => '350x75'];
    $data['icon'] = ['size' => '128x128',];
    $data['favicon'] = ['size' => '16x16',];
    $data['extensions'] = ['path' => 'assets/images/extensions',];
    $data['seo'] = ['path' => 'assets/images/seo', 'size' => '600x315'];
    $data['profile'] = ['user' => ['path' => 'assets/images/user/profile', 'size' => '400x400'], 'admin' => ['path' => 'assets/admin/images/profile', 'size' => '400x400']];
    return $data;
}

function paginateArray($items, $perPage = 25, $page = null, $options = [])
{
    $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
    $items = $items instanceof Collection ? $items : Collection::make($items);
    return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
}

function diffForHumans($date)
{
    $lang = session()->get('lang');
    Carbon::setlocale($lang);
    return Carbon::parse($date)->diffForHumans();
}

function showDateTime($date, $format = 'd M, Y h:i A')
{
    $lang = session()->get('lang');
    Carbon::setlocale($lang);
    return Carbon::parse($date)->translatedFormat($format);
}

function gatewayRedirectUrl()
{
    return 'user.deposit';
}

function paginateLinks($data, $design = 'admin.partials.paginate')
{
    return $data->appends(request()
        ->all())
        ->links($design);
}

function getCoinRate($coinId)
{
    if ($coinId != 'USDT') {
        try {
            $url = 'https://api.binance.com/api/v3/ticker/price?symbol=' . strtoUpper($coinId) . 'USDT';
            $crypto = file_get_contents($url);
            $usd = json_decode($crypto, true);
            $cryptoRate = $usd['price'];
        } catch (\Throwable $th) {
            $cryptoRate = '1';
        }
        return $cryptoRate;
    } else {
        $cryptoRate = '1';
        return $cryptoRate;
    }
}

function getRate($pair)
{
    $url = 'https://api.binance.com/api/v3/ticker/price?symbol=' . strtoUpper($pair);
    $crypto = file_get_contents($url);
    $usd = json_decode($crypto, true);
    $cryptoRate = $usd['price'];
    return $cryptoRate;
}

function getTicker($symbol, $pair)
{
    if (ThirdpartyProvider::where('status', 1)->exists()) {
        $thirdparty = ThirdpartyProvider::where('status', 1)->first();
        $exchange_class = "\\ccxt\\$thirdparty->title";
        $api = new $exchange_class(array(
            'apiKey' => $thirdparty->api,
            'secret' => $thirdparty->secret,
            'password' => $thirdparty->password,
        ));
        if ($thirdparty->title == 'coinbasepro') {
            return $api->fetch_ticker($symbol . '/' . $pair)['info']['price'];
        } else if ($thirdparty->title == 'kucoin') {
            return $api->fetch_ticker($symbol . '/' . $pair)['ask'];
        }
    } else {
        return getRate($symbol . $pair);
    }
}

if (!function_exists('get_setting')) {
    function get_setting($name, $if_null = null)
    {
        $result = Setting::getValue($name);
        return ($result != null ? $result : $if_null);
    }
}

if (!function_exists('field_value_text')) {
    function field_value_text($field, $text = '')
    {
        if (empty($field)) {
            return null;
        }

        $get_value = get_setting($field);

        if ($get_value) {
            if (!empty($text)) {
                $data = json_decode($get_value, true);
                return $data[$text];
            } else {
                return json_decode($get_value, true);
            }
        } else {
            return null;
        }
    }
}

if (!function_exists('field_value')) {
    function field_value($field, $key = '')
    {
        if (empty($field)) {
            return false;
        }

        $get_value = get_setting($field);

        if ($get_value) {
            if (!empty($key)) {
                $data = json_decode($get_value, true);
                return ($data[$key] == '1') ? true : false;
            } else {
                return ($get_value == '1') ? true : false;
            }
        } else {
            return false;
        }
    }
}
if (!function_exists('required_mark')) {
    function required_mark($name)
    {
        $a = '';
        if (field_value($name, 'req')) {
            $a = '<span class="text-require text-danger">*</span>';
        }
        return $a;
    }
}
if (!function_exists('get_page')) {
    function get_page($slug, $get = '')
    {
        $data = Page::get_page($slug, $get);
        $return = ($data != null ? $data : '');
        return ($get == null ? $return : replace_shortcode($return));
    }
}

function kyc_address($kyc = '', $null = '')
{
    if (empty($kyc)) {
        return $null;
    }
    $addresss = [];
    if (_x($kyc->address1)) array_push($addresss, _x($kyc->address1));
    if (_x($kyc->address2)) array_push($addresss, _x($kyc->address2));
    if (_x($kyc->city)) array_push($addresss, _x($kyc->city));
    if (_x($kyc->state)) array_push($addresss, _x($kyc->state));
    if (_x($kyc->zip)) array_push($addresss, _x($kyc->zip));

    return (!empty($addresss) ? implode(', ', $addresss) : $null);
}

if (!function_exists('kyc_status')) {
    function kyc_status($id)
    {
        $kyc = KYC::FindOrFail($id);
        return $kyc->status != null ? ucfirst($kyc->status) : 'Pending';
    }
}

if (!function_exists('is_kyc_hide')) {
    function is_kyc_hide()
    {
        return (gws('kyc_opt_hide', 0) == 1) ? true : false;
    }
}

if (!function_exists('valid_kyc_file_ext')) {
    function valid_kyc_file_ext($file, $supported)
    {
        $file_info = pathinfo(storage_path('app/' . $file));
        if (isset($file_info['extension'])) {
            $ext = strtolower($file_info['extension']);
            return in_array($ext, $supported);
        }
        return false;
    }
}

if (!function_exists('_date')) {
    function _date($date, $format = null, $dateonly = false)
    {
        $site_date_f = get_setting('site_date_format', 'd M Y');
        $site_time_f = get_setting('site_time_format', 'h:iA');

        $setting_format = ($dateonly == true) ? $site_date_f : $site_date_f . ' ' . $site_time_f;

        $_format = (empty($format)) ? $setting_format : $format;
        $result = (!empty($date)) ? $date : now();

        return (!empty($date) ? date($_format, strtotime($result)) : null);
    }
}
if (!function_exists('__status')) {
    function __status($name, $get)
    {
        $all_status = [
            'pending' => (object)['icon' => 'progress', 'text' => 'Progress', 'status' => 'info',], 'missing' => (object)['icon' => 'pending', 'text' => 'Missing', 'status' => 'warning',], 'approved' => (object)['icon' => 'approved', 'text' => 'Approved', 'status' => 'success',], 'rejected' => (object)['icon' => 'canceled', 'text' => 'Rejected', 'status' => 'danger',], 'canceled' => (object)['icon' => 'canceled', 'text' => 'Canceled', 'status' => 'danger',], 'deleted' => (object)['icon' => 'canceled', 'text' => 'Deleted', 'status' => 'danger',], 'onhold' => (object)['icon' => 'pending', 'text' => 'On Hold', 'status' => 'info',], 'suspend' => (object)['icon' => 'canceled', 'text' => 'Suspended', 'status' => 'danger', 'null' => null,], 'active' => (object)['icon' => 'success', 'text' => 'Active', 'status' => 'success', 'null' => null,], 'default' => (object)['icon' => 'pending', 'text' => 'Pending', 'status' => 'info', 'null' => null,], 'purchase' => (object)['icon' => 'purchase', 'text' => 'Purchase', 'status' => 'success', 'null' => null,], 'bonus' => (object)['icon' => 'bonus', 'text' => 'Bonus', 'status' => 'warning', 'null' => null,], 'referral' => (object)['icon' => 'referral', 'text' => 'Referral', 'status' => 'primary', 'null' => null,], 'refund' => (object)['icon' => 'referral', 'text' => 'Refund', 'status' => 'danger', 'null' => null,],
            // New
            'deposit' => (object)['icon' => 'deposit', 'text' => 'Deposit', 'status' => 'primary', 'null' => null,], 'withdraw' => (object)['icon' => 'withdraw', 'text' => 'Withdraw', 'status' => 'warning', 'null' => null,], 'profit' => (object)['icon' => 'profit', 'text' => 'Profit', 'status' => 'success', 'null' => null,]
        ];
        return (isset($all_status[$name]) ? $all_status[$name]->$get : (isset($all_status['default']->$get) ? $all_status['default']->$get : $all_status['default']->null));
    }
}

if (function_exists('get_setting') && !function_exists('gws')) {
    function gws($name, $if_null = null)
    {
        return get_setting($name, $if_null);
    }
}
if (!function_exists('_x')) {
    function _x($string, $allow = '')
    {
        return ($allow) ? strip_tags($string, $allow) : strip_tags($string);
    }
}

if (!function_exists('email_setting')) {
    function email_setting($name, $if_null = '')
    {
        $data = ['driver' => get_setting('site_mail_driver'), 'host' => get_setting('site_mail_host'), 'port' => get_setting('site_mail_port'), 'from_address' => get_setting('site_mail_from_address'), 'from_email' => get_setting('site_mail_from_address'), 'from_name' => get_setting('site_mail_from_name'), 'encryption' => get_setting('site_mail_encryption'), 'user_name' => get_setting('site_mail_username'), 'password' => get_setting('site_mail_password'),];
        return (isset($data[$name]) && $data[$name] != null) ? $data[$name] : $if_null;
    }
}

if (!function_exists('to_num')) {
    function to_num($num, $decimal = 'max', $thousand = '', $trim = true, $point = '.', $zero_lead = false)
    {
        return _format(['number' => $num, 'decimal' => $decimal, 'thousand' => $thousand, 'zero_lead' => $zero_lead, 'trim' => $trim, 'point' => $point, 'end' => true]);
    }
}

if (!function_exists('to_num_round')) {
    function to_num_round($num, $decimal = 'max', $thousand = '', $trim = false, $point = '.', $zero_lead = true)
    {
        return _format(['number' => $num, 'decimal' => $decimal, 'thousand' => $thousand, 'zero_lead' => $zero_lead, 'trim' => $trim, 'point' => $point, 'end' => true]);
    }
}

if (!function_exists('to_round')) {
    function to_round($num, $decimal = 'max')
    {
        $site_decimal = 0;

        if (in_array($decimal, ['max', 'min', 'auto', 'zero'])) {
            if ($decimal == 'max') {
                $site_decimal = 6;
            } elseif ($decimal == 'min') {
                $site_decimal = 2;
            }
        } else {
            $site_decimal = (int)$decimal;
        }
        return round($num, $site_decimal);
    }
}
if (!function_exists('_format')) {
    function _format($attr = [])
    {
        $number = isset($attr['number']) ? $attr['number'] : 0;
        $point = isset($attr['point']) ? $attr['point'] : '.';
        $thousand = isset($attr['thousand']) ? $attr['thousand'] : '';
        $decimal = isset($attr['decimal']) ? $attr['decimal'] : 'max';
        $trim = isset($attr['trim']) ? $attr['trim'] : true;
        $end = isset($attr['end']) ? $attr['end'] : false;
        $zero_lead = isset($attr['zero_lead']) ? $attr['zero_lead'] : false;
        $site_decimal = 6;

        if (in_array($decimal, ['max', 'min', 'auto', 'zero'])) {
            if ($decimal == 'min') $site_decimal = 2;
            if ($decimal == 'zero') $site_decimal = 0;
        } else {
            $site_decimal = (int)$decimal;
        }
        $end_rep = ($trim == true && $end == true && ($decimal == 'min' || $decimal == 'max' || $decimal == 'auto')) ? '.00' : '';
        $ret = ($number > 0) ? number_format($number, $site_decimal, $point, $thousand) : 0;
        $ret = ($trim == true && $number > 0) ? rtrim($ret, '0') : $ret;
        $ret = (substr($ret, -1)) == '.' ? str_replace('.', $end_rep, $ret) : $ret;
        $ret = ($zero_lead === false && (substr($ret, -3) === '.00')) ? str_replace('.00', '', $ret) : $ret;
        return $ret;
    }
}

if (!function_exists('has_route')) {
    function has_route($name)
    {
        return Route::has($name);
    }
}
if (!function_exists('save_gmeta')) {
    function save_gmeta($name, $value = null, $pid = null, $extra = null)
    {
        $result = GlobalMeta::save_meta($name, $value, $pid, $extra);
        return $result;
    }
}

if (!function_exists('get_gmeta')) {
    function get_gmeta($name, $extra = false, $if_null = null, $pid = null)
    {
        if (empty($pid)) {
            $pid = auth()->check() ? auth()
                ->id() : null;
        }
        $get_gmeta = ($extra) ? GlobalMeta::get_value($name, $pid, 'extra') : GlobalMeta::get_value($name, $pid, 'value');

        return ($get_gmeta != null ? $get_gmeta : $if_null);
    }
}

if (!function_exists('get_gmeta_value')) {
    function get_gmeta_value($name, $if_null = null, $pid = null)
    {
        return get_gmeta($name, false, $if_null, $pid);
    }
}

if (!function_exists('get_gmeta_extra')) {
    function get_gmeta_extra($name, $if_null = null, $pid = null)
    {
        return get_gmeta($name, true, $if_null, $pid);
    }
}

if (!function_exists('gmvl') && function_exists('get_gmeta_value')) {
    function gmvl($name, $if_null = null, $pid = null)
    {
        return get_gmeta_value($name, $if_null, $pid);
    }
}

if (!function_exists('gmex') && function_exists('get_gmeta_extra')) {
    function gmex($name, $if_null = null, $pid = null)
    {
        return get_gmeta_extra($name, $if_null, $pid);
    }
}
if (!function_exists('is_page')) {
    function is_page($type, $compare = null)
    {
        if ($type == 'slug') {
            $full_url = url()->current();
            $in_url = explode('/', $full_url);
            $current = array_pop($in_url);
        } elseif ($type == 'route') {
            $full_url = Route::currentRouteName();
            $current = (is_admin()) ? str_replace('admin.', '', $full_url) : ((is_user()) ? str_replace('user.', '', $full_url) : $full_url);
        } else {
            $prefix = is_admin() ? 'admin' : (is_user() ? 'user' : '');
            $full_url = str_replace('.', '/', $compare);
            $current = request()->is($prefix . '/' . $full_url);
        }
        return ($current === true) ? true : (($current == $compare) ? true : false);
    }
}
if (!function_exists('is_who')) {
    function is_who($role = null)
    {
        $user = (auth()->check()) ? auth()
            ->user() : false;
        $user_role = ($user) ? $user->role : false;

        $return = $user_role;

        if (!empty($role)) {
            $return = ($role == $user_role) ? true : false;
        }

        return $return;
    }
}
if (!function_exists('is_admin')) {
    function is_admin()
    {
        return is_who('admin');
    }
}

if (!function_exists('is_user')) {
    function is_user()
    {
        return is_who('user');
    }
}
if (!function_exists('set_id')) {
    function set_id($number, $type = 'user')
    {
        if ($type == 'user') {
            return config('icoapp.user_prefix', 'UD') . sprintf('%05s', $number);
        }
        if ($type == 'trnx') {
            return config('icoapp.tnx_prefix', 'TNX') . sprintf('%06s', $number);
        }
        if ($type == 'refund') {
            return config('icoapp.refund_prefix', 'RTX') . sprintf('%06s', $number);
        }
        if ($type == 'withdraw') {
            return config('icoapp.withdraw_prefix', 'WTX') . sprintf('%06s', $number);
        }
    }
}
/* @function explode_user_for_demo() @version v1.0 @since 1.0 */
if (!function_exists('explode_user_for_demo')) {
    function explode_user_for_demo($data, $user_type)
    {
        if ($user_type == 'demo') {
            $data = substr($data, 0, 3) . '...' . substr($data, -3);
        }

        return $data;
    }
}
/* @function site_info() @version v1.2 @since 1.0 */
if (!function_exists('site_info')) {
    function site_info($output = 'name')
    {
        $apps = config('app.name');
        $name = get_setting('site_name', $apps);
        $desc = get_setting('site_description');
        $email = get_setting('site_email');
        $author = get_setting('site_author', $apps);
        $api_key = get_setting('site_api_key');
        $app_url = config('app.url');
        $base_url = url('/');

        $infos = ['apps' => $apps, 'author' => $author, 'name' => $name, 'desc' => $desc, 'email' => $email, 'apikey' => $api_key, 'url' => $base_url, 'url_only' => str_replace(['https://', 'http://'], '', $base_url), 'url_app' => $app_url,];

        $output = (empty($output)) ? 'name' : $output;
        $return = (($output == 'all') ? $infos : ((isset($infos[$output])) ? $infos[$output] : ''));

        return $return;
    }
}

/* @function replace_shortcode() @version v1.0 @since 1.0 */
if (!function_exists('replace_shortcode')) {
    function replace_shortcode($string)
    {
        $shortcode = array(
            '[[site_name]]',
            '[[site_email]]',
            '[[support_email]]',
            '[[user_name]]',
            '[[site_url]]'
        );
        $replace = array(
            site_info('name'),
            site_info('email'),
            get_setting('site_support_email', site_info('email')),
            (auth()->check() ? auth()
                ->user()->name : 'User'),
            url('/')
        );

        $return = str_replace($shortcode, $replace, $string);
        return $return;
    }
}

/* @function replace_with() @version v1.0 @since 1.0 */
if (!function_exists('replace_with')) {
    function replace_with($string, $where, $replace)
    {
        $return = str_replace($where, $replace, $string);
        return $return;
    }
}
function ttz($nbr)
{
    return strpos($nbr, '.') !== false ? rtrim(rtrim($nbr, '0'), '.') : $nbr;
}
function getUser($user_id)
{
    $user = User::find($user_id);
    return $user;
}

function getForexAccount($user_id)
{
    $user = ForexAccounts::find($user_id);
    return $user;
}

function getSignal($signal_id)
{
    $signal = ForexSignals::find($signal_id);
    return $signal;
}

function getForexInvestment($plan_id)
{
    $plan = ForexInvestments::find($plan_id);
    return $plan;
}
function array_to_obj($array, &$obj)
{
    foreach ($array as $key => $value) {
        if (is_array($value)) {
            $obj->$key = new stdClass();
            array_to_obj($value, $obj->$key);
        } else {
            $obj->$key = $value;
        }
    }
    return $obj;
}

function arrayToObject($array)
{
    $object = new stdClass();
    return array_to_obj($array, $object);
}

function getPlatform($option)
{
    return arrayToObject(json_decode(Platform::where('option', $option)->first()
        ->settings));
}

function getPlatforms()
{
    $plats = Platform::get();
    foreach ($plats as $plat) {
        $platforms[$plat->option] = json_decode($plat->settings);
    }
    return $platforms;
}

function checkKYC($id)
{
    if (KYC::where('userId', $id)->exists()) {
        if (KYC::where('userId', $id)->first()->status == 'approved') {
            return 1;
        } else {
            return 0;
        }
    }
}

function getExt($id)
{
    return Extension::where('id', $id)->first();
}

function getExts()
{
    foreach (Extension::get() as $ext) {
        $exts[$ext
            ->slug] = $ext->status;
    }
    return $exts;
}
function getExtsID()
{
    foreach (Extension::get() as $ext) {
        $exts[$ext
            ->id] = $ext->status;
    }
    return $exts;
}
function getFeesWallet($id)
{
    return Wallet::where('id', $id)->first();
}

function getStakingLog($coin_id, $user_id)
{
    return StakingLog::where('coin_id', $coin_id)->where('user_id', $user_id)->where('status', '!=', 0)
        ->first();
}

function changeEnv($key, $value)
{
    $path = base_path('.env');
    if (file_exists($path)) {
        //Try to read the current content of .env
        $current = file_get_contents($path);

        //Store the key
        $original = [];
        if (preg_match('/^' . $key . '=(.+)$/m', $current, $original)) {

            //Overwrite with new key
            $current = preg_replace('/^' . $key . '=.+$/m', $key . "=$value", $current);
        } else {
            //Append the key to the end of file
            $current .= PHP_EOL . $key . "=$value";
        }
        file_put_contents($path, $current);
    }
}

function getRoute($id, $type)
{
    if (Extension::where('id', $id)->exists()) {
        $ext = Extension::where('id', $id)->first();
        if ($ext->installed == 1) {
            require_once base_path() . '/routes/' . $ext->slug . '/' . $type . '.php';
        }
    }
}

function getCors()
{
    return File::get(resource_path('assets/cors.txt'));
}

function getNativeNetwork()
{
    return EcoSettings::first()->network;
}

function curl_post($url, $post_fields = null, $headers = null)
{

    $ch = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);

    if (!empty($post_fields)) {

        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
    }

    if (!empty($headers)) curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);

    if (curl_errno($ch)) {

        echo 'Error:' . curl_error($ch);
    }

    curl_close($ch);
    return json_decode($data);
}

function curl_get($url, $headers = null)
{

    $ch = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);

    if (!empty($headers)) curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }

    curl_close($ch);
    return json_decode($data);
}

function cut_char($text, $max)
{
    if (strlen($text) <= $max) {
        return $text;
    }
    return substr($text, 0, $max - 3) . '...';
}


function searchForId($id, $array, $value)
{
    foreach ($array as $key => $val) {
        if (isset($val[$value])) {
            if ($val[$value] === $id) {
                return $key;
            }
        }
    }
    return null;
}


function getBalance($id)
{
    $wallet = EcoWallet::where('id', $id)->first();
    if (EcoTokens::where('symbol', $wallet->currency)->where('chain', $wallet->chain)->exists()) {
        $token = EcoTokens::where('symbol', $wallet->currency)->where('chain', $wallet->chain)->first();
        $token->type = 0;
    } else if (EcoMainnetTokens::where('symbol', $wallet->currency)->where('chain', $wallet->chain)->exists()) {
        $token = EcoMainnetTokens::where('symbol', $wallet->currency)->where('chain', $wallet->chain)->first();
    } else {
        $token = null;
    }
    $eco = new Tatum();
    switch ($wallet->chain) {
        case 'ETH':
            if ($wallet->symbol == 'ETH') {
                return $eco->ethGetAccountBalance($wallet);
            } else {
                return $eco->ethGetTokenBalance('ETH', $token->address, $wallet->address, $token);
            }
            break;
        case 'BSC':
            if ($wallet->symbol == 'BSC') {
                return $eco->bscGetAccountBalance($wallet);
            } else {
                return $eco->ethGetTokenBalance('BSC', $token->address, $wallet->address, $token);
            }
            break;
        case 'TRON':
            return $eco->tronGetAccountBalance($token, $wallet);
            break;
        case 'MATIC':
            if ($wallet->symbol == 'MATIC') {
                return $eco->polygonGetAccountBalance($wallet->address);
            } else {
                return $eco->ethGetTokenBalance('MATIC', $token->address, $wallet->address, $token);
            }
            break;
        case 'KLAY':
            return $eco->klaytnGetAccountBalance($wallet->address);
            break;
        case 'CELO':
            if ($wallet->symbol == 'CELO') {
                return $eco->celoGetAccountBalance($wallet);
            } else {
                return $eco->ethGetTokenBalance('CELO', $token->address, $wallet->address, $token);
            }
            break;
        default:
            return 0;
            break;
    }
}


function avgTradeSpeed($ad)
{
    if ($ad->completed_trade) {
        return round($ad->total_time / $ad->completed_trade) . ' ' . 'Minutes';
    }
    return 'No trades yet';
}
function objectToArray(&$object)
{
    return @json_decode(json_encode($object), true);
}
include __DIR__ . "/auto_p.php";