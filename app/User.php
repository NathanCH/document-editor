<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    
    public function profile()
    {
        return $this->hasOne('App\Profile');
    }
    
    public function document()
    {
        return $this->hasMany('App\Document');
    }
    
    /**
     * Return email when profile name has not been set.
     *
     * @return string
     */
    public function getNameAttribute($value)
    {
        return !empty($this->profile->name) 
          ? $this->profile->name : $this->email;
    }
}
