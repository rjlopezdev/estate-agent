<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'images';

    public function active()
    {
        return $this->belongsTo('App\Active');
    }
}
