<?php

use App\Models\Paket;

if (!function_exists('render_menu')) {
    function render_menu($user)
    {
        $renderedMenu = [];
        if ($user) {
            foreach (config('sidebar') as $key => $val) {
                $permission_lower = strtolower($val['permission']);
                $permission_lower = $permission_lower . "-view";
                if ($user->can($permission_lower)) {
                    $submenu = [];
                    if (isset($val['sub'])) {
                        if (is_array($val['sub'])) {
                            foreach ($val['sub'] as $k => $v) {
                                $sub_permission_lower = strtolower($v['permission']);
                                $sub_permission_lower = $sub_permission_lower . "-view";
                                if ($user->can($sub_permission_lower)) {
                                    $submenu[] = $v;
                                }
                            }

                            $val['sub'] = $submenu;
                        } elseif ($val['sub'] == 'paket') {
                            $val['sub'] = fetch_paket();
                        }
                    }
                    $renderedMenu[] = $val;
                }
            }
        }
        return $renderedMenu;
    }
}

if (!function_exists('fetch_paket')) {
    function fetch_paket()
    {
        $paket = Paket::all();
        $menuitem = [];

        foreach ($paket as $key => $value) {
            if ($value->is_active == 'T') {
                $menuitem[$key]['title'] = $value->package_name;
                $menuitem[$key]['slug'] = $value->slug;
                $menuitem[$key]['icon'] = 'uil uil-package';
                $menuitem[$key]['permission'] = 'package';
                $menuitem[$key]['url'] = '/dashboard/' . $value->url;
            }
        }

        return $menuitem;
    }
}
