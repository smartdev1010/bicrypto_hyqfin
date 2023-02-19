<?php

namespace App\Http\Controllers\Admin\Extensions\KnowledgeBase;

use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyTagRequest;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Models\Knowledge\Tag;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class TagsController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('tag_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tags = Tag::all();
        $page_title = 'Tags';

        return view('extensions.admin.knowledge.tags.index', compact('page_title', 'tags'));
    }

    public function create()
    {
        abort_if(Gate::denies('tag_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Create Tag';

        return view('extensions.admin.knowledge.tags.create', compact('page_title'));
    }

    public function store(StoreTagRequest $request)
    {
        $tag = Tag::create($request->all());

        return redirect()->route('admin.knowledge.tags.index');
    }

    public function edit(Tag $tag)
    {
        abort_if(Gate::denies('tag_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Edit ' . $tag->name;

        return view('extensions.admin.knowledge.tags.edit', compact('page_title', 'tag'));
    }

    public function update(UpdateTagRequest $request, Tag $tag)
    {
        $tag->update($request->all());

        return redirect()->route('admin.knowledge.tags.index');
    }

    public function show(Tag $tag)
    {
        abort_if(Gate::denies('tag_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'View ' . $tag->name;

        return view('extensions.admin.knowledge.tags.show', compact('page_title', 'tag'));
    }

    public function destroy(Tag $tag)
    {
        abort_if(Gate::denies('tag_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tag->delete();

        return back();
    }

    public function massDestroy(MassDestroyTagRequest $request)
    {
        Tag::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}