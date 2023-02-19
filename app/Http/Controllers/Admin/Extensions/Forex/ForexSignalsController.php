<?php

namespace App\Http\Controllers\Admin\Extensions\Forex;

use App\Http\Controllers\Controller;
use App\Models\Forex\ForexSignals;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class ForexSignalsController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('forex_signals_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Forex Signals';
        return view('extensions.admin.forex.signals.index', compact('page_title'));
    }

    public function edit($id)
    {
        abort_if(Gate::denies('forex_signals_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $signal = ForexSignals::findOrFail($id);
        $page_title = 'Forex Signal Editor';
        return view('extensions.admin.forex.signals.edit', compact('page_title', 'signal'));
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|max:80',
            'image' => 'mimes:jpeg,jpg,png,svg'
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
            $signal = new ForexSignals();
            $signal->title = $request->title;
            $path = imagePath()['signal']['path'];

            if (isset($request->image)) {
                try {
                    $filename = uploadImg($request->image, $path);
                } catch (\Exception $exp) {
                    $notify[] = ['error', 'Image could not be uploaded.'];
                    return back()->withNotify($notify);
                }
                $signal->image = $filename;
            }
            $signal->status = $request->status ?? 0;
            $signal->save();
            (new ForexSignals)->clearCache();

            $notify[] = ['success', 'Forex Signal has been Updated'];
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
    public function update(Request $request)
    {
        $request->validate([
            'title' => 'required|max:80',
            'image' => 'mimes:jpeg,jpg,png,svg'
        ]);

        $signal = ForexSignals::findOrFail($request->id);
        $signal->title = $request->title;
        $path = imagePath()['signal']['path'];

        if (isset($request->image)) {
            if ($signal->image != null) {
                unlink(public_path('/' . $path . '/' . $signal->image));
            }
            try {
                $filename = uploadImg($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $signal->image = $filename;
        }
        $signal->status = $request->status;
        $signal->save();
        (new ForexSignals)->clearCache();

        $notify[] = ['success', 'Forex Signal has been Updated'];
        return redirect()->route('admin.forex.signals.index')->withNotify($notify);
    }
}
