<?php

use App\Http\Controllers\MarketingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\CommentController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;


// Marketing routes
Route::middleware('guest')->group(function () {
    MarketingController::routes();
});

// App routes
Route::middleware('auth')->group(function () {
    DashboardController::routes();
    ProfileController::routes();
    ProjectController::routes();
    StatusController::routes();
    TaskController::routes();
    CommentController::routes();
});


Route::get('/fire', function () {

    $project = Project::all()->first();

    $project->name = fake()->name();
    $project->description = fake()->realText();

    $project->save();

    dd($project->toArray());

    return 'Event has been sent!';
});

// Auth routes kept in separate file.
require __DIR__.'/auth.php';
