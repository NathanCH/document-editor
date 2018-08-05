<?php

use Faker\Generator as Faker;

$factory->define(App\Profile::class, function (Faker $faker) {
    return [
        'user_id' => factory(App\User::class),
        'name' => $faker->name,
        'about' => $faker->sentence,
    ];
});
