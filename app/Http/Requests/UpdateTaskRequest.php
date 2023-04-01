<?php

namespace App\Http\Requests;

use App\Models\Status;
use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateTaskRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:40', Rule::unique(Task::class)->ignore($this->task)],
            'description' => ['required', 'string', 'max:255'],
            'due' => ['required', 'date'],
            'status_id' => ['required', 'integer', Rule::exists(Status::class, 'id')],
            'user_id' => ['required', 'integer', Rule::exists(User::class, 'id')]
        ];
    }
}
