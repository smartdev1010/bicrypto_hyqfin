<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class ThirdpartyOrders extends Model
{
    use HasFactory;
    use CacheKeyTrait;
    

    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':thirdparty_rders', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function getChartCache($get)
    {
        return Cache::remember($this->cacheKey($this) . ':all_trades_chart', now()->addHours(4), function () use ($get) {
            return self::chart('days', $get, 'alltrades');
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':thirdparty_rders');
        return self::getCache();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function trades($get = 30)
    {
        $trades = self::getCache();

        $data['count'] = $trades->count();
        $data['cost'] = $trades->sum('cost');
        $data['last_week'] = $trades->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $data['chart'] = self::getChartCache($get);

        $data['buy']['count'] = $trades->where('side', 'buy')->count();
        $data['buy']['cost'] = $trades->where('side', 'buy')->sum('cost');
        $data['buy']['percentage'] = $data['count'] != 0 ? ceil((($data['buy']['count']) * 100) / $data['count']) : 0;
        $data['buy']['cost_percentage'] = $data['cost'] != 0 ? ceil((($data['buy']['cost']) * 100) / $data['cost']) : 0;

        $data['sell']['count'] = $trades->where('side', 'sell')->count();
        $data['sell']['cost'] = $trades->where('side', 'sell')->sum('cost');
        $data['sell']['percentage'] = $data['buy']['percentage'] != 0 ? (100 - $data['buy']['percentage']) : 0;
        $data['sell']['cost_percentage'] = $data['buy']['cost_percentage'] != 0 ? (100 - $data['buy']['cost_percentage']) : 0;

        return (object) $data;
    }

    public static function chart($dates = 'days', $get = 30, $type = 'alltrades')
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
                $lw = $cd->copy()->subMonths(12);
                $cd = $cd->copy()->addMonths(1);
                $df = $cd->diffInMonths($lw);
                $format = 'M';
                break;
            default:
                break;
        }
        $data[$dates] = null;
        $data['data'] = null;
        // $data['data_alt'] = null;
        // $data['days_alt'] = null;
        $usr = 0;
        for ($i = 1; $i <= $df; $i++) {
            switch ($type) {
                case 'alltrades':
                    $usr = self::whereDate('created_at', $lw->format('Y-m-d'))->count();
                    break;
                case 'buy':
                    $usr = self::where('side', 'buy')->whereDate('created_at', $lw->format('Y-m-d'))->count();
                    break;
                case 'sell':
                    $usr = self::where('side', 'sell')->whereDate('created_at', $lw->format('Y-m-d'))->count();
                    break;
                default:
                    break;
            }
            $data['data'] .= $usr . ",";
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
