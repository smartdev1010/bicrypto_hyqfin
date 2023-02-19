<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Locale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class LocaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort_if(Gate::denies('locale_manager_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Locale Manager';
        return view('admin.setting.locale', compact('page_title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $locale = Locale::where('id', $request->id)->first();

            $jsonString = file_get_contents(resource_path() . '/lang/' . $locale->code . '.json');
            $datas = json_decode($jsonString, true);
            // Update Key
            $datas[$request->string] = $request->translation;
            // Write File
            $newJsonString = json_encode($datas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            file_put_contents(resource_path() . '/lang/' . $locale->code . '.json', stripslashes($newJsonString));

            $notify[] = ['success', 'String added successfully'];
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        abort_if(Gate::denies('locale_manager_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $locale = Locale::where('id', $id)->first();
        $page_title = $locale->title . ' Editor';
        $strings = arrayToObject(json_decode(File::get(resource_path() . '/lang/' . $locale->code . '.json'), true));
        return view('admin.setting.locale_edit', compact('locale', 'page_title', 'strings'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $locale = Locale::where('id', $id)->first();

        $jsonString = file_get_contents(resource_path() . '/lang/' . $locale->code . '.json');
        $datas = json_decode($jsonString, true);
        // Update Key
        $datas[$request->key] = $request->value;
        // Write File
        $newJsonString = json_encode($datas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        file_put_contents(resource_path() . '/lang/' . $locale->code . '.json', stripslashes($newJsonString));

        return response()->json([
            'type' => 'success',
            'message' => 'Translation updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
