<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyRoleRequest;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class RolesController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('role_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $page_title = 'Roles';
        $roles = (new Role)->getRoles();
        $permissions = (new Permission)->getPermissions();
        return view('admin.roles.index', compact('roles', 'page_title', 'permissions'));
    }

    public function create()
    {
        abort_if(Gate::denies('role_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $page_title = 'Create Role';
        $permissions = (new Permission)->getPermissions()->pluck('id', 'title', 'code');

        return view('admin.roles.create', compact('permissions', 'page_title'));
    }

    public function store(StoreRoleRequest $request)
    {
        $role = Role::create($request->all());
        $role->permissions()->sync($request->input('permissions', []));
        (new Role)->clearCache();
        $notify[] = ['success', 'Role created successfully'];
        return back()->withNotify($notify);
    }

    public function edit(Role $role)
    {
        abort_if(Gate::denies('role_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $page_title = 'Edit Role';
        $permissions = (new Permission)->getPermissions()->pluck('id', 'title', 'code');

        $role->load('permissions');

        return view('admin.roles.edit', compact('permissions', 'role', 'page_title'));
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->update($request->all());
        $role->permissions()->sync($request->input('permissions', []));
        (new Role)->clearCache();
        return redirect()->route('admin.roles.index');
    }

    public function assign(Request $request)
    {
        try {
            $role = Role::where('id', $request->role_id)->first();
            (new Role)->clearCache();
            $user = User::where('id', $request->id)->first();
            $user->role_id = $role->id;
            $user->roles()->sync($role->id);
            $user->save();
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'danger',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => ucfirst($user->username) . ' role assigned successfully'
            ]
        );
    }

    public function show(Role $role)
    {
        abort_if(Gate::denies('role_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $page_title = 'Show Role';
        $role->load('permissions');

        return view('admin.roles.show', compact('role', 'page_title'));
    }

    public function destroy(Role $role)
    {
        abort_if(Gate::denies('role_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $role->delete();
        (new Role)->clearCache();
        $notify[] = ['success', 'Role removed successfully'];
        return back()->withNotify($notify);
    }

    public function delete(Request $request)
    {
        abort_if(Gate::denies('role_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        try {
            Role::where('id', $request->id)->first()->delete();
            (new Role)->clearCache();
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'danger',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Role deleted successfully'
            ]
        );
    }


    public function massDestroy(MassDestroyRoleRequest $request)
    {
        Role::whereIn('id', request('ids'))->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
