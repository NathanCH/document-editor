<?php

namespace App\Http\Controllers;

use App\Profile;
use App\Http\Requests\UpdateProfile;
use App\Http\Requests\UpdateProfilePassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        
        return view('profile.index', compact('profile'));
    }
    
    /**
     * Show update password.
     *
     * @return \Illuminate\Http\Response
     */
    public function showProfilePassword()
    {
        return view('profile.password');
    }
    
    /**
     * Save updated password.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateProfilePassword(UpdateProfilePassword $request)
    {
        if (!$request->validated()) {
            return redirect('/');
        }
        
        $profile = Profile::whereUserId($this->userId)->first();
        
        if (!Hash::check($request->current_password, $this->user->password)) {
            return redirect('profile/password');
        }
        
        $profile->update([
          'password' => bcrypt($request->password),
        ]);
        
        $profile->save();
        
        return view('profile.index', compact('profile'));
    }

}
