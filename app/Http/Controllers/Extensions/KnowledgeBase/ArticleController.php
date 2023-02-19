<?php

namespace App\Http\Controllers\Extensions\KnowledgeBase;

use App\Models\Knowledge\Article;
use App\Http\Controllers\Controller;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::with('category')
            ->orderBy('id', 'desc')->get();

        return response()->json([
            'articles' => $articles,
        ]);
    }

    public function show($slug, $article)
    {
        $article = Article::with(['tags', 'category'])
            ->withCount('tags')
            ->whereId($article)
            ->first();

        $article->timestamps = false;
        $article->views_count++;
        $article->save();

        return response()->json([
            'article' => $article,
        ]);
    }

    public function check_slug(Request $request)
    {
        $slug = SlugService::createSlug(Article::class, 'slug', $request->input('title', ''));

        return response()->json(['slug' => $slug]);
    }
}
