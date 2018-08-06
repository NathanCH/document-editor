<?php

use Faker\Generator as Faker;

$factory->define(App\Profile::class, function (Faker $faker) {
    return [
        'user_id' => $faker->randomDigitNotNull,
        'name' => $faker->name,
        'about' => $faker->sentence,
    ];
});
