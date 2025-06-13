<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Api\EventController;


Route::apiResource('events', EventController::class);

Route::post('/contact', [ContactController::class, 'store']);