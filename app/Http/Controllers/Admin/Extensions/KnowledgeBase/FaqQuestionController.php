<?php

namespace App\Http\Controllers\Admin\Extensions\KnowledgeBase;

use App\Models\Knowledge\FaqCategory;
use App\Models\Knowledge\FaqQuestion;
use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyFaqQuestionRequest;
use App\Http\Requests\StoreFaqQuestionRequest;
use App\Http\Requests\UpdateFaqQuestionRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FaqQuestionController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('faq_question_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $faqQuestions = FaqQuestion::all();
        $page_title = 'Faq Questions';

        return view('extensions.admin.knowledge.faqQuestions.index', compact('page_title', 'faqQuestions'));
    }

    public function create()
    {
        abort_if(Gate::denies('faq_question_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $categories = FaqCategory::all()->pluck('category', 'id')->prepend(trans('global.pleaseSelect'), '');
        $page_title = 'Create Faq Question';

        return view('extensions.admin.knowledge.faqQuestions.create', compact('page_title', 'categories'));
    }

    public function store(StoreFaqQuestionRequest $request)
    {
        $faqQuestion = FaqQuestion::create($request->all());

        return redirect()->route('admin.knowledge.faq-questions.index');
    }

    public function edit(FaqQuestion $faqQuestion)
    {
        abort_if(Gate::denies('faq_question_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $categories = FaqCategory::all()->pluck('category', 'id')->prepend(trans('global.pleaseSelect'), '');

        $faqQuestion->load('category');
        $page_title = 'Edit ' . $faqQuestion->id;

        return view('extensions.admin.knowledge.faqQuestions.edit', compact('page_title', 'categories', 'faqQuestion'));
    }

    public function update(UpdateFaqQuestionRequest $request, FaqQuestion $faqQuestion)
    {
        $faqQuestion->update($request->all());

        return redirect()->route('admin.knowledge.faq-questions.index');
    }

    public function show(FaqQuestion $faqQuestion)
    {
        abort_if(Gate::denies('faq_question_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $faqQuestion->load('category');
        $page_title = 'View ' . $faqQuestion->id;

        return view('extensions.admin.knowledge.faqQuestions.show', compact('page_title', 'faqQuestion'));
    }

    public function destroy(FaqQuestion $faqQuestion)
    {
        abort_if(Gate::denies('faq_question_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $faqQuestion->delete();

        return back();
    }

    public function massDestroy(MassDestroyFaqQuestionRequest $request)
    {
        FaqQuestion::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
