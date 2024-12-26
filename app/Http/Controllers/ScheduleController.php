<?php

namespace App\Http\Controllers;


use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function index()
    {
        $schedules = Schedule::all(); // Get all posts
        // $schedules = Schedule::latest()->get(); // Get all latest posts
        // $posts = Schedule::latest()->paginate(5);
        return inertia('Schedules/Schedules', ['schedules' => $schedules]);
    }
}
