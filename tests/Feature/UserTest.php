<?php

namespace Tests\Feature;

use App\User;
use App\Profile;
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
        
        $this->assertEquals($data['email'], $user->email);

        $this->assertEquals($data['password'], $user->password);
    }
    
    /**
     * Test name attribute returns email when Profile name attribute is empty. 
     *
     * @return void
     */
    public function testGetNameAttribute()
    {
        $userData = [
            'id' => $this->faker->randomDigitNotNull,
            'email' => $this->faker->email,
            'password' => $this->faker->password,
        ];
        
        $profileData = [
            'name' => $this->faker->name,
        ];

        $user = factory(User::class)->make($userData);
        
        $userWithProfile = $user->profile()->create($profileData);
        
        $this->assertEquals($userData['email'], $user->name);

        $this->assertEquals($profileData['name'], $userWithProfile->name);    
    }
}
