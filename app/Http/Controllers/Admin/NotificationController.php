<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NotificationTemplate;
use App\Notify\Sms;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Validator;

class NotificationController extends Controller
{
    public function global()
    {
        abort_if(Gate::denies('email_manager_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $templates = NotificationTemplate::orderBy('id', 'ASC')->get();
        $page_title = 'Global Template for Notification';
        return view('admin.notification.global_template', compact('page_title', 'templates'));
    }

    public function globalUpdate(Request $request)
    {
        $request->validate([
            'email_from' => 'required|email|string|max:40',
            'sms_from' => 'required|string|max:40',
            'email_template' => 'required',
            'sms_body' => 'required',
        ]);

        $notification = getNotify();
        $notification->email_from = $request->email_from;
        $notification->email_template = $request->email_template;
        $notification->sms_from = $request->sms_from;
        $notification->sms_body = $request->sms_body;
        $notification->save();

        $notify[] = ['success', 'Global notification settings updated successfully'];
        return back()->withNotify($notify);
    }

    public function templates()
    {
        $page_title = 'Notification Templates';
        $templates = NotificationTemplate::orderBy('name')->get();
        return view('admin.notification.templates', compact('page_title', 'templates'));
    }

    public function templateEdit($id)
    {
        $template = NotificationTemplate::findOrFail($id);
        $page_title = $template->name;
        return view('admin.notification.edit', compact('page_title', 'template'));
    }

    public function templateUpdate(Request $request, $id)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'email_body' => 'required',
            'sms_body' => 'required',
        ]);
        $template = NotificationTemplate::findOrFail($id);
        $template->subj = $request->subject;
        $template->email_body = $request->email_body;
        $template->email_status = $request->email_status ? 1 : 0;
        $template->sms_body = $request->sms_body;
        $template->sms_status = $request->sms_status ? 1 : 0;
        $template->push_notification_body = $request->push_notification_body;
        $template->push_notification_status = $request->push_notification_status ? 1 : 0;
        $template->save();
        $template->clearCache();

