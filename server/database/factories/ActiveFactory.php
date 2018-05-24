<?php

use Faker\Generator as Faker;

$factory->define(App\Active::class, function (Faker $faker) {
    return [
        'address' => $faker->address,
        'available' => rand(0, 1),
        'description' => $faker->paragraph,
        'area' => rand(20, 5000),
        'price' => rand(50, 10000),
        'type' => $faker->randomElement(['Local' ,'Flat']),
    ];
});
