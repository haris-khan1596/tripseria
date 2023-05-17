<?php

namespace App\Http\Controllers;

use App\Models\MyUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;


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

            if (!$user || $request->password != $user->password) {
                throw ValidationException::withMessages([
                    'email' => ['Invalid credentials'],
                ]);
            }



            return response()->json([
                'user' => $user->id,
                'isplanner' => $user->type == 'planner',
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
        // echo "<pre/>";
        // print_r($request);
        // die;
        try {
            Log::info('API Response:', $request->toArray());
            $request->validate([
                'name' => 'required',
                'email' => 'required|email|unique:my_users',
                'password' => 'required|min:6',
            ]);
            $user = new MyUsers();
            $user->username=$request->name;
            $user->email=$request->email;
            $user->password=$request->password;
            $user->type='user';
            $user->save();

            // Optionally, you can generate a token for the newly registered user
            

            return response()->json([
                'user' => $user,
                'isplanner' => $user->type == 'planner',
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
            Log::info('API Response:', $request->toArray());
            $request->validate([
                'name' => 'required',
                'email' => 'required|email|unique:my_users',
                'password' => 'required|min:6',
            ]);
            $user = new MyUsers();
            $user->username=$request->name;
            $user->email=$request->email;
            $user->password=$request->password;
            $user->type='planner';
            $user->save();


            return response()->json([
                'user' => $user,
                'isplanner' => $user->type == 'planner',
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
        $user = MyUsers::where('id', $myUsers)->first();
        if ($user != null) {
            return response()->json([
                'id' => $user->id,
                'username' => $user->username,
                'email' => $user->email,
                'password' => $user->password,
                'contact' => $user->contact,
            ], 200);
        }

        return response()->json([
            'message' => 'User Not Found',
        ], 404);
    }


    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, $id)
    {
        $user = MyUsers::where('id',$id)->first();
        if ($user==null) {
            return response()->json([
                'message' => 'User error successfully',
                'user' => $user,
            ]);
        }
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:my_users',
            'password' => 'required',
            'contact' => 'required',
        ]);

        $user->username=$request->name;
        $user->email=$request->email;
        $user->password=$request->password;
        $user->contact=$request->contact;
        $user->save();

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
        ]);
    }
}
