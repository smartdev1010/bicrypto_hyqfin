<?php

namespace App\Http\Controllers\Admin\Extensions\KnowledgeBase;

use App\Models\Knowledge\Article;
use App\Models\Knowledge\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyArticleRequest;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use App\Models\Knowledge\Tag;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class ArticlesController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('article_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $articles = Article::all();
        $page_title = 'Articles';
        return view('extensions.admin.knowledge.articles.index', compact('articles', 'page_title'));
    }

    public function create()
    {
        abort_if(Gate::denies('article_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $categories = Category::all()->pluck('name', 'id');

        $tags = Tag::all()->pluck('name', 'id');
        $page_title = 'Create Article';

        return view('extensions.admin.knowledge.articles.create', compact('categories', 'tags', 'page_title'));
    }

    public function store(StoreArticleRequest $request)
    {
        $article = Article::create($request->all());
        $article->tags()->sync($request->input('tags', []));

        return redirect()->route('admin.knowledge.articles.index');
    }

    public function edit(Article $article)
    {
        abort_if(Gate::denies('article_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $categories = Category::all()->pluck('name', 'id');

        $tags = Tag::all()->pluck('name', 'id');

        $article->load('category', 'tags');
        $page_title = 'Edit ' . $article->title;

        return view('extensions.admin.knowledge.articles.edit', compact('categories', 'tags', 'article', 'page_title'));
    }

    public function update(UpdateArticleRequest $request, Article $article)
    {
        $path = imagePath()['article']['path'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImg($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $article->img = $filename;
        }
        $article->save();
        $article->update($request->all());
        $article->tags()->sync($request->input('tags', []));
        $notify[] = ['success', 'Article has been Updated'];

        return redirect()->route('admin.knowledge.articles.index')->withNotify($notify);
    }

    public function show(Article $article)
    {
        abort_if(Gate::denies('article_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $article->load('category', 'tags');
        $page_title = 'View ' . $article->title;

        return view('extensions.admin.knowledge.articles.show', compact('article', 'page_title'));
    }

    public function destroy(Article $article)
    {
        abort_if(Gate::denies('article_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $article->delete();

        return back();
    }

    public function massDestroy(MassDestroyArticleRequest $request)
    {
        Article::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}