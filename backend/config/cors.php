<?php

return [
    'paths' => ['api/*', 'events', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'], //From online. This is only thing I changed.
    'allowed_origins_patterns' => [], 
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false, // Can be true if needed. 
];

//To fix cors problem with React