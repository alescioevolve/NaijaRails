<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    return Inertia::render('Home', [
        'auth' => Auth::user(),  // Passing the user data to Inertia
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About/About');
});
Route::get('/faq', function () {
    return Inertia::render('FAQ/FAQ');
});
Route::inertia('/contact', 'Contact/Contact');

Route::resource('blogs', HomeController::class);
Route::resource('posts', PostController::class);

// Update Trains Route Schedule Here

Route::post('/trains/search', [ScheduleController::class, 'search'])->name('trains.search');

Route::post('/fetch-schedules', [ScheduleController::class, 'fetchSchedules']);
Route::resource('schedules', ScheduleController::class);

Route::get('/dashboard/booking/{id}', [ScheduleController::class, 'show'])->name('booking.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', ['auth' => Auth::user(),]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

/* Inertia Type of Routing

This
return Inertia::render('Home'); this uses inertia facade
Or 
return inertia('Home'); This uses inertia helper for the inertia facade

There's a shorthand too
Route::inertia('/about', 'About/About');
*/

// FOR DEMO POST ROUTE

// Route::resource('posts', PostController::class)->except('index'); to exempt a route method from the controller in browser
// Route::get('/', [PostController::class, 'index'])->name('posts.index'); to define and name a route, then call the controller method