<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\RedirectResponse;
use App\Models\Project;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    /**
     * Show all projects
     *
     * @return Response
     */
    public function index(): Response
    {
        $projects = Project::with(['statuses', 'tasks'])->withTrashed()->get();

        return Inertia::render('Projects/Index', [
            'projects' => $projects
        ]);
    }

    /**
     * Store a new project in the database
     *
     * @param StoreProjectRequest $request
     * @return RedirectResponse
     */
    public function store(StoreProjectRequest $request): RedirectResponse
    {
        $project = Project::create($request->validated());

        return Response::route('projects.show', $project->id);
    }

    /**
     * Show an individual project
     *
     * @param $id
     * @return Response
     */
    public function show($id): Response
    {
        $project = Project::withTrashed()->with(['tasks'])->find($id);

        $statuses = $project->statuses()->withTrashed()->with('tasks.user')->with('tasks.comments')->get();

        return Inertia::render('Projects/Show', [
            'project' => $project,
            'statuses' => $statuses,
            'users' => User::all(),
            'current_user' => Auth::user()
        ]);
    }

    /**
     * Update the project in storage.
     *
     * @param UpdateProjectRequest $request
     * @param Project $project
     * @return void
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($request->validated());
    }

    /**
     * Remove the project from storage.
     *
     * @param Project $project
     * @return RedirectResponse
     */
    public function destroy(Project $project): RedirectResponse
    {
        $project->forceDelete();

        return Redirect::route('projects.index');
    }

    /**
     * Mark the project as deleted
     *
     * @param Project $project
     * @return RedirectResponse
     */
    public function delete(Project $project): RedirectResponse
    {
        $project->delete();

        return Redirect::route('projects.index');
    }

    /**
     * Restore the project, marking it "undeleted"
     *
     * @param $id
     * @return RedirectResponse
     */
    public function restore($id): RedirectResponse
    {
        $project = Project::onlyTrashed()->find($id);

        $project->restore();

        return Redirect::route('projects.show', $project->id);
    }

    /**
     * This method is called in routes/web.php and contains all ProjectController routes
     *
     * @return void
     */
    public static function routes()
    {
        Route::get('/projects', [self::class, 'index'])->name('projects.index');
        Route::post('/projects', [self::class, 'store'])->name('projects.store');
        Route::get('/projects/{project}', [self::class, 'show'])->name('projects.show');
        Route::patch('/projects/{project}', [self::class, 'update'])->name('projects.update');
        Route::delete('/projects/{project}', [self::class, 'delete'])->name('projects.delete');
        Route::post('/projects/{project}', [self::class, 'restore'])->name('projects.restore');
    }
}
