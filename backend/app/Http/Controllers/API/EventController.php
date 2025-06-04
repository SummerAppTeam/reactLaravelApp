<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EventData;

class EventController extends Controller
{
    // return entries from database
    public function index()
    {
        return EventData::all();
    }

    // Store new entry
    public function store(Request $request)
    {
        // Input validation
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:420',
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:50',
            'price' => 'required|numeric',

        ]);



        // Save to database
        $eventData = EventData::create($validated);
        // Return object
        return response()->json($eventData, 201);
    }

    public function show($id)
    {
        return EventData::findOrFail($id);
    }

    // Update infomation in database
    public function update(Request $request, $id)
    {
        $eventData = EventData::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'type' => 'required|string|max:50',
            'price' => 'required|numeric',
            'description' => 'required|string|max:420',
        ]);

        $eventData->update($validated);
        return response()->json($eventData); // Return updated object
    }

    // Delete from database
    public function destroy($id)
    {
        $eventData = EventData::findOrFail($id);
        $eventData->delete();
        return response()->json(null, 204);
    }
}
