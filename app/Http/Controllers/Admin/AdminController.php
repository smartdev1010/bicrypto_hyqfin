<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminNotification;
use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Composer;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{


    public function __construct(Composer $composer)
    {
        $this->composer = $composer;
        $this->gnl = getGen();
    }

    public function dashboard()
    {
        $page_title = 'Dashboard';
        $gnl = $this->gnl;
        $api = new UpdateController();
        $plat = getPlatforms();

        // user Browsing, Country, Operating Log

        // $user_login_data = UserLogin::whereDate('created_at', '>=', \Carbon\Carbon::now()->subDay(30))->get(['browser', 'os', 'country']);

        // $chart['user_browser_counter'] = $user_login_data->groupBy('browser')->map(function ($item, $key) {
        //     return collect($item)->count();
        // });
        // $chart['user_os_counter'] = $user_login_data->groupBy('os')->map(function ($item, $key) {
        //     return collect($item)->count();
        // });
        // $chart['user_country_counter'] = $user_login_data->groupBy('country')->map(function ($item, $key) {
        //     return collect($item)->count();
        // })->sort()->reverse()->take(5);

        return view('admin.dashboard', compact(
            'page_title',
            'gnl',
            'api',
            // 'latestUser',
            'plat'
        ));
    }


    public function frontend()
    {
        $page_title = "Home";
        return view('admin.setting.frontend.index', compact('page_title'));
    }

    public function frontend_save(Request $request)
    {
        $html = "";
        $path = makeDirectory(public_path() . $request->folder);
        if (!$path) throw new Exception('File could not been created.');
        if (isset($request->startTemplateUrl) && !empty($request->startTemplateUrl)) {
            $html = file_get_contents(public_path() . $request->startTemplateUrl);
        } else if (isset($request->html)) {
            $html = substr($request->html, 0, 1024 * 1024 * 2);
        }
        $result = file_put_contents(public_path() . $request->file, $html);
        if ($result) {
            echo "File saved $request->file";
        } else {
            header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
            echo "Error saving file  $request->file\nPossible causes are missing write permission or incorrect file path!";
        }
    }

    public function frontend_set(Request $request)
    {
        $gnl = getGen();
        $gnl->frontend = $request->file;
        $gnl->save();
        if ($gnl->save()) {
            echo "Frontend set to $request->file";
        } else {
            header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
            echo "Error setting file  $request->file\nPossible causes are missing write permission or incorrect file path!";
        }
    }

    public function sanitizeFileName($file)
    {
        //sanitize, remove double dot .. and remove get parameters if any
        $file = __DIR__ . '/' . preg_replace('@\?.*$@', '', preg_replace('@\.{2,}@', '', preg_replace('@[^\/\\a-zA-Z0-9\-\._]@', '', $file)));
        return $file;
    }

    public function api()
    {
        abort_if(Gate::denies('api_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "API";
        $user = Auth::user();
        return view('api.index', compact('page_title', 'user'));
    }

    public function clean()
    {
        \Illuminate\Support\Facades\Artisan::call('optimize:clear');
        $notify[] = ['success', 'System Optimized'];
        return  back()->withNotify($notify);
    }

    public function notifications()
    {
        $notifications = AdminNotification::orderBy('id', 'desc')->with('user')->paginate(getPaginate());
        $page_title = 'Notifications';
        return view('admin.notifications', compact('page_title', 'notifications'));
    }

    public function notifications_clean()
    {
        abort_if(Gate::denies('notifications_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $notifications = AdminNotification::get();
        foreach ($notifications as $notification) {
            $notification->delete();
        }
        $notify[] = ['success', 'Notifications removed successfully'];
        return back()->withNotify($notify);
    }

    public function notificationRead($id)
    {
        $notification = AdminNotification::findOrFail($id);
        $notification->read_status = 1;
        $notification->save();
        return redirect($notification->click_url);
    }

    public function sidebar_admin()
    {
        abort_if(Gate::denies('admin_sidebar_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Admin Sidebar Menu Manager";
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $sidebars = arrayToObject(json_decode($json, true)['admin']);
        $type = 'admin';
        return view('admin.setting.sidebar', compact('page_title', 'sidebars', 'type'));
    }

    public function sidebar_user()
    {
        abort_if(Gate::denies('user_sidebar_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "User Sidebar Menu Manager";
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $sidebars = arrayToObject(json_decode($json, true)['user']);
        $type = 'user';
        return view('admin.setting.sidebar', compact('page_title', 'sidebars', 'type'));
    }

    public function sidebar_edit($type, $id)
    {
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $sidebar = arrayToObject(json_decode($json, true)[$type][$id]);
        $page_title = "Sidebar Edit";
        $permissions = Permission::select('id', 'title', 'code')->get();
        return view('admin.setting.sidebar_edit', compact('page_title', 'sidebar', 'id', 'permissions', 'type'));
    }

    public function sidebar_update(Request $request, $type)
    {
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $datas = json_decode($json, true);
        $datas[$type][$request->id]['name'] = $request->name;
        $datas[$type][$request->id]['icon'] = str_replace("bi bi-", "", $request->icon);
        $datas[$type][$request->id]['permission'] = $request->permission;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $datas[$type][$request->id]['status'] = $request->status;

        $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
        file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

        $notify[] = ['success', 'Updated Successfully'];
        return back()->withNotify($notify);
    }

    public function sidebar_activate(Request $request, $type)
    {
        try {
            $json = file_get_contents(resource_path('data/sidebar.json'));
            $datas = json_decode($json, true);
            $datas[$type][$request->id]['status'] = 1;
            $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
            file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

            $notify[] = ['success', 'Activated Successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function sidebar_deactivate(Request $request, $type)
    {
        try {
            $json = file_get_contents(resource_path('data/sidebar.json'));
            $datas = json_decode($json, true);
            $datas[$type][$request->id]['status'] = 0;
            $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
            file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

            $notify[] = ['success', 'Deactivated Successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }


    public function sidebar_submenu_edit($type, $id, $submenu_id)
    {
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $sidebar = arrayToObject(json_decode($json, true)[$type][$id]['submenu'][$submenu_id]);
        $page_title = "Sidebar Edit";
        $permissions = Permission::select('id', 'title', 'code')->get();
        return view('admin.setting.sidebar_submenu_edit', compact('page_title', 'sidebar', 'id', 'submenu_id', 'permissions', 'type'));
    }

    public function sidebar_submenu_update(Request $request, $type,  $id, $submenu_id)
    {
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $datas = json_decode($json, true);
        $datas[$type][$id]['submenu'][$request->id]['name'] = $request->name;
        $datas[$type][$id]['submenu'][$request->id]['icon'] = str_replace("bi bi-", "", $request->icon);
        $datas[$type][$id]['submenu'][$request->id]['permission'] = $request->permission;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $datas[$type][$id]['submenu'][$request->id]['status'] = $request->status;
        $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
        file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

        $notify[] = ['success', 'Updated Successfully'];
        return back()->withNotify($notify);
    }

    public function sidebar_submenu_activate($type,  $id, $submenu_id)
    {
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $datas = json_decode($json, true);
        $datas[$type][$id]['submenu'][$submenu_id]['status'] = 1;
        $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
        file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

        $notify[] = ['success', 'Activated Successfully'];
        return back()->withNotify($notify);
    }

    public function sidebar_submenu_deactivate($type,  $id, $submenu_id)
    {
        $json = file_get_contents(resource_path('data/sidebar.json'));
        $datas = json_decode($json, true);
        $datas[$type][$id]['submenu'][$submenu_id]['status'] = 0;
        $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
        file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

        $notify[] = ['success', 'Deactivated Successfully'];
        return back()->withNotify($notify);
    }

    public function remove_install_file()
    {
        File::delete(public_path() . '/install/index.php');
        $notify[] = ['success', 'File removed successfully'];
        return back()->withNotify($notify);
    }
}
