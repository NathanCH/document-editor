<?php

namespace Tests\Feature;

use App\Page;
use App\Document;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PageTest extends TestCase
{
    use WithFaker;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreatePage()
    {
      $data = [
          'order' => $this->faker->randomDigitNotNull,
      ];
    
      $page = factory(Page::class)->make($data);
    
      $this->assertEquals($data['order'], $page->order);
    }
}
