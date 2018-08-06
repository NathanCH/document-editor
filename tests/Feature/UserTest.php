<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use WithFaker;
    
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateUser()
    {
        $data = [
            'email' => $this->faker->email,
            'password' => $this->faker->password,
        ];
        
        $user = factory(User::class)->make($data);
        
        $this->assertInstanceOf(User::class, $user);
        $this->assertEquals($data['email'], $user->email);
        $this->assertEquals($data['password'], $user->password);
    }
    
    /**
     * Test name attribute returns email when profile 
     * has not been associated.
     *
     * @return void
     */
    public function testGetNameAttribute()
    {
        $userData = [
            'id' => $this->faker->randomDigitNotNull,
            'email' => $this->faker->email,
            'password'=> $this->faker->password,
        ];

        $user = factory(User::class)->make($userData);

        $this->assertEquals($userData['email'], $user->name);
    }
}
