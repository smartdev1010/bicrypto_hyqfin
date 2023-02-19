<?php

namespace App\Http\Controllers\Extensions\KnowledgeBase;

use App\Models\Knowledge\FaqCategory;
use App\Http\Controllers\Controller;
use App\Models\Knowledge\FaqQuestion;

class FaqController extends Controller
{
    public function index()
    {
        $categories = FaqCategory::with('faqQuestions')
            ->get();

        return response()->json([
            'categories' => $categories
        ]);
    }

    public function search($search)
    {
        $faqs = FaqQuestion::where('question', 'LIKE', '%' . $search . '%')
            ->get();

        return response()->json([
            'faqs' => $faqs
        ]);
    }
}
