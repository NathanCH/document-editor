<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Document extends Model
{
    use SoftDeletes;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'body',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
      'deleted_at',
    ];
    
    /**
     * A document belongs to a user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    
    /**
     * Return default string if document is untitled.
     *
     * @param string $value
     * @return string
     */
     public function getTitleAttribute($value)
     {
         return !empty($value) ? $value : 'Untitled Draft';
     }
}
