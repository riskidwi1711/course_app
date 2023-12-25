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
        Schema::table('paket_product_categories', function (Blueprint $table) {
            $table->unsignedBigInteger('paket_id');
            $table->foreign('paket_id')
                ->references('id')
                ->on('pakets');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('paket_product_categories', function (Blueprint $table) {
            //
        });
    }
};
