<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ScheduleController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/user/detail/{id}', [UserController::class, 'show']);
Route::get('/user/list', [UserController::class, 'index']);


Route::post('/api/schedules', [ScheduleController::class, 'getSchedules']);

