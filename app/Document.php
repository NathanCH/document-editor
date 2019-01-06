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
        'title',
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
     * A document has many pages.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pages()
    {
        return $this->hasMany('App\Page')->orderBy('order');
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

    /**
     * Return default string if document is untitled.
     *
     * @param string $order
     */
    public static function orderByCustomString($order = '')
    {
        switch ($order) {
            case 'alpha_asc':
                return self::orderBy('title', 'asc')->get();
                break;

            case 'alpha_desc':
                return self::orderBy('title', 'desc')->get();
                break;

            case 'date_asc':
                return self::orderBy('created_at', 'asc')->get();
                break;

            case 'date_desc':
                return self::orderBy('created_at', 'desc')->get();
                break;

            default:
            case 'date_update':
                return self::orderBy('updated_at', 'desc')->get();
                break;
        }
    }
}
