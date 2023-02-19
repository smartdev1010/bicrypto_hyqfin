<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class TradeLog extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':binary_trade_log', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCacheByUser($id)
    {
        return Cache::remember($this->cacheKey($this) . ':binary_trade_log_user', now()->addHours(4), function () use ($id) {
            return self::where('user_id', $id)->get();
        });
    }
    public function getCacheByUserWithLimit($id, $limit = 10)
    {
        return Cache::remember($this->cacheKey($this) . ':binary_trade_log_user_limit', now()->addHours(4), function () use ($id, $limit) {
            return self::where('user_id', $id)->latest()->limit($limit)->get();
        });
    }
    public function getChartCache($get)
    {
        return Cache::remember($this->cacheKey($this) . ':binary_chart', now()->addHours(4), function () use ($get) {
            return self::chart('months', $get);
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':binary_trade_log_user_limit');
        Cache::forget($this->cacheKey($this) . ':binary_trade_log_user');
        Cache::forget($this->cacheKey($this) . ':binary_trade_log');
        Cache::forget($this->cacheKey($this) . ':binary_chart');
        return self::getCache();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function binary($get = 12)
    {
        $trades = $this->getCache();
        $data['count'] = $trades->count();
        $data['amount'] = $trades->sum('margin');
        $data['last_week'] = $trades->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $data['chart'] = self::getChartCache($get);

        $data['first']['count'] = $trades->where('result', 1)->where('status', 1)->count();
        $data['first']['amount'] = $trades->where('result', 1)->where('status', 1)->sum('margin');
        $data['first']['percentage'] = $data['count'] != 0 ? ceil((($data['first']['count']) * 100) / $data['count']) : 0;
        $data['first']['amount_percentage'] = $data['amount'] != 0 ? ceil((($data['first']['amount']) * 100) / $data['amount']) : 0;

        $data['second']['count'] = $trades->where('result', 2)->where('status', 1)->count();
        $data['second']['amount'] = $trades->where('result', 2)->where('status', 1)->sum('margin');
        $data['second']['percentage'] = $data['first']['percentage'] != 0 ? (100 - $data['first']['percentage']) : 0;
        $data['second']['amount_percentage'] = $data['first']['amount_percentage'] != 0 ? (100 - $data['first']['amount_percentage']) : 0;

        return (object) $data;
    }
    public static function chart($dates = 'days', $get = 12)
    {
        $cd = Carbon::now(); //->toDateTimeString();
        switch ($dates) {
            case 'days':
                $lw = $cd->copy()->subDays($get);
                $cd = $cd->copy()->addDays(1);
                $df = $cd->diffInDays($lw);
                $format = 'D';
                break;
            case 'months':
                $lw = $cd->copy()->subMonths(11);
                $cd = $cd->copy()->addMonths(1);
                $df = $cd->diffInMonths($lw);
                $format = 'M';
                break;
            default:
                break;
        }
        $data[$dates] = null;
        $data['first'] = null;
        $data['second'] = null;
        // $data['data_alt'] = null;
        // $data['days_alt'] = null;
        for ($i = 1; $i <= $df; $i++) {
            switch ($dates) {
                case 'days':
                    $first = self::where('result', 1)->where('status', 1)->whereDate('created_at', $lw->format('Y-m-d'))->count();
                    $second = self::where('result', 2)->where('status', 1)->whereDate('created_at', $lw->format('Y-m-d'))->count();
                    break;
                case 'months':
                    $first = self::where('result', 1)->where('status', 1)->whereMonth('created_at', $i)->count();
                    $second = self::where('result', 2)->where('status', 1)->whereMonth('created_at', $i)->count();
                    break;
                default:
                    break;
            }
            if ($i == $df) {
                $data['first'] .= ($first ?? 0);
                $data['second'] .= ($second ?? 0);
            } else {
                $data['first'] .= ($first ?? 0) . ",";
                $data['second'] .= ($second ?? 0) . ",";
            }
            $data[$dates] .= '"' . $lw->format($format) . '",';
            // $data['data_alt'][$i] = $usr;
            // $data['days_alt'][$i] = ($get > 27 ? $lw->format('D, d M') : $lw->format('D'));
            switch ($dates) {
                case 'days':
                    $lw->addDay();
                    break;
                case 'months':
                    $lw->addMonth();
                    break;
                default:
                    break;
            }
        }
        return (object) $data;
    }
}
