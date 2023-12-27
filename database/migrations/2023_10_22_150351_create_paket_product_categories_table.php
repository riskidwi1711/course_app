<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('paket_product_categories', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->text('description', 255);
            $table->unsignedBigInteger('paket_id');
            $table->foreign('paket_id')
                ->references('id')
                ->on('pakets')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paket_product_categories');
    }
};
