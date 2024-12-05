<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $posts = Post::all(); // Get all posts
        // $posts = Post::latest()->get(); Get all latest posts
        $posts = Post::latest()->paginate(5);
        return inertia('Blog/Blog', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        dd($request);

    }
}
