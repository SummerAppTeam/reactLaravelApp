<?php
/*
namespace App\Services;

use Illuminate\Support\Facades\Http;

class CallApiService
{
// Get the weather data from API for given City! 
    public function getWeather($city): array
    {

        // Get API key from config/env
        $apiKey = config('services.openweather.key');
        $apiUrl = "http://api.openweathermap.org/data/2.5/weather?q={$city}&units=metric&appid={$apiKey}";

        //Get request to get the data
        $response = Http::get($apiUrl);

        //If response succesfull return data in array
        //If no data return empty array
        return $response->successful()
            ? $response->json()
            : []; 
    }
} */