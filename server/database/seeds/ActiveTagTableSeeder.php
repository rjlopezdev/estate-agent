<?php

use Illuminate\Database\Seeder;

class ActiveTagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory('App\ActiveTag', 30)->create();
    }
}
