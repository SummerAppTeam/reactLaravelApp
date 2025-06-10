<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\WeatherController;


Route::get('/', function () {
    return view('welcome');
});

