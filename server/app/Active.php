<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Active extends Model
{
    protected $table = 'actives';

    public function tags()
    {
        return $this->belongsToMany('App\ActiveTag', 'actives__active_tags');
    }

    public function images() {
        return $this->hasMany('App\Image');
    }
}
