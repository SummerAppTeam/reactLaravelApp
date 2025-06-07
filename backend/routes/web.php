<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\EventController;



Route::get('/welcome', function () {
    return view('welcome');
}); // define default view



