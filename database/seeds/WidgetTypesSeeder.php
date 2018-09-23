<?php

use Illuminate\Database\Seeder;

class WidgetTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('widget_types')->insert([
            'type' => 'heading',
        ]);
        
        DB::table('widget_types')->insert([
            'type' => 'text',
        ]);
        
        DB::table('widget_types')->insert([
            'type' => 'image',
        ]);
    }
}
