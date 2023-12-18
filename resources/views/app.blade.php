<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>

    <!-- Stylesheets -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet'>
    <link href={{asset('assets/dashboard/vendor/unicons-2.0.1/css/unicons.css')}} rel='stylesheet'>
    <link href={{asset("assets/dashboard/css/vertical-responsive-menu.min.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/css/style.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/css/responsive.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/css/night-mode.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/css/jquery-steps.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/css/instructor-responsive.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/css/instructor-dashboard.css")}} rel="stylesheet">

    <!-- Vendor Stylesheets -->
    <link href={{asset("assets/dashboard/vendor/fontawesome-free/css/all.min.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/vendor/OwlCarousel/assets/owl.carousel.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/vendor/OwlCarousel/assets/owl.theme.default.min.css")}} rel="stylesheet">
    <link href={{asset("assets/dashboard/vendor/bootstrap/css/bootstrap.min.css")}} rel="stylesheet">
    <link rel="stylesheet" type="text/css" href={{asset("assets/dashboard/vendor/semantic/semantic.min.css")}}>
    <link href={{asset("assets/dashboard/vendor/jquery-ui-1.12.1/jquery-ui.css")}} rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead


</head>

<body class="font-sans antialiased">
    @inertia
    <script src={{asset("assets/dashboard/js/vertical-responsive-menu.min.js")}}></script>
    <script src={{asset("assets/dashboard/js/jquery-3.3.1.min.js")}}></script>
    <script src={{asset("assets/dashboard/vendor/bootstrap/js/bootstrap.bundle.min.js")}}></script>
    <script src={{asset("assets/dashboard/vendor/OwlCarousel/owl.carousel.js")}}></script>
    <script src={{asset("assets/dashboard/vendor/semantic/semantic.min.js")}}></script>
    <script src={{asset("assets/dashboard/js/custom.js")}}></script>
    <script src={{asset("assets/dashboard/js/night-mode.js")}}></script>
    <script src="https://apis.google.com/js/api.js"></script>
</body>

</html>