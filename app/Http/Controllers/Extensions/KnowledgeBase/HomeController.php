<?php

namespace App\Http\Controllers\Extensions\KnowledgeBase;

use App\Models\Knowledge\Category;
use App\Http\Controllers\Controller;
use App\Models\Knowledge\Article;

class HomeController extends Controller
{
    public function index()
    {
        $categories = (new Category)->getCached();
        $popularArticles = (new Article)->getPopularArticles();

        return response()->json([
            'categories' => $categories,
            'popularArticles' => $popularArticles,
        ]);
    }
}
