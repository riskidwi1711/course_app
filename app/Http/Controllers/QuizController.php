<?php

namespace App\Http\Controllers;

use App\Models\Explanation;
use App\Models\Option;
use App\Models\Paket;
use App\Models\PaketProduct;
use App\Models\Question as ModelsQuestion;
use App\Models\Quiz;
use App\Question;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class QuizController extends Controller
{

    public function index($paket_id)
    {
        $data = [
            'paket' => Paket::all(),
            'quiz_type' => request()->type,
            'paket_detail' => PaketProduct::with('paket')->where('id', $paket_id)->first(),
            'paket_produk' => PaketProduct::all(),
            'new_questions' => ModelsQuestion::take(5)->get()
        ];
        $data['pageIdentity'] = [
            "title" => 'Buat soal',
            "icon" => 'uil uil-file-landscape-alt'
        ];
        return Inertia::render('Admin/Master/Quiz/Quiz', $data);
    }

    public function createQuiz(Request $request)
    {
        $quiz = Quiz::create([
            'title' => $request->judul_soal, 'quiz_type' => $request->jenis_soal, 'description' => $request->deskripsi, 'user_id' => auth()->user()->id, 'paket_id' => $request->paket_id, 'total_time' => $request->total_time, 'points_per_question' => $request->point_per_question
        ]);

        return to_route('soal.detail_quiz', $quiz->id);
    }

    public function detail($quiz_id)
    {
        $q = Quiz::with('user')->where('id', $quiz_id)->first();
        $questions = ModelsQuestion::with(['options', 'explanation'])->where('quiz_id', $quiz_id)->get();
        $data = [
            'page_id' => 'detail',
            'quiz' => $q,
            'quizez' => Quiz::with('user')->latest()->take(5)->get(),
            'questions' => $questions,
        ];
        $data['pageIdentity'] = [
            "title" => 'Detail Soal',
            "icon" => 'uil uil-file-landscape-alt'
        ];

        return Inertia::render('Admin/Master/Quiz/Quiz', $data);
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

    public function editQuestion(Request $request)
    {
        $question_id = $request->id;
        $question = ModelsQuestion::find($question_id);
        $question->update($request->all());

        $explanation = Explanation::find($request->explanation["id"]);
        $explanation->explanation_text = $request->explanation_text;
        $explanation->save();

        foreach ($request->options as $option) {
            $optionModel = Option::find($option['id']);
            $optionModel->option_text = $option['option_text'];
            $optionModel->save();
        }

        
        $question->save();
    }


    public function deleteQuestion($question_id)
    {
        $question = ModelsQuestion::whereId($question_id)->firstOrFail();
        $question->options()->delete();
        $question->delete();
    }

    public function uploadQuestion(Request $request)
    {
        try {

            // 0 => "Question Text"
            // 1 => "Question Type"
            // 2 => "Option 1"
            // 3 => "Option 2"
            // 4 => "Option 3"
            // 5 => "Option 4"
            // 6 => "Correct Answer"
            // 7 => "Time in seconds"
            // 8 => "Image Link"
            // 9 => "Answer explanation"

            $request->validate([
                'files.*' => 'required|mimes:xls,xlsx',
            ]);

            $file = $request->file('files') or [];
            $quiz_id = $request->quiz_id;
            $data = [];

            if (count($file) > 0) {
                foreach ($file as $key => $value) {
                    $filePath = $value->store('uploads/excel_files', 'public');
                    $data = Excel::toArray([], $filePath);
                }
            }

            foreach ($data as $k => $question) {
                foreach ($question as $k =>  $val) {
                    if ($k > 0) {
                        $question = ModelsQuestion::create([
                            'question_text' => $val[0],
                            'question_type' => $val[1],
                            'correct_answer' => $val[6],
                            'time_in_seconds' => intval($val[7]),
                            'image_link' => $val[8],
                            'quiz_id' => $quiz_id
                        ]);

                        // get paket id
                        Explanation::create(['question_id' => $question->id, 'explanation_text' => $val[9]]);

                        // Add options to the question
                        $options = [
                            ['option_text' => $val[2]],
                            ['option_text' => $val[3]],
                            ['option_text' => $val[4]],
                            ['option_text' => $val[5]]
                        ];

                        $question->options()->createMany($options);
                    }
                }
            }

            return back()->with('success', 'Excel file uploaded successfully');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' => $th->getMessage()]);
        }
    }

    public function downloadTemplate()
    {
        return response()->download(public_path('files/upload_question_format.xlsx'), 'Format Pertanyaan.xlsx');
    }
}
