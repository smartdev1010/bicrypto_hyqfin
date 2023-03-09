<?php

namespace App\Http\Controllers\Admin\Extensions\Bot;

use App\Http\Controllers\Controller;
use App\Models\Bot\Bot;
use App\Models\Bot\BotContract;
use App\Models\Bot\BotTiming;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class ManageBotController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('bot_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Bot Manager';
        return view('extensions.admin.bot.index', compact('page_title'));
    }

    public function indexTime($id)
    {
        abort_if(Gate::denies('bot_durations_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Bot Manager';
        $bot = Bot::where('id', $id)->first();
        $empty_message = "No Timing Found";
        return view('extensions.admin.bot.time', compact('page_title', 'bot', 'empty_message'));
    }
    public function edit($id)
    {
        abort_if(Gate::denies('bot_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $bot = Bot::findOrFail($id);
        $limits = json_decode($bot->limits);
        $page_title = 'Bot Manager';
        return view('extensions.admin.bot.edit', compact('page_title', 'bot', 'limits'));
    }
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|max:80',
            'perc' => 'required|numeric',
            'desc' => 'required|max:500',
            'uses' => 'required|numeric',
            'profit_missed' => 'required|numeric',
            'result_missed' => 'required',
            'min_profit' => 'required|numeric',
            'max_profit' => 'required|numeric',
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
            $bot = new Bot();
            $bot->title = $request->title;
            $bot->desc = $request->desc;
            $bot->perc = $request->perc;
            $bot->uses = $request->uses;
            $bot->profit_missed = $request->profit_missed;
            $bot->result_missed = $request->result_missed;
            $bot->min_profit = $request->min_profit;
            $bot->max_profit = $request->max_profit;
            $bot->limits = json_encode([
                'min_bot_amount' => $request->min_bot_amount,
                'max_bot_amount' => $request->max_bot_amount,
            ]);

            $bot->status = $request->status ?? 0;
            $bot->is_new = $request->is_new ?? 0;

            $path = imagePath()['bot']['path'];
            $size = imagePath()['bot']['size'];
            if (isset($request->image)) {
                try {
                    $filename = uploadImg($request->image, $path, $size);
                } catch (\Exception $exp) {
                    $notify[] = ['errorc', 'Image could not be uploaded.'];
                    return response()->json(
                        [
                            'success' => true,
                            'type' => $notify[0][0],
                            'message' => $notify[0][1]
                        ]
                    );
                }
                $bot->image = $filename;
            }

            $bot->save();
            $bot->clearCache();

            $notify[] = ['success', 'Bot has been Updated'];
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
            'desc' => 'required|max:500',
            'perc' => 'required|numeric',
            'uses' => 'required|numeric',
            'profit_missed' => 'numeric',
            'min_profit' => 'required|numeric',
            'max_profit' => 'required|numeric',
            'image' => 'mimes:jpeg,jpg,png,svg'
        ]);

        $bot = Bot::where('id', $request->id)->first();
        $bot->title = $request->title;
        $bot->desc = $request->desc;
        $bot->perc = $request->perc;
        $bot->uses = $request->uses;
        $bot->profit_missed = $request->profit_missed;
        $bot->result_missed = $request->result_missed;
        $bot->min_profit = $request->min_profit;
        $bot->max_profit = $request->max_profit;
        $bot->limits = json_encode([
            'min_bot_amount' => $request->min_bot_amount,
            'max_bot_amount' => $request->max_bot_amount,
        ]);
        
        $bot->status = $request->status ?? 0;
        $bot->is_new = $request->is_new ?? 0;
        
        $path = imagePath()['bot']['path'];
        $size = imagePath()['bot']['size'];
        if (isset($request->image)) {
            if ($bot->image != null) {
                unlink(public_path('/' . $path . '/' . $bot->image));
            }
            try {
                $filename = uploadImg($request->image, $path, $size);
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $bot->image = $filename;
        }
        echo $bot;
        // $bot->save();
        // $bot->clearCache();

        // $notify[] = ['success', 'Bot has been Updated'];
        // return back()->withNotify($notify);
    }
    public function set(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'type' => 'required',
            'profit' => 'numeric',
            'result' => 'required',
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
            $bot = BotContract::where('id', $request->bot_id)->first();
            if ($request->type == 1) {
                $bot->profit = $request->profit;
            } elseif ($request->type == 2) {
                $bot->profit = $bot->amount * ($request->profit / 100);
            }
            $bot->result = $request->result;
            $bot->status = '2';
            $bot->save();
            $bot->clearCache();
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
                'type' => 'success',
                'message' => 'Profit has been adjusted successfully'
            ]
        );
    }
    public function storeTime(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'duration' => 'required|numeric'
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
            $bot_timing = new BotTiming();
            $bot_timing->bot_id = $request->id;
            $bot_timing->duration = $request->duration;
            $bot_timing->type = $request->type;
            $bot_timing->status = $request->status ?? 0;

            $bot_timing->save();
            $bot_timing->clearCache();
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th->errorInfo[2]
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'New Bot Duration Added'
            ]
        );
    }
    public function updateTime(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'duration' => 'required|numeric'
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
            $bot_timing = BotTiming::where('id', $request->id)->first();
            $bot_timing->duration = $request->duration;
            $bot_timing->status = $request->status ?? 0;
            $bot_timing->save();
            $bot_timing->clearCache();
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
                'type' => 'success',
                'message' => 'Bot Duration has been Updated'
            ]
        );
    }

    public function log()
    {
        abort_if(Gate::denies('bot_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Bot Contracts Log";
        return view('extensions.admin.bot.log', compact('page_title'));
    }
}