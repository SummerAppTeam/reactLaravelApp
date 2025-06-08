<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\EventController;




Route::get('/', function () {
    return view('welcome');
});

