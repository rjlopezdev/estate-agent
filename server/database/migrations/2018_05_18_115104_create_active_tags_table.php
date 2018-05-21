<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActiveTagsTable extends Migration
{
    /**
     * Run the migrations.
     * @table active_tags
     *
     * @return void
     */
    public function up()
    {
        Schema::create('active_tags', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('name', 30);
            # Indexes
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('active_tags');
    }
}
