<?php

namespace App\Http\Controllers\Admin\Extensions\KnowledgeBase;

use App\Models\Knowledge\FaqCategory;
use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyFaqCategoryRequest;
use App\Http\Requests\StoreFaqCategoryRequest;
use App\Http\Requests\UpdateFaqCategoryRequest;
use App\Models\Knowledge\FaqQuestion;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FaqCategoryController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('faq_category_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $faqCategories = FaqCategory::all();
        $page_title = 'Faq Categories';

        return view('extensions.admin.knowledge.faqCategories.index', compact('page_title', 'faqCategories'));
    }

    public function create()
    {
        abort_if(Gate::denies('faq_category_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Create Faq Category';

        return view('extensions.admin.knowledge.faqCategories.create', compact('page_title'));
    }

    public function store(StoreFaqCategoryRequest $request)
    {
        $faqCategory = FaqCategory::create($request->all());

        return redirect()->route('admin.knowledge.faq-categories.index');
    }

    public function edit(FaqCategory $faqCategory)
    {
        abort_if(Gate::denies('faq_category_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Edit ' . $faqCategory->category;

        return view('extensions.admin.knowledge.faqCategories.edit', compact('page_title', 'faqCategory'));
    }

    public function update(UpdateFaqCategoryRequest $request, FaqCategory $faqCategory)
    {
        $faqCategory->update($request->all());

        return redirect()->route('admin.knowledge.faq-categories.index');
    }

    public function show(FaqCategory $faqCategory)
    {
        abort_if(Gate::denies('faq_category_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'View ' . $faqCategory->category;

        return view('extensions.admin.knowledge.faqCategories.show', compact('page_title', 'faqCategory'));
    }

    public function destroy(FaqCategory $faqCategory)
    {
        abort_if(Gate::denies('faq_category_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $faqs = FaqQuestion::where('category_id', $faqCategory->id)->get();
        foreach ($faqs as $faq) {
            $faq->delete();
        }
        $faqCategory->delete();

        return back();
    }

    public function massDestroy(MassDestroyFaqCategoryRequest $request)
    {
        FaqCategory::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}