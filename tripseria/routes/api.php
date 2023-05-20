<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MyUserController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TripController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/signup', [MyUserController::class , 'signup']);
Route::post('planner/signup',[MyUserController::class , 'signupPlanner']);
Route::get('reviews',[ReviewController::class,'index']);

Route::get('trips/get4',[TripController::class,'get4']);
Route::get('trips/{prompt}/get',[TripController::class,'search']);
Route::get('trips/get',[TripController::class,'index']);
Route::get('planner/trips/{uid}',[TripController::class,'showTrips']);
Route::get('planner/trips/{id}/destroy',[TripController::class,'destroy']);
Route::post('planner/trips/create',[TripController::class,'store']);
Route::get('trips/{id}/book',[TripController::class,'book']);
Route::get('trips/{id}/unbook',[TripController::class,'unbook']);