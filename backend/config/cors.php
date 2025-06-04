<?php

// return [
//     'paths' => ['api/*'], // I changed this too. Paths. * = matches anything that starts with __/*! 
//     'allowed_methods' => ['*'],
//     'allowed_origins' => [
//         'http://localhost:5173'
//     ],
//     //From online. This is only thing I changed.
//     'allowed_origins_patterns' => [],
//     'allowed_headers' => ['*'],
//     'exposed_headers' => [],
//     'max_age' => 0,
//     'supports_credentials' => false,
// ];


return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], // React dev server
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];


//To fix cors problem with React