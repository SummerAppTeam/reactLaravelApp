<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Api\EventController;

// Contact form route
Route::post('/contact', [ContactController::class, 'store']);

// Event routes
Route::apiResource('events', EventController::class);
Route::get('/events', [EventController::class, 'index'])->name('event.index');
Route::post('/store', [EventController::class, 'store']);
Route::get('/show/{id}', [EventController::class, 'show']);
Route::delete('/delete/{id}', [EventController::class, 'destroy']);
