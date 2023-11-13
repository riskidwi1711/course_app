<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 50%;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>

<body>
    <form action="/roles" method="post">
        @csrf
        <input type="text" name="type" value="create_role" hidden>
        <input type="text" name="role" placeholder="nama role" required>
        <button type="Simpan">Simpan</button>
    </form>
    <br>
    <br>
    <form action="/roles" method="POST">
        @csrf
        <input type="text" name="type" value="create_permission" hidden>
        <input type="text" name="permission" placeholder="nama permission" required>
        <button type="Simpan">Simpan</button>
    </form>
    <br>
    <br>
    <form action="/roles" method="POST">
        @csrf
        <input type="text" name="type" value="assign_permission" hidden>
        <label for="">Role</label>
        <select name="role_id" id="">
            @foreach ($roles as $item)
            <option value="{{$item->id}}">{{$item->name}}</option>
            @endforeach
        </select>
        <label for="">Permission</label>
        <select name="permission_id" id="">
            @foreach ($permissions as $item)
            <option value="{{$item->id}}">{{$item->name}}</option>
            @endforeach
        </select>
        <button type="Simpan">Simpan</button>
    </form>
    <br>
    <br>
    <form action="/roles" method="POST">
        @csrf
        <input type="text" name="type" value="assign_role" hidden>
        <label for="">User</label>
        <select name="user_id" id="">
            @foreach ($users as $item)
            <option value="{{$item->id}}">{{$item->name}}</option>
            @endforeach
        </select>
        <label for="">Role</label>
        <select name="role_id" id="">
            @foreach ($roles as $item)
            <option value="{{$item->id}}">{{$item->name}}</option>
            @endforeach
        </select>
        <button type="Simpan">Simpan</button>
    </form>
    <br>
    <br>
    <table>
        <tr>
            <td>Role</td>
            <td>Permissions</td>
        </tr>
        @foreach ($roles_with_permissions as $role)
        <tr>
            <td>{{$role->name}}</td>
            <td>@foreach ($role->permissions as $key => $permission)
                @if (count($role->permissions) > 1)
                @if ($key == (count($role->permissions) -1))
                {{$permission->name}}
                @else
                {{$permission->name}},
                @endif
                @else
                {{$permission->name}}
                @endif
                @endforeach</td>
        </tr>
        @endforeach

    </table>
    <br>
    <br>
    <table>
        <tr>
            <td>User</td>
            <td>Role</td>
        </tr>
        @foreach ($users_with_roles as $user)
        <tr>
            <td>{{$user->name}}</td>
            <td>@foreach ($user->roles as $role)
                {{$role->name}}
                @endforeach</td>
        </tr>
        @endforeach

    </table>
</body>

</html>