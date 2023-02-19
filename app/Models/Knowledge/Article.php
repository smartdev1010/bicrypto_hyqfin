<?php

namespace App\Models\Knowledge;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class Article extends Model
{
    use Sluggable;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':knowledge_articles', now()->addHours(4), function () {
            return self::get();
        });
    }
    public function getPopularArticles()
    {
        return Cache::remember($this->cacheKey($this) . ':knowledge_articles_popular', now()->addHours(4), function () {
            return self::orderBy('views_count', 'desc')->limit(5)->get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':knowledge_articles');
        Cache::forget($this->cacheKey($this) . ':knowledge_articles_popular');
        return self::getCache();
    }

    public $table = 'knowledge_articles';

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'title',
        'slug',
        'full_text',
        'short_text',
        'views_count',
        'category_id',
        'created_at',
        'updated_at',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
