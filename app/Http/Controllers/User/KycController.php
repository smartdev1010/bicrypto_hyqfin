<?php

namespace App\Http\Controllers\User;

use Illuminate\Support\Facades\Validator;
use App\Models\KYC;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AdminNotification;
use App\Models\KycTemplates;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

class KycController extends Controller
{
    private $supported_ext = ['jpeg', 'jpg', 'png', 'pdf'];

    public function index()
    {
        $user = Auth::user();
        $user_kyc = KYC::where('userId', $user->id)->first();

        return view('user.kyc.kyc', compact('user_kyc'));
    }

    public function view()
    {
        $user = Auth::user();
        $kyc = KYC::where('userId', $user->id)->first();
        return view('user.kyc.kyc_details', compact('kyc'));
    }

    public function get_documents($id, $doc)
    {
        if (Auth::user()->id != KYC::FindOrFail($id)->userId) {
            return abort(401);
        }

        $filename = KYC::FindOrFail($id)->document;

        if ($doc == 2) {
            $filename = KYC::FindOrFail($id)->document2;
        }
        if ($doc == 3) {
            $filename = KYC::FindOrFail($id)->document3;
        }
        if ($filename !== null) {
            if (str_contains($filename, ".env") || str_contains($filename, "../") || str_contains($filename, "/..") || !str_contains($filename, "kyc-files/")) {
                abort(404);
            }

            if (!valid_kyc_file_ext($filename, $this->supported_ext)) {
                abort(404);
            }

            $path = storage_path('app/' . $filename);
            if (!file_exists($path)) {
                abort(404);
            }
            $file = File::get($path);
            $type = File::mimeType($path);
            $response = response($file, 200)->header("Content-Type", $type);

            return $response;
        } else {
            return abort(404);
        }
    }

    public function application()
    {
        if (isset(Auth::user()->kyc_info->status)) {
            if (Auth::user()->kyc_info->status == 'pending') {
                return redirect()->route('user.kyc')->withNotify(['info' => __('messages.kyc.wait')]);
            }
        }
        $countries = getCountries();
        $user_kyc = Auth::user()->kyc_info;
        if ($user_kyc == null) {
            $user_kyc = new KYC();
        }
        $title = KYC::documents();
        if (KycTemplates::where('status', 1)->exists()) {
            $template = KycTemplates::where('status', 1)->first();
            $options = json_decode($template->options, true);
            return view('user.kyc.kyc_application', compact('user_kyc', 'countries', 'title', 'options'));
        } else {
            $notify[] = ['warning', 'No active kyc application found'];
            return redirect()->route('app.home')->withNotify($notify);
        }
    }

