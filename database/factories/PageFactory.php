<?php

use Faker\Generator as Faker;

$factory->define(App\Page::class, function (Faker $faker) {
    return [
        'user_id' => $faker->randomDigitNotNull,
        'document_id' => $faker->randomDigitNotNull,
        'order' => $faker->randomDigitNotNull,
    ];
});
