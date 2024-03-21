<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
// use App\Models\User;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/presents', function () {
    $presents = DB::select('SELECT * FROM presents');
    return response()->json($presents);
});

Route::get('/users', function () {
    $users = DB::select('SELECT * FROM users');
    return response()->json($users);
});
