<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Popups;
use App\Models\PopupsStatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class PopupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort_if(Gate::denies('popups_manager_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Popups Manager';
        return view('admin.popups.index', compact('page_title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort_if(Gate::denies('popups_manager_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Popups Manager';
        $empty_message = 'No Popups Found';
        return view('admin.popups.new', compact('page_title', 'empty_message'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|max:80',
            'link' => 'max:500',
            'msg' => 'required',
            'duration' => 'required|numeric',
            'end_date' => 'required',
            'image' => 'mimes:jpeg,jpg,png,svg'
        ]);

        $popup = new Popups();
        $popup->title = $request->title;
        if (isset($request->link)) {
            $popup->link = $request->link;
        }
        $popup->msg = $request->msg;
        $popup->duration = $request->duration;
        $popup->end_date = $request->end_date;

        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $popup->status = $request->status;

        $path = imagePath()['popup']['path'];
        $size = imagePath()['popup']['size'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImg($request->image, $path, $size);
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $popup->image = $filename;
        }

        $popup->save();
        $popup->clearCache();
        $notify[] = ['success', 'Popup has been created successfully.'];
        return redirect()->route('admin.popups.index')->withNotify($notify);
    }

    public function edit($id)
    {
        abort_if(Gate::denies('popups_manager_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $popup = Popups::where('id', $id)->first();
        $page_title = 'Editing ' . $popup->title . ' Popup';
        return view('admin.popups.edit', compact('popup', 'page_title'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|max:80',
            'link' => 'max:500',
            'msg' => 'required',
            'duration' => 'required|numeric',
            'end_date' => 'required',
            'image' => 'mimes:jpeg,jpg,png,svg'
        ]);

        $popup = Popups::where('id', $id)->first();
        $popup->title = $request->title;
        if (isset($request->link)) {
            $popup->link = $request->link;
        }
        $popup->msg = $request->msg;
        $popup->duration = $request->duration;
        $popup->end_date = $request->end_date;

        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $popup->status = $request->status;

        $path = imagePath()['popup']['path'];
        $size = imagePath()['popup']['size'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImg($request->image, $path, $size);
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $popup->image = $filename;
        }

        $popup->save();
        $popup->clearCache();
        $notify[] = ['success', 'Popup has been updated successfully.'];
        return back()->withNotify($notify);
    }

    public function disable_popup(Request $request)
    {
        $popup = new PopupsStatus();
        $popup->popup_id = $request->popup_id;
        $popup->user_id = auth()->user()->id;
        $popup->status =  0;
        $popup->save();
        $popup->clearCache();
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Popup Disabled Successfully'
            ]
        );
    }
}
