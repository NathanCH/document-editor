<?php

namespace Tests\Feature;

use App\Document;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class DocumentTest extends TestCase
{
    use WithFaker;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateDocument()
    {
      $data = [
          'title' => $this->faker->sentence,
      ];
    
      $document = factory(Document::class)->make($data);
    
      $this->assertEquals($data['title'], $document->title);
    }

    /**
     * Test title attribute returns 'Untitled Draft' when empty.
     *
     * @return void
     */
    public function testGetTitleAttribute()
    {
        $data = [
            'title' => null,
        ];
        
        $document = factory(Document::class)->make($data);
        
        $this->assertEquals('Untitled Draft', $document->title);
    }
}
