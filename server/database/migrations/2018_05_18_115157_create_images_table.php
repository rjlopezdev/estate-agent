<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     * @table images
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            
            $table->string('path', 45)->nullable();
            $table->boolean('is_main');
            $table->integer('active_id')->unsigned()->default(0);
            # Indexes
            $table->index('active_id');


            $table->foreign('active_id')
                ->references('id')->on('actives')
                ->onDelete('no action')
                ->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('images');
    }
}
