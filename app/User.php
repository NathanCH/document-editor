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

    /**
     * A user has one profile.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function profile()
    {
        return $this->hasOne('App\Profile');
    }
  
    /**
     * A user has many documents.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function document()
    {
        return $this->hasMany('App\Document');
    }
    
    /**
     * A user has pages documents.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function page()
    {
        return $this->hasMany('App\Page');
    }
    
    /**
     * Return email when profile name has not been set.
     *
     * @return string
     */
    public function getNameAttribute($value)
    {
        return !empty($this->profile->name) ? $this->profile->name : $this->email;
    }
}
