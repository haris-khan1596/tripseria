<?php

namespace App\Http\Controllers;

use App\Models\Trips;
use App\Models\MyUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TripController extends Controller
{
    public function index()
    {
        $trips = Trips::where('num_ppl','<=','total_ppl')->get();
        return response()->json([
            'trips' => $trips,
        ]);
    }
    public function get4(){
        $trips = Trips::all()->take(4);
        return response()->json([
            'trips' => $trips,
        ]);
    }
    public function search(Request $request, $prompt){
        $trips = Trips::where('num_ppl','<=','total_ppl')->where('to', 'LIKE', '%' . $prompt . '%')
        ->orWhere('from', 'LIKE', '%' . $prompt . '%')
        ->orWhere('planner', 'LIKE', '%' . $prompt . '%')->get();
        return response()->json([
            'trips' => $trips,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image1' => 'required',
            'image2' => 'required',
            'image3' => 'required',
            'planner' => 'required',
            'from' => 'required',
            'to' => 'required',
            'duration' => 'required',
            'total_ppl' => 'required',
            'rating' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $trip = new Trips();
        $trip->planner=$request->planner;
        $trip->from=$request->from;
        $trip->to=$request->to;
        $trip->duration=$request->duration;
        $trip->total_ppl=$request->total_ppl;
        $trip->rating=$request->rating;
        $trip->price=$request->price;
        $trip->num_ppl=0;

        $trip->image1 = $request->file('image1')->store('public/images');
        $trip->image2 = $request->file('image2')->store('public/images');
        $trip->image3 = $request->file('image3')->store('public/images');
        $trip->save();
        return response()->json([
            'message' => 'Trip created successfully',
            'trip' => $trip,
        ], 201);

    }
    public function showTrips(Request $request,$uid){
        $user = MyUsers::where('id',$uid)->first();
        $trips =Trips::where('planner',$user->username)->get();
        return response()->json([
            'trips' => $trips,
        ]);
        
    }

    public function show($id)
    {
        $trip = Trips::findOrFail($id);

        return response()->json([
            'trip' => $trip,
        ]);
    }

    public function update(Request $request, $id)
    {
        $trip = Trips::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'image1' => 'required',
            'image2' => 'required',
            'image3' => 'required',
            'from' => 'required',
            'to' => 'required',
            'duration' => 'required',
            'num_ppl' => 'required',
            'total_ppl' => 'required',
            'rating' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $trip->update($request->all());

        return response()->json([
            'message' => 'Trip updated successfully',
            'trip' => $trip,
        ]);
    }

    public function book(Request $request,$id){
        $trip = Trips::where('id',$id)->first();
        if ($trip==null) {
            return response()->json([
                'message'=>'Trip is not available',
                'trip'=>$trip,
            ]);
        }
        if ($trip->num_ppl+1>$trip->total_ppl) {
            return response()->json([
                'message'=>'Trip has no vacancy',
                'trip'=>$trip,
            ]);
        }
        $trip->num_ppl=$trip->num_ppl+1;
        $trip->save();
        return response()->json([
            'message'=>'Trip Booked Successfully',
            'trip'=>$trip,
        ]);
    }
    public function unbook(Request $request,$id){
        $trip = Trips::where('id',$id)->first();
        if ($trip==null) {
            return response()->json([
                'message'=>'Trip is not available',
                'trip'=>$trip,
            ]);
        }
        $trip->num_ppl=$trip->num_ppl-1;
        $trip->save();
        return response()->json([
            'message'=>'Trip Booking has been cancelled',
            'trip'=>$trip, 
        ]);
    }
    public function destroy($id)
    {
        $trip = Trips::findOrFail($id);
        $trip->delete();

        return response()->json([
            'message' => 'Trip deleted successfully',
        ]);
    }
}
