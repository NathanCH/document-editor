<?php

namespace Tests\Feature;

use App\Profile;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProfileTest extends TestCase
{
    use WithFaker;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateProfile()
    {
      $data = [
          'name' => $this->faker->name,
          'about' => $this->faker->sentence,
      ];
    
      $profile = factory(Profile::class)->make($data);
    
      $this->assertInstanceOf(Profile::class, $profile);
      $this->assertEquals($data['name'], $profile->name);
      $this->assertEquals($data['about'], $profile->about);
    }
}
