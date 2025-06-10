<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
        ]);
            
        // You can save to DB or send mail here (optional)

        // Return JSON success response
        return response()->json([
            'status' => 'success',
            'message' => 'Thank you! Your message has been received.'
        ]);
    }
}
