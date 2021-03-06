<?php

namespace App\Http\Controllers;

use App\Active;
use Illuminate\Http\Request;

class ActiveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Active::orderBy('address', 'desc')
                ->with('tags', 'images')
                ->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Active  $active
     * @return \Illuminate\Http\Response
     */
    public function show(Active $active)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Active  $active
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Active $active)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Active  $active
     * @return \Illuminate\Http\Response
     */
    public function destroy(Active $active)
    {
        //
    }
}
