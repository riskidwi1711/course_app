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
        Schema::table('user_quiz_results', function (Blueprint $table) {
            $table->dropForeign(['quiz_id','user_id']);
            // Add the new foreign key constraint with ON DELETE CASCADE
            $table->foreign('quiz_id')
                ->references('id')->on('quizzes')
                ->onDelete('cascade');
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('child', function (Blueprint $table) {
            //
        });
    }
};
