<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Permission extends Model
{
    use CacheKeyTrait;
    

    public function getPermissions()
    {
        return Cache::remember($this->cacheKey($this) . ':all_permissions', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':all_permissions');
        return self::getPermissions();
    }
    public $table = 'permissions';

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'title',
        'created_at',
        'updated_at',
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
