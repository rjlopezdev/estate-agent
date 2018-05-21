<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivesActiveTagsTable extends Migration
{
    /**
     * Run the migrations.
     * @table actives__active_tags
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actives__active_tags', function (Blueprint $table) {
            $table->integer('active_id')->unsigned();
            $table->integer('active_tag_id')->unsigned();
            $table->timestamps();
            
            # Indexes
            $table->index('active_tag_id');
            $table->index('active_id');


            $table->foreign('active_id')
                ->references('id')->on('actives')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('active_tag_id')
                ->references('id')->on('active_tags')
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
        Schema::drop('actives__active_tags');
    }
}
