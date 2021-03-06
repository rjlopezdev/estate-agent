<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return \File::get(base_path() . '\public\index.html');
});


Route::resource('active', 'ActiveController');
Route::resource('client-request', 'ClientRequestController');
