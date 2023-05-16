<?php

namespace App\Http\Controllers;

use App\Models\Trips;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TripController extends Controller
{
    public function index()
    {
        $trips = Trips::all();

        return response()->json([
            'trips' => $trips,
        ]);
    }
    public function search(Request $request){
        $request->validate(['prompt'=>'required']);
        $trips = Trips::where('to', 'LIKE', '%' . $request->prompt . '%')
        ->orWhere('from', 'LIKE', '%' . $request->prompt . '%')
        ->orWhere('planner', 'LIKE', '%' . $request->prompt . '%')->get();
        return response()->json([
            'trips' => $trips,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image1' => 'required|image',
            'image2' => 'required|image',
            'image3' => 'required|image',
            'planner' => 'required',
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

        $trip = new Trips($request->all());

        $trip->image1 = $request->file('image1')->store('images');
        $trip->image2 = $request->file('image2')->store('images');
        $trip->image3 = $request->file('image3')->store('images');
        $trip->save();
        return response()->json([
            'message' => 'Trip created successfully',
            'trip' => $trip,
        ], 201);

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
            'planner' => 'required',
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

    public function destroy($id)
    {
        $trip = Trips::findOrFail($id);
        $trip->delete();

        return response()->json([
            'message' => 'Trip deleted successfully',
        ]);
    }
}
