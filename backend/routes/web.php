<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\API\EventController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth:sanctum')->post('/theme', [UserController::class, 'updateTheme']);
// Route::get('/events', [EventController::class, 'events'])->name('events');
