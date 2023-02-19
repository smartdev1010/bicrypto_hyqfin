<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;

class Role extends Model
{
    use CacheKeyTrait;
    

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':all_roles');
        return self::getRoles();
    }
    public function getRoles()
    {
        return Cache::remember($this->cacheKey($this) . ':all_roles', now()->addHours(4), function () {
            return self::with('permissions')->get();
        });
    }
    public $table = 'roles';

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'title',
        'created_at',
        'updated_at',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }
}
