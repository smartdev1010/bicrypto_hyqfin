<?php

namespace App\Http\Controllers\Extensions\KnowledgeBase;

use App\Http\Controllers\Controller;
use App\Models\Knowledge\Tag;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function show($slug, Tag $tag)
    {
        $tag->loadCount('articles');

        $articles = $tag->articles()
            ->with('category')
            ->orderBy('id', 'desc')
            ->paginate(5);

        return response()->json([
            'tag' => $tag,
            'articles' => $articles
        ]);
    }

    public function check_slug(Request $request)
    {
        $slug = SlugService::createSlug(Tag::class, 'slug', $request->input('name', ''));

        return response()->json(['slug' => $slug]);
    }
}
