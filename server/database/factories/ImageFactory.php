<?php

use Faker\Generator as Faker;

$factory->define(App\Image::class, function (Faker $faker) {
    return [
        'path' => $faker->imageUrl(640, 480),
        'is_main' => rand(0, 1),
    ];
});
