<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ForexSignals;
use Illuminate\Http\Request;

class ForexSignalsController extends Controller
{
    public function index()
    {
        $page_title = 'Forex Signals';
        $signals = ForexSignals::latest()->paginate(getPaginate());
        $empty_message = 'No Signals Found';
        return view('admin.forex.signals.index', compact('page_title','signals','empty_message'));
    }

    public function new()
    {
        $page_title = 'New Signal';
        return view('admin.forex.signals.new', compact('page_title'));
    }

    public function edit($id)
    {
        $signal = ForexSignals::findOrFail($id);
        $page_title = 'Forex Signal Editor';
        return view('admin.forex.signals.edit', compact('page_title','signal'));
    }

    public function store(Request $request)
    {
        $request->validate([
    		'title' => 'required|max:80',
    		'image' => 'mimes:jpeg,jpg,png,svg'
    	]);

        $signal = new ForexSignals();
        $signal->title = $request->title;
        $path = imagePath()['signal']['path'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImage($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $signal->image = $filename;
        }
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $signal->status = $request->status;
        $signal->save();

        $notify[] = ['success', 'Forex Signal has been Updated'];
        return redirect()->route('admin.forex.signals.index')->withNotify($notify);
    }
    public function update(Request $request)
    {
        $request->validate([
    		'title' => 'required|max:80',
    		'image' => 'mimes:jpeg,jpg,png,svg'
    	]);

        $signal = ForexSignals::findOrFail($request->id);
        $signal->title = $request->title;
        $path = imagePath()['signal']['path'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImage($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $signal->image = $filename;
        }
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $signal->status = $request->status;
        $signal->save();

        $notify[] = ['success', 'Forex Signal has been Updated'];
        return redirect()->route('admin.forex.signals.index')->withNotify($notify);
    }
    public function remove(Request $request)
    {
        $request->validate(['id' => 'required|numeric']);
        $signal = ForexSignals::findOrFail($request->id);
        $signal->delete();

        $notify[] = ['success', 'Forex Signal has been removed'];
        return back()->withNotify($notify);
    }
}
