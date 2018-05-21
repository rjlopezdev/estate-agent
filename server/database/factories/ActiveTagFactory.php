<?php

use Faker\Generator as Faker;

$factory->define(App\ActiveTag::class, function (Faker $faker) {
    return [
        'name' => $faker->text(30)
    ];
});
