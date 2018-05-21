<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivesTable extends Migration
{
    /**
     * Run the migrations.
     * @table actives
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actives', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            
            $table->string('address', 45)->nullable();
            $table->boolean('available');
            $table->longText('description')->nullable();
            $table->integer('area')->nullable();
            $table->enum('type', ['Local', 'Flat']);
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
        Schema::drop('actives');
    }
}
