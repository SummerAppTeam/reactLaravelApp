<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EventController;
use Illuminate\Http\Request;

Route::apiResource('events', EventController::class);

Route::get(
    uri: '/user',
    action: function (Request $request) {
        return $request->user();
    }
)->middleware('auth:sanctum'); // Is this needed for anything? 