        $notify[] = ['success', 'Notification template updated successfully'];
        return back()->withNotify($notify);
    }

    public function emailSetting()
    {
        $page_title = 'Email Notification Settings';
        return view('admin.notification.email_setting', compact('page_title'));
    }

    public function emailSettingUpdate(Request $request)
    {
        $request->validate([
            'email_method' => 'required|in:php,smtp,sendgrid,mailjet',
            'host' => 'required_if:email_method,smtp',
            'port' => 'required_if:email_method,smtp',
            'username' => 'required_if:email_method,smtp',
            'password' => 'required_if:email_method,smtp',
            'enc' => 'required_if:email_method,smtp',
            'appkey' => 'required_if:email_method,sendgrid',
            'public_key' => 'required_if:email_method,mailjet',
            'secret_key' => 'required_if:email_method,mailjet',
        ], [
            'host.required_if' => ':attribute is required for SMTP configuration',
            'port.required_if' => ':attribute is required for SMTP configuration',
            'username.required_if' => ':attribute is required for SMTP configuration',
            'password.required_if' => ':attribute is required for SMTP configuration',
            'enc.required_if' => ':attribute is required for SMTP configuration',
            'appkey.required_if' => ':attribute is required for SendGrid configuration',
            'public_key.required_if' => ':attribute is required for Mailjet configuration',
            'secret_key.required_if' => ':attribute is required for Mailjet configuration',
        ]);
        if ($request->email_method == 'php') {
            $data['name'] = 'php';
        } else if ($request->email_method == 'smtp') {
            $request->merge(['name' => 'smtp']);
            $data = $request->only('name', 'host', 'port', 'enc', 'username', 'password', 'driver');
        } else if ($request->email_method == 'sendgrid') {
            $request->merge(['name' => 'sendgrid']);
            $data = $request->only('name', 'appkey');
        } else if ($request->email_method == 'mailjet') {
            $request->merge(['name' => 'mailjet']);
            $data = $request->only('name', 'public_key', 'secret_key');
        }
        $notification = getNotify();
        $notification->mail_config = $data;
        $notification->save();
        $notify[] = ['success', 'Email settings updated successfully'];
        return back()->withNotify($notify);
    }

    public function emailTest(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|email'
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        try {
            $notification = getNotify();
            $config = $notification->mail_config;
            $receiverName = explode('@', $request->email)[0];
            $subject = strtoupper($config->name) . ' Configuration Success';
            $message = 'Your email notification setting is configured successfully for ' . $notification->site_name;

            //if ($notification->email_status) {
            $user = [
                'username' => $request->email,
                'email' => $request->email,
                'fullname' => $receiverName,
            ];
            notify($user, 'DEFAULT', [
                'subject' => $subject,
                'message' => $message,
            ], ['email']);

            /*} else {
            $notify[] = ['info', 'Please enable from general settings'];
            $notify[] = ['error', 'Your email notification is disabled'];
            return back()->withNotify($notify);
        }*/

            if (session('mail_error') != null) {
                $notify[] = ['error', session('mail_error')];
            } else {
                $notify[] = ['success', 'Email sent to ' . $request->email . ' successfully'];
            }
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public  function smsSetting()
    {
        $page_title = 'SMS Notification Settings';
        return view('admin.notification.sms_setting', compact('page_title'));
    }


    public function smsSettingUpdate(Request $request)
    {
        $request->validate([
            'sms_method' => 'required|in:clickatell,infobip,messageBird,nexmo,smsBroadcast,twilio,textMagic,custom',
            'clickatell_api_key' => 'required_if:sms_method,clickatell',
            'message_bird_api_key' => 'required_if:sms_method,messageBird',
            'nexmo_api_key' => 'required_if:sms_method,nexmo',
            'nexmo_api_secret' => 'required_if:sms_method,nexmo',
            'infobip_username' => 'required_if:sms_method,infobip',
            'infobip_password' => 'required_if:sms_method,infobip',
            'sms_broadcast_username' => 'required_if:sms_method,smsBroadcast',
            'sms_broadcast_password' => 'required_if:sms_method,smsBroadcast',
            'text_magic_username' => 'required_if:sms_method,textMagic',
            'apiv2_key' => 'required_if:sms_method,textMagic',
            'account_sid' => 'required_if:sms_method,twilio',
            'auth_token' => 'required_if:sms_method,twilio',
            'from' => 'required_if:sms_method,twilio',
            'custom_api_method' => 'required_if:sms_method,custom|in:get,post',
            'custom_api_url' => 'required_if:sms_method,custom',
        ]);

        $data = [
            'name' => $request->sms_method,
            'clickatell' => [
                'api_key' => $request->clickatell_api_key,
            ],
            'infobip' => [
                'username' => $request->infobip_username,
                'password' => $request->infobip_password,
            ],
            'message_bird' => [
                'api_key' => $request->message_bird_api_key,
            ],
            'nexmo' => [
                'api_key' => $request->nexmo_api_key,
                'api_secret' => $request->nexmo_api_secret,
            ],
            'sms_broadcast' => [
                'username' => $request->sms_broadcast_username,
                'password' => $request->sms_broadcast_password,
            ],
            'twilio' => [
                'account_sid' => $request->account_sid,
                'auth_token' => $request->auth_token,
                'from' => $request->from,
            ],
            'text_magic' => [
                'username' => $request->text_magic_username,
                'apiv2_key' => $request->apiv2_key,
            ],
            'custom' => [
                'method' => $request->custom_api_method,
                'url' => $request->custom_api_url,
                'headers' => [
                    'name' => $request->custom_header_name ?? [],
                    'value' => $request->custom_header_value ?? [],
                ],
                'body' => [
                    'name' => $request->custom_body_name ?? [],
                    'value' => $request->custom_body_value ?? [],
                ],
            ],
        ];
        $notification = getNotify();
        $notification->sms_config = $data;
        $notification->sms_status = $request->sms_status;
        $notification->save();
        $notify[] = ['success', 'Sms settings updated successfully'];
        return back()->withNotify($notify);
    }

    public function smsTest(Request $request)
    {
        try {
            $notification = getNotify();
            if ($notification->sms_status == 1) {
                $sendSms = new Sms;
                $sendSms->mobile = $request->mobile;
                $sendSms->receiverName = ' ';
                $sendSms->message = 'Your sms notification setting is configured successfully for ' . $notification->site_name;
                $sendSms->subject = ' ';
                $sendSms->send();
            } else {
                $notify[] = ['info', 'Please enable from general settings'];
                $notify[] = ['error', 'Your sms notification is disabled'];
            }

            if (session('sms_error') != null) {
                $notify[] = ['error', session('sms_error')];
            } else {
                $notify[] = ['success', 'SMS sent to ' . $request->mobile . 'successfully'];
            }
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function pushNotificationSetting()
    {
        $page_title = 'Push Notification Settings';
        return view('admin.notification.push_notification_setting', compact('page_title'));
    }

    public function pushNotificationSettingUpdate(Request $request)
    {
        $notification = getNotify();
        $notification->push_status = $request->push_status;
        $notification->push_notification_config = $request->push_notification_config;
        changeEnv('ONESIGNAL_APP_ID', '"' . $request->input('ONESIGNAL_APP_ID', null) . '"');
        changeEnv('ONESIGNAL_REST_API_KEY', '"' . $request->input('ONESIGNAL_REST_API_KEY', null) . '"');
        $notification->save();
        Artisan::call('optimize:clear');

        $notify[] = ['success', 'Push notification settings updated successfully'];
        return back()->withNotify($notify);
    }
}
