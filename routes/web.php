<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\PaketController;
use App\Http\Controllers\PaketKategoriController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProdukPaketController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\RolesAndPermissions;
use App\Http\Controllers\SoalController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\WebContentController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('root');

Route::get('/login/{provider}', function ($provider) {
    return Socialite::driver($provider)->redirect();
});

Route::get('/login/{provider}/callback', function ($provider) {
    $user = Socialite::driver($provider)->user();

    dd($user);
    return redirect('/dashboard');
});
Route::get('/callback/{provider}/delete_data', function ($provider) {
    return redirect('/dashboard');
});


Route::group(['prefix' => 'dashboard', 'middleware' => ['auth', 'verified']], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    //settings
    Route::group(['prefix' => 'settings'], function () {
        // permissions
        Route::get('/roles&permissions', [RolesAndPermissions::class, 'index'])->name('roles&permissions');
        Route::post('/roles&permissions/change-role', [RolesAndPermissions::class, 'changeRole'])->name('roles&permissions.change_role');
        Route::post('/roles&permissions/change-permission', [RolesAndPermissions::class, 'changePermission'])->name('roles&permissions.change_permission');
        // webcontent
        Route::get('/web-content', [WebContentController::class, 'index'])->name('webcontent');
        // profile
        Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
    });
    // masters
    Route::group(['prefix' => 'master'], function () {
        // paket
        Route::group(['prefix' => 'paket'], function () {
            Route::get('/', [PaketController::class, 'index'])->name('master.paket');
            Route::post('/create', [PaketController::class, 'store'])->name('master.paket.create');
            Route::delete('/delete/{id}', [PaketController::class, 'destroy'])->name('master.paket.delete');
        });

        // product
        Route::group(['prefix' => 'produk_paket'], function () {
            Route::get('/', [ProdukPaketController::class, 'index'])->name('master.produk_paket');
            Route::post('/create', [ProdukPaketController::class, 'store'])->name('master.produk_paket.create');
            Route::delete('/delete/{id}', [ProdukPaketController::class, 'destroy'])->name('master.produk_paket.delete');
        });

        Route::group(['prefix' => 'paket_kategori'], function () {
            Route::get('/', [PaketKategoriController::class, 'index'])->name('master.paket_kategori');
            Route::post('/create', [PaketKategoriController::class, 'store'])->name('master.paket_kategori.create');
            Route::delete('/delete/{id}', [PaketKategoriController::class, 'destroy'])->name('master.paket_kategori.delete');
        });
    });


    Route::group(['prefix' => 'menu_paket'], function () {
        Route::get('/source/{type}', [PaketController::class, 'paketPage'])->name('master.menu_paket');
        Route::get('/detail/{id}', [ProdukPaketController::class, 'detail'])->name('master.produk_paket.detail');
    });

    // soal
    Route::group(['prefix' => 'soal'], function () {
        Route::get('/', [QuizController::class, 'index'])->name('soal');
        Route::post('/quiz_create', [QuizController::class, 'createQuiz'])->name('soal.create_quiz');
        Route::get('/create/{id}', [QuizController::class, 'create'])->name('soal.create');
        Route::post('/store', [QuizController::class, 'createQuestion'])->name('soal.store');
        Route::get('/delete/{id}', [SoalController::class, 'destroy'])->name('soal.delete');
        Route::get('/detail/{id}', [SoalController::class, 'detail'])->name('soal.detail');
        //detail
        Route::get('/quiz_detail/{quiz_id}', [QuizController::class, 'detail'])->name('soal.detail_quiz');
        Route::post('/quiz_edit', [QuizController::class, 'editQuiz'])->name('soal.edit_quiz');
        Route::post('/delete_quiz/{id}', [QuizController::class, 'deleteQuiz'])->name('soal.delete_quiz');
        Route::post('/quiz_add_question/{quiz_id}', [QuizController::class, 'addQuestion'])->name('soal.add_question');
        Route::post('/quiz_delete_question/{question_id}', [QuizController::class, 'deleteQuestion'])->name('soal.delete_question');
    });

    //video
    Route::group(['prefix' => 'video'], function () {
        Route::post('/add_video', [VideoController::class, 'store'])->name('video.add_video');
        Route::delete('/delete/{id}', [VideoController::class, 'destroy'])->name('video.delete_video');
    });

    Route::group(['prefix' => 'materi'], function () {
        Route::get('/detail/{id}', [MateriController::class, 'detail'])->name('materi.detail');
        Route::post('/upload_materi', [MateriController::class, 'store'])->name('materi.upload_materi');
        Route::delete('/delete/{id}', [MateriController::class, 'destroy'])->name('materi.delete_materi');
    });


    // student_route
    Route::group(['prefix' => 'student'], function () {
        Route::get('/', [StudentController::class, 'showHome'])->name('student.show_home');
        Route::get('/getMyCart', [StudentController::class, 'getMyCart'])->name('student.get_cart');
        Route::get('/profile', [StudentController::class, 'profile'])->name('student.show_profile');
        Route::get('/transaction_history', [StudentController::class, 'transactionHistory'])->name('student.show_transaction_history');


        Route::group(['prefix' => 'menu_paket'], function () {
            Route::get('/source/{slug}', [StudentController::class, 'showPaketMenu'])->name('student.show_menu_paket');
        });

        Route::group(['prefix' => 'mine'], function () {
            Route::get('/source/paket/{id}', [StudentController::class, 'showMyPackageDetail'])->name('student.show_my_pake_detail');
            Route::get('/source/paket/quiz/start_quiz/{quiz_id}', [StudentController::class, 'runQuiz'])->name('student.show_my_pake_detail.start_quiz');
            Route::post('/source/paket/quiz/submit_quiz/{quiz_id}', [StudentController::class, 'submitQuiz'])->name('student.show_my_pake_detail.submit_quiz');
            Route::post('/source/paket/quiz/store_answer/{quiz_id}', [StudentController::class, 'storeAnswer'])->name('student.show_my_pake_detail.store_answer');
            Route::get('/source/paket/quiz/results/{paket_id}', [StudentController::class, 'quizResults'])->name('student.show_my_pake_detail.quiz_results');
        });

        Route::group(['prefix' => 'transaction'], function () {
            Route::post('/', [TransactionController::class, 'store'])->name('student.transaction');
            Route::post('/validate_voucher/{code}', [TransactionController::class, 'checkVoucher'])->name('student.transaction.check_voucher');
        });
    });
});









//testing
Route::get('/user_perm', function () {

    $roles = Role::all();
    $permissions = Permission::all();
    $rolesWithPermissions = Role::with('permissions')->get();
    $usersWithRoles = User::with('roles')->get();
    $users = User::all();

    $data = [
        "roles" => $roles,
        "permissions" => $permissions,
        "roles_with_permissions" => $rolesWithPermissions,
        "users_with_roles" => $usersWithRoles,
        "users" => $users
    ];

    return view('permission', $data);
});

Route::post('/roles', function (Request $request) {
    $type = $request->type;

    if ($request->method() != 'POST') {
        return redirect()->back();
    }

    if ($type == 'create_role') {
        Role::create(['name' => $request->role]);
    } elseif ($type == 'create_permission') {
        Permission::create(['name' => $request->permission]);
    } elseif ($type == 'assign_permission') {
        $role = Role::findById($request->role_id);
        $permission = Permission::findById($request->permission_id);
        $role->givePermissionTo($permission);
    } elseif ($type == 'assign_role') {
        $role = Role::findById($request->role_id);
        $user = User::find($request->user_id);
        $user->syncRoles($role);
    }

    return redirect()->back();
});

require __DIR__ . '/auth.php';
