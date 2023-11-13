<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PaketController;
use App\Http\Controllers\PaketKategoriController;
use App\Http\Controllers\ProdukPaketController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RolesAndPermissions;
use App\Http\Controllers\SoalController;
use App\Http\Controllers\WebContentController;
use App\Models\PaketProduct;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Symfony\Component\HttpKernel\Profiler\Profile;

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
            // resource
            Route::get('/', [PaketController::class, 'index'])->name('master.paket');
            Route::post('/create', [PaketController::class, 'store'])->name('master.paket.create');

            //url param
            Route::delete('/delete/{id}', [PaketController::class, 'destroy'])->name('master.paket.delete');
        });
        // product
        Route::group(['prefix' => 'produk_paket'], function () {
            Route::get('/', [ProdukPaketController::class, 'index'])->name('master.produk_paket');
            Route::post('/create', [ProdukPaketController::class, 'store'])->name('master.produk_paket.create');

            //url param
            Route::delete('/delete/{id}', [ProdukPaketController::class, 'destroy'])->name('master.produk_paket.delete');
        });

        Route::group(['prefix' => 'paket_kategori'], function () {
            Route::get('/', [PaketKategoriController::class, 'index'])->name('master.paket_kategori');
            Route::post('/create', [PaketKategoriController::class, 'store'])->name('master.paket_kategori.create');

            //url param
            Route::delete('/delete/{id}', [PaketKategoriController::class, 'destroy'])->name('master.paket.delete');
        });
    });

    // paket
    Route::group(['prefix' => 'menu_paket'], function () {

        Route::get('/source/{type}', [PaketController::class, 'paketPage'])->name('master.menu_paket');
        Route::get('/detail/{id}', [ProdukPaketController::class, 'detail'])->name('master.produk_paket.detail');
    });

    // soal
    Route::group(['prefix' => 'soal'], function () {
        Route::get('/', [SoalController::class, 'index'])->name('soal');
        Route::get('/create', [SoalController::class, 'create'])->name('soal.create');
        Route::get('/delete/{id}', [SoalController::class, 'destroy'])->name('soal.delete');
        Route::get('/detail/{id}', [SoalController::class, 'detail'])->name('soal.detail');
    });

    Route::post('/gggggg', [ProdukPaketController::class, 'addVideo'])->name('test.post');
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
