<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Blog/CreatePost');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $entry = $request->validate([
            'body' => 'required',
        ]);

        $post = Post::create($entry);
        return redirect()->route('/blogs',);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        // return inertia('Blog/SinglePost', ['post' => Post::find($id)]);
        return inertia('Blog/SinglePost', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return inertia('Blog/EditPost', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {

        sleep(1);

        $entry = $request->validate([
            'body' => 'required',
        ]);

        $post->update($entry);
        return redirect()->route('blogs.index',)->with('success', 'Post was Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        // dd($post);
        $post->destroy( $post->id);
        
        // Redirect to a specific route, for example, the index route for posts
        return redirect()->route('blogs.index')->with('success', 'Post deleted successfully.');
    }
}
