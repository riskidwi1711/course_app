<?php
$menu = [
    [
        'section' => 'DASHBOARD',
        'title' => 'Home',
        'icon' => 'uil-home-alt',
        'permission' => 'admin_home',
        'url' => '/dashboard'
    ],
    [
        'section' => 'DATA',
        'title' => 'Master',
        'icon' => 'uil-database',
        'permission' => 'master',
        'url' => '#',
        'sub' => [
            [
                'title' => 'Menu',
                'icon' => 'uil uil-package',
                'permission' => 'package',
                'url' => '/dashboard/master/paket'
            ],
            [
                'title' => 'Paket',
                'icon' => 'uil uil-package',
                'permission' => 'package',
                'url' => '/dashboard/master/produk_paket'
            ],
            [
                'title' => 'Kategori Paket',
                'icon' => 'uil uil-package',
                'permission' => 'package',
                'url' => '/dashboard/master/paket_kategori'
            ]
        ],
    ],
    [
        'section' => 'DATA',
        'title' => 'menu_paket',
        'icon' => 'uil-package',
        'permission' => 'master',
        'url' => '#',
        'sub' => 'paket'
    ],
    [
        'section' => 'KEUANGAN',
        'title' => 'Transaksi',
        'icon' => 'uil-money-withdraw',
        'permission' => 'admin_home',
        'url' => '/dashboard/admin/finance/transactions'
    ],
    [
        'section' => 'UTILITY',
        'title' => 'Settings',
        'icon' => 'uil-cog',
        'permission' => 'setting',
        'url' => '#',
        'sub' => [
            [
                'title' => 'Roles & Permissions',
                'icon' => 'bi-icon-home',
                'permission' => 'role',
                'url' => '/dashboard/settings/roles&permissions'
            ],
            [
                'title' => 'Profile',
                'icon' => 'bi-icon-home',
                'permission' => 'profile',
                'url' => '/dashboard/settings/profile'
            ],
            [
                'title' => 'Web Content',
                'icon' => 'bi-icon-home',
                'permission' => 'webcontent',
                'url' => '/dashboard/settings/web-content'
            ]
        ]
    ],

    // student_menu

    [
        'section' => 'DASHBOARD',
        'title' => 'Home',
        'icon' => 'uil-home-alt',
        'permission' => 'user_home',
        'url' => '/dashboard/student'
    ],
    [
        'section' => 'PUSAT LANGGANAN',
        'title' => 'Beli Paket',
        'icon' => 'uil-store',
        'permission' => 'user_package_market',
        'url' => '#',
        'sub' => 'package_market'
    ],
    'my_package',
    [
        'section' => 'LAINNYA',
        'title' => 'Riwayat Transaksi',
        'icon' => 'uil-money-insert',
        'permission' => 'user_profile',
        'url' => '/dashboard/student/transaction_history',
    ],
    [
        'section' => 'LAINNYA',
        'title' => 'Profil Saya',
        'icon' => 'uil-user',
        'permission' => 'user_profile',
        'url' => '/dashboard/student/profile',
    ]

];


return $menu;
