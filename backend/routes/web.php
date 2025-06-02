<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\EventController;


Route::get('/', function () {
    return view('welcome');
}); // define default view


Route::middleware('auth:sanctum')->post('/theme', [UserController::class, 'updateTheme']);

Route::get('/events', [EventController::class, 'events'])->name('events');
Route::get('/events', [EventController::class, 'index']); // Do not remove!
Route::post('/events', [EventController::class, 'store'])->name('events.store');
Route::get('/events/{id}', [EventController::class, 'show'])->name('events.show');
Route::put('/events/{id}', [EventController::class, 'update'])->name('events.update');
Route::delete('/events/{id}', [EventController::class, 'destroy'])->name('events.destroy');
