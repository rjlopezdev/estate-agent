<?php

use Illuminate\Database\Seeder;

class ActiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory('App\Active', 250)->create()->each(function(App\Active $active){
            $active->tags()->save(factory('App\ActiveTag')->make());
            $active->images()->save(factory('App\Image')->make());
        });
    }
}
