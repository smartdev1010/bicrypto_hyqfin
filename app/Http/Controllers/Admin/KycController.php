<?php

namespace App\Http\Controllers\Admin;

use App\Models\KYC;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\KycTemplates;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class KycController extends Controller
{
    public function index(Request $request, $status = '')
    {
        abort_if(Gate::denies('kyc_manager_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'KYC Manager';
        return view('admin.kyc.list', compact('page_title'));
    }

    public function get_documents($id, $doc)
    {
        $filename = KYC::where('userId', $id)->document;
        if ($doc == 2) {
            $filename = KYC::where('userId', $id)->document2;
        }
        if ($doc == 3) {
            $filename = KYC::where('userId', $id)->document3;
        }
        if ($filename !== null) {
            if (str_contains($filename, ".env") || str_contains($filename, "../") || str_contains($filename, "/..") || !str_contains($filename, "kyc-files/")) {
                abort(404);
            }

            $path = ('assets/images/kyc/' . $filename);
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

    public function show($id = '', $type = '')
    {
        abort_if(Gate::denies('kyc_details_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($type == 'kyc_details') {
            if ($id == '') {
                return __('messages.wrong');
            } else {
                $kyc = KYC::where('id', $id)->first();
                return view('admin.kyc.details', compact('kyc'))->render();
            }
        }
    }

    public function templates()
    {
        abort_if(Gate::denies('kyc_manager_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'KYC Templates';
        return view('admin.kyc.templates', compact('page_title'));
    }

    public function template_new()
    {
        $page_title = 'New KYC Template';
        return view('admin.kyc.templates_new', compact('page_title'));
    }

    public function template_edit($id)
    {
        $template = KycTemplates::where('id', $id)->first();
        $options = json_decode($template->options, true);
        $page_title = 'KYC Template ' . $template->title;
        return view('admin.kyc.templates_edit', compact('page_title', 'template', 'options'));
    }
    public function template_store(Request $request)
    {
        $newFields = [];
        $template = new KycTemplates();
        $template->title = $request->title;
        foreach ($request->except('_token', 'title') as $key => $value) {
            if (isset($request[$key])) {
                if (is_array($request[$key])) {
                    if ($key == 'kyc_document') {
                        if (is_array($request[$key])) {
                            $new = [];
                            foreach ($request[$key] as $subkey => $val) {
                                $new[$subkey] = 1;
                            }
                            $newFields[$key] = $new;
                        }
                    } else if ($key == 'extra_field') {
                        for ($a = 0; $a < count($request[$key]['field_name']); $a++) {
                            $arr = array();
                            $arr['field_name'] = strtolower(str_replace(' ', '_', trim($request[$key]['field_name'][$a])));
                            $arr['field_level'] = trim($request[$key]['field_name'][$a]);
                            $arr['type'] = $request[$key]['type'][$a];
                            $arr['validation'] = $request[$key]['validation'][$a];
                            $newFields[$key][$arr['field_name']] = $arr;
                        }
                    } else {
                        $show = $req = 0;
                        foreach ($request[$key] as $val) {
                            if ($val == 'show') {
                                $show = 1;
                            }
                            if ($val == 'req') {
                                $req = 1;
                            }
                        }
                        $newFields[$key] = array('show' => $show, 'req' => $req);
                    }
                }
            }
        }
        $template->options = json_encode($newFields);
        $template->save();

        $notify[] = ['success', 'KYC template created successfully'];
        return redirect()->route('admin.kyc.templates')->withNotify($notify);
    }
    public function template_update(Request $request)
    {
        $newFields = [];
        $template = KycTemplates::where('id', $request->template_id)->first();
        foreach ($request->except('_token', 'template_id') as $key => $value) {
            if (isset($request[$key])) {
                if (is_array($request[$key])) {
                    if ($key == 'kyc_document') {
                        if (is_array($request[$key])) {
                            $new = [];
                            foreach ($request[$key] as $subkey => $val) {
                                $new[$subkey] = 1;
                            }
                            $newFields[$key] = $new;
                        }
                    } else if ($key == 'extra_field') {
                        for ($a = 0; $a < count($request[$key]['field_name']); $a++) {
                            $arr = array();
                            $arr['field_name'] = strtolower(str_replace(' ', '_', trim($request[$key]['field_name'][$a])));
                            $arr['field_level'] = trim($request[$key]['field_name'][$a]);
                            $arr['type'] = $request[$key]['type'][$a];
                            $arr['validation'] = $request[$key]['validation'][$a];
                            $newFields[$key][$arr['field_name']] = $arr;
                        }
                    } else {
                        $show = $req = 0;
                        foreach ($request[$key] as $val) {
                            if ($val == 'show') {
                                $show = 1;
                            }
                            if ($val == 'req') {
                                $req = 1;
                            }
                        }
                        $newFields[$key] = array('show' => $show, 'req' => $req);
                    }
                }
            }
        }
        $template->options = json_encode($newFields);
        $template->save();

        $notify[] = ['success', 'KYC template updated successfully'];
        return back()->withNotify($notify);
    }

    public function update(Request $request)
    {
        try {
            $id = $request->input('kyc_id');
            $kyc = KYC::FindOrFail($id);
            $old_note = $kyc->notes != null ? $kyc->notes : '';
            if ($request->input('status') == 'rejected') {
                $save_note = 'In our verification process, we found the information to be incorrect. It would be great if you resubmit the form. If you face a problem with the submission please contact us with the support team';
                $type = 'KYC_REJECTED';
            } else if ($request->input('status') == 'approved') {
                $save_note = 'We successfully approved your application, you can enjoy trading in our platform with no limits';
                $type = 'KYC_APPROVE';
            } else if ($request->input('status') == 'missing') {
                $save_note = $request->input('notes') != '' ? str_replace("\n", "<br>", $request->input('notes')) : $old_note;
                $type = 'KYC_MISSING';
            } else {
                $type = 'KYC_SUBMITTED';
            }

            if ($kyc) {
                $kyc->status = $request->input('status');
                $kyc->notes = $save_note;
                $kyc->reviewedBy = Auth::id();
                $kyc->reviewedAt = date('Y-m-d H:i:s');
                $kyc->save();
                $kyc->clearCache();

                if ($request->input('status') == 'approved') {
                    $kyc->user->save();
                }

                if ($kyc->user) {
                    try {
                        notify($kyc->user, $type, [
                            "message" => $kyc->notes
                        ]);
                        $notify[] = ['success', 'Client Notified By Mail Successfully'];
                    } catch (\Exception $e) {
                        $notify[] = ['warning', 'Client Notification By Mail Failed'];
                    }
                }
                $notify[] = [($request->input('status') == 'approved') ? 'success' : 'warning', 'Client KYC ' . $request->input('status')];
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

    public function delete(Request $request)
    {
        if (Gate::denies('kyc_manager_delete')) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Action not Authorized'
                ]
            );
        }
        try {
            $id = $request->input('id');
            $delete = KYC::find($id);
            $doc1 = 'assets/images/kyc/' . $delete->document;
            $doc2 = 'assets/images/kyc/' . $delete->document2;
            $doc3 = 'assets/images/kyc/' . $delete->document3;
            if (file_exists($doc1)) {
                File::delete($doc1);
            }
            if (file_exists($doc2)) {
                File::delete($doc2);
            }
            if (file_exists($doc3)) {
                File::delete($doc3);
            }

            $delete->delete();
            $notify[] = ['success', 'KYC Deleted Successfully'];
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
    public function activate(Request $request)
    {
        try {
            $template = KycTemplates::findOrFail($request->id);
            if ($template->status != 1) {
                if (KycTemplates::where('status', 1)->exists()) {
                    $active = KycTemplates::where('status', 1)->first();
                    $active->status = 0;
                    $active->save();
                }
            }
            $template->status = 1;
            $template->save();
            $notify[] = ['success', $template->name . ' has been activated'];
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

    public function deactivate(Request $request)
    {
        try {
            $template = KycTemplates::findOrFail($request->id);
            $template->status = 0;
            $template->save();
            $notify[] = ['success', $template->name . ' has been disabled'];
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
}
