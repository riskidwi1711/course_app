<?php
$menu = [
    [
        'section'=>'MAIN',
        'title' => 'Home',
        'icon' => 'uil-home-alt',
        'permission' => 'home',
        'url' => '/dashboard'
    ],
    [
        'section'=>'CREATION',
        'title' => 'Buat Soal',
        'icon' => 'uil-file-landscape-alt',
        'permission' => 'home',
        'url' => '/dashboard/soal'
    ],
    [
        'section'=>'DATA',
        'title' => 'Master',
        'icon' => 'uil-database',
        'permission' => 'master',
        'url' => '#',
        'sub' => [
            [
                'title' => 'Paket',
                'icon' => 'uil uil-package',
                'permission' => 'package',
                'url' => '/dashboard/master/paket'
            ],
            // [
            //     'title' => 'Paket Produk',
            //     'icon' => 'uil uil-package',
            //     'permission' => 'package',
            //     'url' => '/dashboard/master/produk_paket'
            // ],
            // [
            //     'title' => 'Paket Produk Kategori',
            //     'icon' => 'uil uil-package',
            //     'permission' => 'package',
            //     'url' => '/dashboard/master/paket_kategori'
            // ]
        ],
    ],
    [
        'section'=>'DATA',
        'title' => 'menu_paket',
        'icon' => 'uil-package',
        'permission' => 'master',
        'url' => '#',
        'sub' => 'paket'
    ],
    [
        'section'=>'DATA',
        'title' => 'paket_item',
        'icon' => 'uil-parcel',
        'permission' => 'paket_item',
        'url' => '#',
        'sub' => [
            [
                'title' => 'Soal',
                'icon' => 'uil uil-package',
                'permission' => 'soal',
                'url' => '/dashboard/paket-item/soal'
            ],
            [
                'title' => 'Materi',
                'icon' => 'uil uil-package',
                'permission' => 'materi',
                'url' => '/dashboard/paket-item/materi'
            ],
            [
                'title' => 'Video',
                'icon' => 'uil uil-package',
                'permission' => 'video',
                'url' => '/dashboard/paket-item/video'
            ],
            [
                'title' => 'Tryout',
                'icon' => 'uil uil-package',
                'permission' => 'tryout',
                'url' => '/dashboard/paket-item/tryout'
            ]
        ]
    ],
    [
        'section'=>'UTILITY',
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
    ]
];

return $menu;
