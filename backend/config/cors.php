<?php


return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:5177'
    ],
    //Remember to change this to your React url 
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,  //This can be changed to false
    'openweather' => [
    'key' => env('OPENWEATHER_KEY'),
],

];


//To fix cors problem with React