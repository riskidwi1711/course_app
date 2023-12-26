<?php

use App\Models\Paket;
use App\Models\Subscription;
use App\Models\User;

if (!function_exists('render_menu')) {
    function render_menu($user)
    {
        $renderedMenu = [];
        if ($user) {
            foreach (config('sidebar') as $key => $val) {
                
                if ($val == 'my_package') {
                    foreach (fetch_my_paket() as $paket) {
                        $permission_lower = strtolower($paket['permission']);
                        $permission_lower = $permission_lower . "-view";
                        if ($user->can($permission_lower)) {
                            $renderedMenu[] = $paket;
                        }
                    }
                } else {
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
                            } elseif ($val['sub'] == 'package_market') {
                                $val['sub'] = fetch_paket_market();
                            } elseif ($val['sub'] == 'my_package') {
                                $val['sub'] = fetch_my_paket();
                            }
                        }
                        $renderedMenu[] = $val;
                    }
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

if (!function_exists('fetch_paket_market')) {
    function fetch_paket_market()
    {
        $paket = Paket::all();
        $menuitem = [];

        foreach ($paket as $key => $value) {
            if ($value->is_active == 'T') {
                $menuitem[$key]['title'] = $value->package_name;
                $menuitem[$key]['slug'] = $value->slug;
                $menuitem[$key]['icon'] = 'uil uil-package';
                $menuitem[$key]['permission'] = 'package';
                $menuitem[$key]['url'] = '/dashboard/student/' . $value->url;
            }
        }

        return $menuitem;
    }
}

if (!function_exists('fetch_my_paket')) {
    function fetch_my_paket()
    {
        $paket = Paket::all();
        $package = [];
        $myId = auth()->user()->id;
        $user = User::with('subscriptions.paket')->find($myId);

        if ($user) {
            $subscriptions = $user->subscriptions;

            foreach ($subscriptions as $subscription) {
                $package[] = $subscription->paket;
            }
        }
        $menuitem = [];

        foreach ($paket as $key => $value) {
            if ($value->is_active == 'T') {
                $menuitem[$key]['section'] = 'PAKET SAYA';
                $menuitem[$key]['title'] = $value->package_name;
                $menuitem[$key]['slug'] = $value->slug;
                $menuitem[$key]['icon'] = 'uil uil-backpack';
                $menuitem[$key]['permission'] = 'subscribed_package';
                if (count($package) > 0) {
                    foreach ($package as $pack) {
                        if ($value->package_name === $pack->paket_name) {
                            $package_sub = [
                                "title" => $pack->title,
                                "slug" => str_replace(" ", "_", $pack->title),
                                "icon" => 'uil uil-backpack',
                                "permission" => 'subscribed_package',
                                "url" => '/dashboard/student/mine/source/paket/' . $pack->id
                            ];
                            $menuitem[$key]['sub'][] = $package_sub;
                        } else {
                            $menuitem[$key]['url'] = '/dashboard/student/mine/' . $value->url;
                        }
                    }
                }
            }
        }
        return $menuitem;
    }
}
