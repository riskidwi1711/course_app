<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Paket;
use App\Models\PaketProduct;
use App\Models\PaketProductCategory;
use App\Models\Quiz;
use App\Models\User;
use App\Models\UserAnswer;
use App\Models\UserQuizResult;
use App\Traits\HasPermission;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StudentController extends Controller
{
    use HasPermission;
    public $page;

    public function __construct()
    {
        $this->page = 'user_home';
    }

    public function showHome()
    {
        $this->validateuser('view');
        $userId = auth()->user()->id;
        $user = User::with('subscriptions')->find($userId);

        $data = [
            'user_overview' => $user->overview,
            'pageIdentity' => [
                "title" => 'Dashboard',
                "icon" => 'uil uil-home-alt'
            ],
        ];

        return Inertia::render('Student/Home/ShowHome',  $data);
    }

    public function showPaketMenu($slug)
    {
        $this->page = 'langganan';
        $this->validateuser('view');
        $type = $slug;
        $data = [
            "page" => $type,
            "data" => []
        ];


        if ($type == 'paket_skd') {
            $package = Paket::where('slug', $type)->first();
            $paket_id = Paket::where('slug', $type)->first()->id;
            $skd_produk = PaketProduct::with('features')
                ->leftJoin('subscriptions', function ($join) use ($paket_id) {
                    $join->on('paket_products.id', '=', 'subscriptions.paket_id')
                        ->where('subscriptions.user_id', '=', Auth::id());
                })
                ->select('paket_products.*', DB::raw('IF(subscriptions.user_id IS NOT NULL, true, false) as is_subscribed'))
                ->where('paket_products.paket_id', $paket_id)
                ->get();
            $paket = Paket::all();
            $category = [];
            $data['data'] = [
                "paket" => $skd_produk,
                "additional" => [
                    "is_categorized" => $package->is_categorized,
                    "paket" => $paket,
                    "category" => $category
                ]
            ];
        } elseif ($type == 'paket_skb') {
            $package = Paket::where('slug', $type)->first();
            $paket_id = Paket::where('slug', $type)->first()->id;
            $skb_produk = PaketProduct::with('features')
                ->leftJoin('subscriptions', function ($join) use ($paket_id) {
                    $join->on('paket_products.id', '=', 'subscriptions.paket_id')
                        ->where('subscriptions.user_id', '=', Auth::id());
                })
                ->select('paket_products.*', DB::raw('IF(subscriptions.user_id IS NOT NULL, true, false) as is_subscribed'))
                ->where('paket_products.paket_id', $paket_id)
                ->get();
            $paket = Paket::all();
            $category = PaketProductCategory::with('paket')->Where('paket_id', $paket_id)->get();
            $data['data'] = [
                "paket" => $skb_produk,
                "additional" => [
                    "is_categorized" => $package->is_categorized,
                    "paket" => $paket,
                    "category" => $category
                ]
            ];
        } elseif ($type == 'paket_pppk') {
            $package = Paket::where('slug', $type)->first();
            $paket_id = Paket::where('slug', $type)->first()->id;
            $skb_produk = PaketProduct::with('features')
                ->leftJoin('subscriptions', function ($join) use ($paket_id) {
                    $join->on('paket_products.id', '=', 'subscriptions.paket_id')
                        ->where('subscriptions.user_id', '=', Auth::id());
                })
                ->select('paket_products.*', DB::raw('IF(subscriptions.user_id IS NOT NULL, true, false) as is_subscribed'))
                ->where('paket_products.paket_id', $paket_id)
                ->get();
            $paket = Paket::all();
            $category = PaketProductCategory::Where('paket_id', $paket_id)->get();
            $data['data'] = [
                "paket" => $skb_produk,
                "additional" => [
                    "is_categorized" => $package->is_categorized,
                    "paket" => $paket,
                    "category" => $category
                ]
            ];
        } else {
            $package = Paket::where('slug', $type)->first();
            $paket_id = Paket::where('slug', $type)->first()->id;
            $skb_produk = PaketProduct::with('features')->where('paket_id', $paket_id)->get();
            $paket = Paket::all();
            $category = PaketProductCategory::where('paket_id', $paket_id)->get();
            $data['data'] = [
                "paket" => $skb_produk,
                "additional" => [
                    "is_categorized" => $package->is_categorized,
                    "paket" => $paket,
                    "category" => $category,
                ]
            ];
        }

        $data['pageIdentity'] = [
            "title" => str_replace('_', ' ', $type),
            "title_original" => Paket::where('slug', $type)->get()->pluck('package_name')[0],
            "icon" => 'uil uil-store'
        ];


        return Inertia::render('Student/SubscribeCenter/ShowSubscribeCenter', $data);
    }


    public function showMyPackageDetail($id)
    {
        $paket = PaketProduct::with(['quiz', 'videos', 'materis'])->find($id);
        $results = UserQuizResult::with(['quiz', 'userAnswers'])->where('user_id', auth()->user()->id)->get();
        $data['pageIdentity'] = [
            "title" => $paket->title,
            "title_original" => $paket->title,
            "icon" => 'uil uil-backpack'
        ];
        $data['paket'] = $paket;
        $data['results'] = $results;
        return Inertia::render('Student/MyPackage/ShowMyPackage', $data);
    }

    public function runQuiz($quiz_id)
    {

        $quiz = Quiz::with('questions')->find($quiz_id);
        $data['pageIdentity'] = [
            "title" => $quiz->title,
            "title_original" => $quiz->title,
            "icon" => 'uil uil-backpack'
        ];
        $data['quiz'] = $quiz;
        return Inertia::render('Student/MyPackage/Page/StartQuiz', $data);
    }

    public function startQuiz($quiz_id)
    {
        // Cari hasil kuis pengguna untuk kuis tertentu
        $quizResult = UserQuizResult::where('user_id',  Auth::user()->id)
            ->where('quiz_id', $quiz_id)
            ->first();

        // Jika hasil kuis belum ada, buat baru; jika sudah ada, perbarui skor
        if (!$quizResult) {
            $quizResult = UserQuizResult::create([
                'user_id' => Auth::user()->id,
                'quiz_id' => $quiz_id,
                'score' => 0,
                'start_time' => Carbon::now()
            ]);
        } else {
            $quizResult->update(['start_time' => Carbon::now()]);
        }
    }

    public function quizResults($paket_id, Request $request)
    {
        $paket = PaketProduct::with(['quiz', 'videos', 'materis'])->find($paket_id);
        $results = UserQuizResult::with(['quiz', 'userAnswers'])->where('user_id', auth()->user()->id)->get();
        $data['pageIdentity'] = [
            "title" => $paket->title,
            "title_original" => $paket->title,
            "icon" => 'uil uil-backpack'
        ];
        $data['paket'] = $paket;
        $data['results'] = $results;
        $data['page_state'] = ["current_tab" => 4];
        return Inertia::render('Student/MyPackage/ShowMyPackage', $data);
    }

    public function storeAnswer($quiz_id, Request $request)
    {

        // Cari hasil kuis pengguna untuk kuis tertentu
        $quizResult = UserQuizResult::where('user_id',  Auth::user()->id)
            ->where('quiz_id', $quiz_id)
            ->first();

        // Jika hasil kuis belum ada, buat baru; jika sudah ada, perbarui skor
        if (!$quizResult) {
            $quizResult = UserQuizResult::create([
                'user_id' => Auth::user()->id,
                'quiz_id' => $quiz_id,
                'score' => 0,
            ]);
        }

        // Ambil data kuis untuk mendapatkan informasi skor
        $quiz = Quiz::find($quiz_id);

        // Hitung skor berdasarkan jawaban yang benar
        $score = $quizResult->score;
        $question = $quiz->questions()->find($request->question_id);

        // Cek apakah sudah menjawab pertanyaan
        $userAnswer = UserAnswer::where('question_id', $request->question_id)
            ->where('result_id', $quizResult->id)
            ->first();

        if ($userAnswer) {
            $userAnswer->update(['repeat_answer' => true]);
            if ($userAnswer->is_correct) {
                if ($question->correct_answer != $request->answer) {
                    $score -= $quiz->points_per_question;
                }
            } else {
                if ($question->correct_answer == $request->answer) {
                    $score += $quiz->points_per_question;
                }
            }
        } else {
            if ($question->correct_answer == $request->answer) {
                $score += $quiz->points_per_question;
            }
        }

        // Simpan jawaban pengguna ke dalam tabel user_answers
        UserAnswer::updateOrCreate(['question_id' => $request->question_id, 'result_id' => $quizResult->id], [
            'result_id' => $quizResult->id,
            'question_id' => $request->question_id,
            'selected_answer' => $request->answer,
            'is_correct' => $question->correct_answer == $request->answer
        ]);

        // Perbarui skor hasil kuis di tabel user_quiz_results
        $quizResult->update(['score' => $score]);
    }

    public function profile()
    {
        $this->page = 'user_profile';
        $this->validateuser('view');
        $userId = auth()->user()->id;
        $user = User::with('subscriptions')->find($userId);

        $data = [
            'user_overview' => $user->overview,
            'user_subscription' => $user->subscriptions,
            'pageIdentity' => [
                "title" => 'Profil Saya',
                "icon" => 'uil uil-user'
            ],
        ];

        return Inertia::render('Student/MyProfile/ShowMyProfile',  $data);
    }

    public function transactionHistory()
    {
        $this->page = 'user_profile';
        $this->validateuser('view');
        $userId = auth()->user()->id;
        $user = User::with('subscriptions')->find($userId);

        $data = [
            'user_overview' => $user->overview,
            'user_transactions' => $user->transactions,
            'pageIdentity' => [
                "title" => 'Riwayat Transaksi',
                "icon" => 'uil uil-money-insert'
            ],
        ];

        return Inertia::render('Student/TransactionHistory/ShowTransactionHistory',  $data);
    }

    public function myPackage($paket_id)
    {
        $this->page = 'user_profile';
        $this->validateuser('view');
        $userId = auth()->user()->id;
        $user = User::with('subscriptions')->find($userId);

        $data = [
            'user_overview' => $user->overview,
            'user_transactions' => $user->transactions,
            'pageIdentity' => [
                "title" => 'Riwayat Transaksi',
                "icon" => 'uil uil-money-alt'
            ],
        ];

        return Inertia::render('Student/TransactionHistory/ShowTransactionHistory',  $data);
    }
}
