<?php

namespace App\Notify;

use App\Models\NotificationDeviceToken;
use App\Models\UserNotification;
use App\Notify\NotifyProcess;
use OneSignal;

class PushNotification extends NotifyProcess
{

    /**
     * Assign value to properties
     *
     * @return void
     */
    public function __construct()
    {
        $this->statusField = 'push_notification_status';
        $this->body = 'push_notification_body';
        $this->globalTemplate = 'push_notification_body';
        $this->notifyConfig = 'push_notification_config';
    }

    /**
     * Send notification
     *
     * @return void|bool
     */


    public function send()
    {
        if (getNotify()->push_status == 1) {

            $message = $this->getMessage();
            $subject = $this->subject;
            $remark = $this->template->act;
            $clickValue = $this->clickValue;

            if ($message) {
                try {
                    if ($this->user) {
                        $params = [];
                        $params['small_icon'] = getImage('assets/images/logoIcon/logo.png'); // icon res name specified in your app

                        OneSignal::setParam('priority', 10)->addParams($params)->sendNotificationToExternalUser(
                            $message,
                            [strval($this->user->id)],
                            $url = $clickValue ?? null,
                            $data = null,
                            $buttons = null,
                            $schedule = null,
                            $subject
                        );
                        $userNotification = new UserNotification();
                        $userNotification->title = $subject;
                        $userNotification->user_id = $this->user->id;
                        $userNotification->remark = $remark;
                        $userNotification->click_value = $clickValue;
                        $userNotification->save();

                        $this->createLog('push_notification');
                    }
                } catch (\Exception $e) {
                    $this->createErrorLog('Push Notification Error: ' . $e->getMessage());
                    session()->flash('push_notification_error', $e->getMessage());
                }
            }
        }
    }

    /**
     * Configure some properties
     *
     * @return void
     */
    protected function prevConfiguration()
    {
    }
}