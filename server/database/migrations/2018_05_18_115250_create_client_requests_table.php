<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientRequestsTable extends Migration
{
    /**
     * Run the migrations.
     * @table client_requests
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_requests', function (Blueprint $table) {
            $table->integer('id');
            $table->timestamps();
            
            $table->string('name', 20);
            $table->string('surname', 45);
            $table->string('phone_number', 15);
            $table->string('email', 45)->nullable();
            $table->integer('active_id')->unsigned();
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
        Schema::drop('client_requests');
    }
}
