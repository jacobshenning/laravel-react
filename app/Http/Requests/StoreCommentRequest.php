<?php

namespace App\Http\Requests;

use App\Models\User;
use App\Models\Task;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCommentRequest extends FormRequest
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
            'content' => ['required', 'string', 'max:255'],
            'task_id' => ['required', 'integer', Rule::exists(Task::class, 'id')],
            'user_id' => ['required', 'integer', Rule::exists(User::class, 'id')],
        ];
    }
}
