<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActiveTag extends Model
{
    protected $table = 'active_tags';

    public function actives()
    {
        return $this->belongsToMany('App\Active', 'actives__active_tags');
    }
}
