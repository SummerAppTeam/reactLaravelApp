<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventData extends Model
{

    protected $fillable = [
        'name',
        'description',
        'date',
        'location',
        'type',
        'price',
    ];
}
