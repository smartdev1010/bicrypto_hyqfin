<?php

namespace App\Models\Knowledge;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Category extends Model
{
    use Sluggable;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':knowledge_categories', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getCached()
    {
        return Cache::remember($this->cacheKey($this) . ':knowledge_categories_cached', now()->addHours(4), function () {
            return self::withCount('articles')
                ->with(['articles' => function ($query) {
                    $query->orderBy('id', 'desc');
                }])
                ->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':knowledge_categories');
        Cache::forget($this->cacheKey($this) . ':knowledge_categories_cached');
        return self::getCache();
    }

    public $table = 'knowledge_categories';

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'name',
        'slug',
        'created_at',
        'updated_at',
    ];

    public function articles()
    {
        return $this->hasMany(Article::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
