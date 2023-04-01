<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MarketingController extends Controller
{
    /**
     * Marketing Home View
     *
     * @param Request $request
     * @return Response
     */
    public function home(Request $request)
    {
        return Inertia::render('Marketing/Home');
    }

    /**
     * Marketing routes
     *
     * @prefix marketing
     *
     * @return void
     */
    public static function routes()
    {
        Route::get('/', [self::class, 'home'])->name('marketing.home');
    }
}
