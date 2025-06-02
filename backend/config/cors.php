<?php

return [
    'paths' => ['api/*', 'events', 'store', 'update/*', 'delete/*'], // I changed this too. Paths. * = matches anything that starts with __/*! 
    'allowed_methods' => ['*'],
    'allowed_origins' => [
    'http://localhost:5180'
],
//From online. This is only thing I changed.
    'allowed_origins_patterns' => [], 
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, 
];

//To fix cors problem with React