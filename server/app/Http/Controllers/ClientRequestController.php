<?php

namespace App\Http\Controllers;

use App\ClientRequest;
use Illuminate\Http\Request;

class ClientRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ClientRequest::all();
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
     * @param  \App\ClientRequest  $clientRequest
     * @return \Illuminate\Http\Response
     */
    public function show(ClientRequest $clientRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ClientRequest  $clientRequest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientRequest $clientRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ClientRequest  $clientRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientRequest $clientRequest)
    {
        //
    }
}
