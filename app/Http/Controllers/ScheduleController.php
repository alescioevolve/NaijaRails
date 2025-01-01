<?php

namespace App\Http\Controllers;


use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    public function index()
    {
        $schedules = Schedule::all(); // Get all posts
        // $schedules = Schedule::latest()->get(); // Get all latest posts
        // $posts = Schedule::latest()->paginate(5);
        return inertia('Schedules/Schedules', ['schedules' => $schedules]);
    }



    public function fetchSchedules(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'origin' => 'required|string',
            'destination' => 'required|string',
            'date' => 'required|date',
            'trainClass' => 'required|string',
        ]);

        // Fetch schedules based on form data
        $schedules = Schedule::query()
            ->where('origin', $request->origin)
            ->where('destination', $request->destination)
            ->where('date', $request->date)
            ->where('train_class', $request->trainClass)
            ->get();

        // Check if there are any schedules, else return dummy data
        if ($schedules->isEmpty()) {
            $schedules = collect([
                (object) [
                    'origin' => 'Dummy Origin',
                    'destination' => 'Dummy Destination',
                    'date' => '2024-01-01',
                    'train_class' => 'First Class',
                    'departure_time' => '10:00 AM',
                    'arrival_time' => '2:00 PM',
                ],
                (object) [
                    'origin' => 'Another Origin',
                    'destination' => 'Another Destination',
                    'date' => '2024-01-02',
                    'train_class' => 'Second Class',
                    'departure_time' => '12:00 PM',
                    'arrival_time' => '4:00 PM',
                ]
            ]);
        }

        // Return the component with the results
        return Inertia::render('Pages/Components/SearchTrains', [
            'results' => $schedules,
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show($id, Request $request)
    {
        // Retrieve the query parameters from the URL
        $train_name = $request->query('train_name');
        $origin = $request->query('origin');
        $destination = $request->query('destination');
        $date = $request->query('date');
        $trainClass = $request->query('trainClass');
        $price = $request->query('price');

        // Optionally, you can retrieve the train information from your database using $id
        // For example, you can retrieve a Train model if you have one
        // $train = Train::findOrFail($id);

        // Pass the data to the Inertia view (BookingPage.jsx)
        return Inertia::render('BookingPage', [
            'train_name' => $train_name,
            'origin' => $origin,
            'destination' => $destination,
            'date' => $date,
            'trainClass' => $trainClass,
            'price' => $price,
        ]);
    }


    // Modify the search method to return the data
    public function search(Request $request)
    {
        $validated = $request->validate([
            'origin' => 'required|string',
            'destination' => 'required|string',
            'travelDate' => 'required|date',
        ]);

        // Example: Retrieve trains from the database
        $trains = Schedule::where('origin', $validated['origin'])
            ->where('destination', $validated['destination'])
            ->whereDate('travel_date', $validated['travelDate'])
            ->get();

        // Return an Inertia response with the results
        return Inertia::render('UserDashboard/Dashboard', [
            'trains' => $trains
        ]);
    }


}
