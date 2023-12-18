<?php

namespace App\Http\Controllers;

use App\Models\Explanation;
use App\Models\Option;
use App\Models\Paket;
use App\Models\PaketProduct;
use App\Models\Question as ModelsQuestion;
use App\Models\Quiz;
use App\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class QuizController extends Controller
{

    public function index(Request $request)
    {
        $data = [
            'paket' => Paket::all(),
            'paket_produk' => PaketProduct::all(),
            'new_questions' => ModelsQuestion::take(5)->get()
        ];
        $data['pageIdentity'] = [
            "title" => 'Buat soal',
            "icon" => 'uil uil-file-landscape-alt'
        ];
        return Inertia::render('Soal/Index', $data);
    }
    public function create($id)
    {

        $paket_id = Quiz::find($id)->first()->pluck('paket_id')->first();
        $data = [
            'quiz_id' => intval($id),
            'paket_id' => $paket_id
        ];
        $data['pageIdentity'] = [
            "title" => 'Buat soal',
            "icon" => 'uil uil-file-landscape-alt'
        ];

        return Inertia::render('Soal/SoalCreate', $data);
    }

    public function createQuiz(Request $request)
    {
        $quiz = Quiz::create([
            'title' => $request->judul_soal, 'quiz_type' => $request->jenis_soal, 'description' => $request->deskripsi, 'user_id' => auth()->user()->id, 'paket_id' => $request->paket_id, 'total_time' => $request->total_time, 'points_per_question' => $request->point_per_question
        ]);

        return to_route('soal.create', $quiz->id);
    }

    public function createQuestion(Request $request)
    {
        // Create a new question
        $question = ModelsQuestion::create([
            'question_text' => $request->question_text,
            'question_type' => $request->question_type,
            'correct_answer' => implode($request->correct_answer),
            'time_in_seconds' => $request->time_in_seconds,
            'image_link' => $request->image_link,
            'quiz_id' => $request->quiz_id
        ]);

        Explanation::create(['question_id' => $question->id, 'explanation_text' => $request->explanation_text]);

        // get paket id


        // Add options to the question
        $options = [
            ['option_text' => $request->option1],
            ['option_text' => $request->option2],
            ['option_text' => $request->option3],
            ['option_text' => $request->option4]
        ];

        $question->options()->createMany($options);

        return to_route('master.produk_paket.detail', $request->paket_id);
    }

    public function detail($quiz_id)
    {
        $q = Quiz::with('user')->where('id', $quiz_id)->first();
        $questions = ModelsQuestion::with(['options', 'explanation'])->where('quiz_id', $quiz_id)->get();
        $data = [
            'quiz' => $q,
            'quizez' => Quiz::with('user')->latest()->take(5)->get(),
            'questions' => $questions,
        ];
        $data['pageIdentity'] = [
            "title" => 'Detail Soal',
            "icon" => 'uil uil-file-landscape-alt'
        ];

        return Inertia::render('Soal/SoalDetail', $data);
    }

    public function editQuiz(Request $request)
    {
        $quiz = Quiz::find($request->quiz_id);
        $quiz->title = $request->title;
        $quiz->save();
    }

    public function deleteQuiz($id, Request $request)
    {
        $quiz = Quiz::find($id);
        $quiz->delete();

        return to_route('master.produk_paket.detail', $request->paket_id);
    }

    public function addQuestion($quiz_id, Request $request)
    {
        // Create a new question
        $question = ModelsQuestion::create([
            'question_text' => $request->question_text,
            'question_type' => $request->question_type,
            'correct_answer' => implode($request->correct_answer),
            'time_in_seconds' => $request->time_in_seconds,
            'image_link' => $request->image_link,
            'quiz_id' => $quiz_id
        ]);

        // get paket id
        Explanation::create(['question_id' => $question->id, 'explanation_text' => $request->explanation_text]);

        // Add options to the question
        $options = [
            ['option_text' => $request->option1],
            ['option_text' => $request->option2],
            ['option_text' => $request->option3],
            ['option_text' => $request->option4]
        ];

        $question->options()->createMany($options);
    }

    public function deleteQuestion($question_id)
    {
        $question = ModelsQuestion::whereId($question_id)->firstOrFail();
        $question->options()->delete();
        $question->delete();
    }
}
