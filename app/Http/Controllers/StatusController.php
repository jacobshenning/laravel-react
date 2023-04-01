<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStatusRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Models\Status;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Response;

class StatusController extends Controller
{

    /**
     * Store new status in storage
     *
     * @param StoreStatusRequest $request
     * @return void
     */
    public function store(StoreStatusRequest $request): void
    {
        Status::create($request->validated());
    }

    /**
     * Update status in storage
     *
     * @param UpdateStatusRequest $request
     * @param Status $status
     * @return void
     */
    public function update(UpdateStatusRequest $request, Status $status): void
    {
        $status->update($request->validated());
    }

    /**
     * Remove the status from storage.
     *
     * @param Status $status
     * @return RedirectResponse
     */
    public function destroy(Status $status): RedirectResponse
    {
        $project = $status->project;

        $status->forceDelete();

        return Response::route('projects.show', $project->id);
    }

    /**
     * Mark the status as deleted
     *
     * @param Status $status
     * @return RedirectResponse
     */
    public function delete(Status $status): RedirectResponse
    {
        $project = $status->project;

        $status->delete();

        return Redirect::route('projects.show', $project->id);
    }

    /**
     * Restore the project, marking it "undeleted"
     *
     * @param $id
     * @return RedirectResponse
     */
    public function restore($id): RedirectResponse
    {
        $status = Status::onlyTrashed()->find($id);

        $status->restore();

        return Redirect::route('projects.show', $status->project->id);
    }

    /**
     * This method is called in routes/web.php and contains all StatusController routes
     *
     * @return void
     */
    public static function routes()
    {
        Route::post('/statuses', [self::class, 'store'])->name('statuses.store');
        Route::patch('/statuses/{status}', [self::class, 'update'])->name('statuses.update');
        Route::delete('/statuses/{status}', [self::class, 'delete'])->name('statuses.delete');
        Route::post('/statuses/{status}', [self::class, 'restore'])->name('statuses.restore');
    }
}
