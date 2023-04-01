<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Main dashboard view
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $tasks = Auth::user()->tasks;
        $projects = [];

        foreach($tasks as $task) {
            $task->comments;
            $projects[] = $task->status()->withTrashed()->first()->project()->withTrashed()->first();
        }

        foreach ($projects as $project) {
            $project->statuses;
        }

        return Inertia::render('Dashboard/Index', [
            'tasks' => Auth::user()->tasks()->with('status.project')->with('comments')->get(),
            'users' => User::all(),
            'projects' => $projects,
            'current_user' => Auth::user()
        ]);
    }

    public static function routes()
    {
        Route::get('/dashboard', [self::class, 'index'])->name('dashboard.index');
    }
}
