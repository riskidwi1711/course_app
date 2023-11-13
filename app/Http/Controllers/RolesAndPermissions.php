<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\HasPermission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasPermissions;

class RolesAndPermissions extends Controller
{
    use HasPermission;
    public $page;

    public function __construct()
    {
        $this->page = 'role';
    }

    public function index()
    {
        $this->validateuser('view');
        $data = [
            "users" => User::with('roles')->orderBy('created_at', 'desc')->paginate(10),
            "roles" => Role::all(),
            "permissions" => Permission::all(),
            "rolepermissions" => Role::with('permissions')->get()
        ];
        return Inertia::render('Settings/UsersAndRoles', $data);
    }

    public function changeRole(Request $request)
    {
        $role = $request->role_id;
        $user_id = $request->user_id;
        $user = User::find($user_id);
        $role = Role::findById($role);
        $oldRole = $user->roles[0]->name;

        $user->removeRole($oldRole);

        $user->assignRole($role);

        return to_route('roles&permissions');
    }

    public function changePermission(Request $request)
    {

        $data = $request->all();

        foreach ($data as $role => $permissions) {
            // Get the role instance
            $role = Role::findByName($role);

            // Assign permissions to the role
            $role->syncPermissions($permissions);
        }

        return to_route('roles&permissions');
    }
}
