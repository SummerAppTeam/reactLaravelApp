<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth:sanctum')->post('/theme', [UserController::class, 'updateTheme']);
