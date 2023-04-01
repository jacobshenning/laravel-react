<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Route;

class TaskController extends Controller
{

    /**
     * Store task in storage
     *
     * @param StoreTaskRequest $request
     * @return void
     */
    public function store(StoreTaskRequest $request)
    {
        Task::create($request->validated());
    }

    /**
     * Update task in storage
     *
     * @param UpdateTaskRequest $request
     * @param Task $task
     * @return void
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->validated());
    }

    /**
     * Toggle task completeness
     *
     * @param Task $task
     * @return void
     */
    public function toggle(Task $task)
    {
        $task->complete = ! $task->complete;
        $task->save();
    }


    /**
     * @return void
     */
    public static function routes()
    {
        Route::post('/tasks', [self::class, 'store'])->name('tasks.store');
        Route::patch('/tasks/{task}', [self::class, 'update'])->name('tasks.update');
        Route::put('/tasks/{task}', [self::class, 'toggle'])->name('tasks.toggle');
    }
}
