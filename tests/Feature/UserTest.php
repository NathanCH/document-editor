<?php

namespace Tests\Feature;

use App\User;
use App\Profile;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

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
     * Test name attribute returns email. 
     *
     * @return void
     */
    public function testGetNameAttributeReturnEmail()
    {    
        $userData = [
            'email' => $this->faker->email,
            'password' => $this->faker->password,
        ];

        $user = factory(User::class)->create($userData);
        
        $this->assertEquals($user['email'], $user->name);   
    }
    
    /**
    * Test name attribute returns profile name when profile name is assigned. 
     *
     * @return void
     */
    public function testGetNameAttribute()
    {    
        $userData = [
            'email' => $this->faker->email,
            'password' => $this->faker->password,
        ];
        
        $profileData = [
            'name' => $this->faker->name,
        ];

        $user = factory(User::class)->create($userData);

        $user->profile()->create($profileData);
        
        $this->assertEquals($profileData['name'], $user->name);    
    }
}
