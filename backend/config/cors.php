<?php

return [
    'paths' => ['api/*', 'events', 'store', 'update/*', 'delete/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
    'http://localhost:5179'
],
//From online. This is only thing I changed.
    'allowed_origins_patterns' => [], 
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, 
];

//To fix cors problem with React