    public function submit(Request $request)
    {
        $type = $request->documentType;

        $rules = [];
        $inputField = [];
        $verifyImages = [];
        $template = KycTemplates::where('status', 1)->first();
        $options = json_decode($template->options, true);

        if (isset($options['extra_field']) && count($options['extra_field']) > 0) {
            foreach ($options['extra_field'] as $key => $cus) {
                $rules[$key] = [$cus['validation']];
                if ($cus['type'] == 'file') {
                    array_push($rules[$key], 'image');
                    array_push($rules[$key], 'mimes:jpeg,jpg,png');
                    array_push($rules[$key], 'max:2048');

                    array_push($verifyImages, $key);
                }
                if ($cus['type'] == 'text') {
                    array_push($rules[$key], 'max:191');
                }
                if ($cus['type'] == 'textarea') {
                    array_push($rules[$key], 'max:300');
                }
                $inputField[] = $key;
            }
        }

        Validator::make($request->all(), KYC::rules(), [
            'document_one.required' => __('messages.kyc.forms.document', ['NAME' => KYC::documents($type ?? 'Document')]),
            'document_two.required' => __('messages.kyc.forms.document', ['NAME' => __('National ID Card Back-Side')]),
            'document_image_hand.required' => __('messages.kyc.forms.document', ['NAME' => __('Document on Hand')]),
        ], $rules);

        $user = Auth::user();
        $profile = User::where('id', $user->id)->first();
        $firstname = strip_tags($request->input('first_name'));
        $lastname = strip_tags($request->input('last_name'));
        if (KYC::where('userId', $user->id)->exists()) {
            $kyc_submit = KYC::where('userId', $user->id)->first();
        } else {
            $kyc_submit = new KYC();
            $kyc_submit->userId = $user->id;
        }
        $kyc_submit->firstName = $firstname;
        $kyc_submit->lastName = $lastname;
        $kyc_submit->email = $user->email;
        $kyc_submit->phone = strip_tags($request->input('phone'));
        $kyc_submit->dob = $request->input('dob');
        $kyc_submit->gender = strip_tags($request->input('gender'));
        $kyc_submit->telegram = strip_tags($request->input('telegram'));

        $kyc_submit->country = strip_tags($request->input('country'));
        $kyc_submit->state = strip_tags($request->input('state'));
        $kyc_submit->city = strip_tags($request->input('city'));
        $kyc_submit->zip = strip_tags($request->input('zip'));
        $kyc_submit->address1 = strip_tags($request->input('address_1'));
        $kyc_submit->address2 = strip_tags($request->input('address_2'));

        $path = imagePath()['kyc']['path'];

        $collection = collect($request->extra_field);
        $reqField = [];
        if (isset($options['extra_field']) && count($options['extra_field']) > 0) {
            foreach ($collection as $k => $v) {
                foreach ($options['extra_field'] as $inKey => $inVal) {
                    if ($k != $inKey) {
                        continue;
                    } else {
                        if ($inVal['type'] == 'file') {
                            if (isset($request->extra_field[$inKey])) {
                                try {
                                    $reqField[$inKey] = [
                                        'field_name' => uploadImg($request->extra_field[$inKey], $path),
                                        'type' => $inVal['type'],
                                    ];
                                } catch (\Exception $exp) {
                                    $notify[] = ['error', 'Could not upload your ' . $inKey];
                                    return back()->withNotify($notify)->withInput();
                                }
                            }
                        } else {
                            $reqField[$inKey] = $v;
                            $reqField[$inKey] = [
                                'field_name' => $v,
                                'type' => $inVal['type'],
                            ];
                        }
                    }
                }
            }
            $kyc_submit->extra_field = $reqField;
        }
        if ($request->hasFile('document_one')) {
            try {
                $filename = uploadImg($request->document_one, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Document 1 could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $kyc_submit->document = $filename;
        }
        if ($request->hasFile('document_two')) {
            try {
                $document_two = uploadImg($request->document_two, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Document 2 could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $kyc_submit->document2 = $document_two;
        }
        if ($request->hasFile('document_image_hand')) {
            try {
                $document_image_hand = uploadImg($request->document_image_hand, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Selfie could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $kyc_submit->document3 = $document_image_hand;
        }
        $kyc_submit->documentType = $request->input('documentType');
        $kyc_submit->status = 'pending';

        if ($kyc_submit->save()) {
            try {
                $notify[] = ['success', 'Documents Submitted Successfully'];
                if ($notify) {
                    try {
                        try {
                            notify($user, 'KYC_SUBMITTED');
                        } catch (\Throwable $th) {
                            //throw $th;
                        }
                        $adminNotification = new AdminNotification();
                        $adminNotification->user_id = $user->id;
                        $adminNotification->title = 'New KYC from ' . $user->username;
                        $adminNotification->click_url = route('admin.kyc.view', [$kyc_submit->id, 'kyc_details']);
                        $adminNotification->save();
                        $adminNotification->clearCache();

                        $profile->name = $kyc_submit->firstname . ' ' . $kyc_submit->lastname;
                        $profile->firstname = $kyc_submit->firstname;
                        $profile->lastname = $kyc_submit->lastname;
                        $profile->country = $kyc_submit->country;
                        $profile->state = $kyc_submit->state;
                        $profile->city = $kyc_submit->city;
                        $profile->zip = $kyc_submit->zip;
                        $profile->address = $kyc_submit->address1;
                        $profile->save();
                    } catch (\Exception $e) {
                        $adminNotification = new AdminNotification();
                        $adminNotification->user_id = $user->id;
                        $adminNotification->title = 'Check Your Mail Settings';
                        $adminNotification->click_url = route('admin.settings.email');
                        $adminNotification->save();
                        $adminNotification->clearCache();
                    }
                }
            } catch (\Exception $e) {
            }
        } else {
            $notify[] = ['warning', 'Documents Submittion Failed'];
        }

        return redirect()->route('app.home')->withNotify($notify);
    }
}
