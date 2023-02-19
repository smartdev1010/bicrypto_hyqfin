<?php

namespace App\Http\Controllers\Extensions\KnowledgeBase;

use App\Models\Knowledge\Category;
use App\Http\Controllers\Controller;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function show($slug, Category $category)
    {
        $category->loadCount('articles');

        $articles = $category->articles()
            ->paginate(5);

        return response()->json([
            'articles' => $articles,
            'category' => $category,
        ]);
    }

    public function check_slug(Request $request)
    {
        $slug = SlugService::createSlug(Category::class, 'slug', $request->input('name', ''));

        return response()->json(['slug' => $slug]);
    }
}
