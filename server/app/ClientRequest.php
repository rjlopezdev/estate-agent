<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClientRequest extends Model
{
    protected $table = 'client_requests';

    public function active()
    {
        return $this->belongsTo('App\Active');
    }
}
