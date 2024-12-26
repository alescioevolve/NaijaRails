<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
// use App\Http\Controllers\AuthController;

// For NaijaRails - Homepage single GET route 
// In routes/web.php or routes/filament.php
Route::get('/admin/login', function () {
    return view('filament.auth.login');
})->name('filament.login');

// Route::post('/admin/login', [AuthController::class, 'login'])->name('filament.login.post');

// Route::middleware(['web', 'guest'])->group(function () {
//     Route::get('/admin/login', function () {
//         return view('filament.auth.login');
//     });
//     Route::post('/admin/login', [AuthController::class, 'login']);
// });


Route::get('/', function () {
    // return view('welcome');
    return Inertia::render('Home');
});

Route::inertia('/about', 'About/About');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard', ['name' => 'Alescio Elochukwu']);
});

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

Route::resource('blogs', HomeController::class);

Route::resource('posts', PostController::class);


