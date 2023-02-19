<?php

namespace App\Http\Requests;

use App\Models\Knowledge\Tag;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpFoundation\Response;

class UpdateTagRequest extends FormRequest
{
    public function authorize()
    {
        abort_if(Gate::denies('tag_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return true;
    }

    public function rules()
    {
        return [
            'name' => [
                'required',
            ],
            'slug' => [
                'required', 'unique:knowledge_tags,slug,' . $this->route('tag')->id
            ],
        ];
    }
}
