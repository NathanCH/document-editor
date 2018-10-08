<?php

namespace Tests\Feature;

use App\User;
use App\Profile;
use Tests\TestCase;
use App\Events\UserRegistered;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Testing\WithFaker;

class RegisterTest extends TestCase
{
    /**
     * A valid user can be registered
     *
     * @return void
     */
    public function testRegisterValidUser()
    {
        $this->withoutEvents();
      
        $user = factory(User::class)->make();

        $response = $this->post('/register', [
            'email' => $user->email,
            'password' => 'secret',
            'password_confirmation' => 'secret',
        ]);
    
        $response->assertStatus(302);
    
        $this->assertAuthenticated();
    }
    
    /**
     * An invalid user cannot be registered
     *
     * @return void
     */
    public function testDoesNotRegisterInvalidUser()
    {
        $this->withoutEvents();

        $user = factory(User::class)->make();

        $response = $this->post('/register', [
            'email' => $user->email,
            'password' => 'secret',
            'password_confirmation' => 'invalid',
        ]);
        
        $response->assertSessionHasErrors();
        
        $this->assertGuest();
    }
}
