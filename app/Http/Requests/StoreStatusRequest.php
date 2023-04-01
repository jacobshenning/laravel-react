<?php

namespace App\Http\Requests;

use App\Models\Project;
use App\Models\Status;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreStatusRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:40'],
            'description' => ['required', 'string', 'max:255'],
            'project_id' => ['required', 'integer', Rule::exists(Project::class, 'id')]
        ];
    }
}
