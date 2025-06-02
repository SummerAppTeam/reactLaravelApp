<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EventController;

Route::apiResource('events', EventController::class); // should work on its own
Route::get('/events', [EventController::class, 'index'])->name('event.index'); 
Route::post('/store', [EventController::class, 'store']);
Route::get('/show/{id}', [EventController::class, 'show']);
Route::delete('/delete/{id}', [EventController::class, 'destroy']);


