<?php

use Faker\Generator as Faker;

$factory->define(App\Document::class, function (Faker $faker) {
    return [
        'user_id' => $faker->randomDigitNotNull,
        'title' => $faker->realText(25),
    ];
});
