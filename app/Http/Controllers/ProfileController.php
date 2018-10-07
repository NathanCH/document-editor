<?php

namespace App\Http\Controllers;

use App\Profile;
use App\Http\Requests\UpdateProfile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        
        parent::__construct();
    }
    
    /**
     * Show list of pages.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profile = Profile::where('user_id', $this->userId)->first();

        return view('profile.index', compact('profile'));
    }
    
    /**
     * Handle update profile request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProfile $request)
    {
        if (!$request->validated()) {
            return redirect('/');
        }
        
        $profile = Profile::whereUserId($this->userId)->first();
        
        $profile->update([ 'name' => $request->name ]);
        
        $profile->save();
        
        return redirect('/');
    }

}
