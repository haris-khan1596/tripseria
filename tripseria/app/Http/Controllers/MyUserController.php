<?php

namespace App\Http\Controllers;

use App\Models\MyUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class MyUserController extends Controller
{
    public function login(Request $request)
{
    try {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = MyUsers::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials'],
            ]);
        }

        // Authentication passed
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user->id,
            'isplanner'=> $user->type=='planner',
            'token' => $token,
        ]);
    } catch (ValidationException $exception) {
        return response()->json(['error' => $exception->errors()], 401);
    }
}
    /**
     * Store a newly created resource in storage.
     */
    public function signup(Request $request)
{
    try {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:myusers',
            'password' => 'required|min:6',
        ]);

        $user = MyUsers::create([
            'username' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => 'user',
        ]);

        // Optionally, you can generate a token for the newly registered user
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user->id,
            'isplanner'=> $user->type=='planner',
            'token' => $token,
        ], 201);
    } catch (ValidationException $exception) {
        return response()->json(['error' => $exception->errors()], 422);
    }
}
/**
     * Store a newly created resource in storage.
     */
    public function signupPlanner(Request $request)
{
    try {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:myusers',
            'password' => 'required|min:6',
        ]);

        $user = MyUsers::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => 'planner',
        ]);

        // Optionally, you can generate a token for the newly registered user
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user->id,
            'isplanner'=> $user->type=='planner',
            'token' => $token,
        ], 201);
    } catch (ValidationException $exception) {
        return response()->json(['error' => $exception->errors()], 422);
    }
}

    /**
     * Display the specified resource.
     */
    public function show(MyUsers $myUsers)
    {
        $user = MyUsers::where('id',$myUsers)->first();
        if ($user!=null) {
            return response()->json([
                'id'=> $user->id,
                'username' => $user->username,
                'email' => $user->email,
                'password' => $user->password,
                'contact' => $user->contact,
            ],200);
        }

        return response()->json([
            'message'=> 'User Not Found',
        ],404);
    }


    /**
     * Update the specified resource in storage.
     */
    
    public function update(Request $request, $id)
    {
        $user = MyUsers::findOrFail($id);

        $request->validate([
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'contact' => 'required',
        ]);

        $user->update([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $request->password,
            'contact' => $request->contact,
        ]);

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
        ]);
    }

}
