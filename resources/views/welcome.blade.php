<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Home-3 | Edurock - Education LMS Template</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" type="image/x-icon" href="assets/landing_page/img/favicon.ico">
    <!-- Place favicon.ico in the root directory -->

    <!-- CSS here -->
    <link rel="stylesheet" href={{asset("assets/landing_page/css/bootstrap.min.css")}}>
    <link rel="stylesheet" href={{asset("assets/landing_page/css/animate.min.css")}}>
    <link rel="stylesheet" href={{asset("assets/landing_page/css/aos.min.css")}}>
    <link rel="stylesheet" href={{asset("assets/landing_page/css/magnific-popup.css")}}>
    <link rel="stylesheet" href={{asset("assets/landing_page/css/icofont.min.css")}}>
    <link rel="stylesheet" href={{asset("assets/landing_page/css/slick.css")}}>
    <link rel="stylesheet" href={{asset("../../../cdn.jsdelivr.net/npm/swiper%409/swiper-bundle.min.css")}}>
    <link rel="stylesheet" href={{asset("assets/landing_page/css/style.css")}}>


    <script>
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          document.documentElement.classList.add("is_dark");
        } 
        if (localStorage.getItem("theme-color") === "light") {
          document.documentElement.classList.remove("is_dark");
        } 
    </script>

</head>


<body class="body__wrapper">
    <!-- pre loader area start -->
    <div id="back__preloader">
        <div id="back__circle_loader"></div>
        <div class="back__loader_logo">
            <img src="assets/landing_page/img/pre.png" alt="Preload">
        </div>
    </div>
    </div>
    <!-- pre loader area end -->

    <!-- Dark/Light area start -->
    <div class="mode_switcher my_switcher">
        <button id="light--to-dark-button" class="light align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon dark__mode" viewBox="0 0 512 512">
                <path
                    d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon light__mode" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
                    d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94" />
                <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-miterlimit="10" stroke-width="32" />
            </svg>

            <span class="light__mode">Light</span>
            <span class="dark__mode">Dark</span>
        </button>
    </div>
    <!-- Dark/Light area end -->

    <main class="main_wrapper overflow-hidden">


        <!-- topbar__section__stert -->
        <div class="topbararea">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="topbar__left">
                            <ul>
                                <li>
                                    Call Us: +1 800 123 456 789
                                </li>
                                <li>
                                    - Mail Us: Itcroc@mail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="topbar__right">
                            <div class="topbar__icon">
                                <i class="icofont-location-pin"></i>
                            </div>
                            <div class="topbar__text">
                                <p>684 West College St. Sun City, USA</p>
                            </div>
                            <div class="topbar__list">
                                <ul>
                                    <li>
                                        <a href="#"><i class="icofont-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icofont-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icofont-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icofont-youtube-play"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- topbar__section__end -->


        <!-- headar section start -->
        <header>
            <div class="headerarea headerarea__3 header__sticky header__area">
                <div class="container desktop__menu__wrapper">
                    <div class="row">
                        <div class="col-xl-2 col-lg-2 col-md-6">
                            <div class="headerarea__left">
                                <div class="headerarea__left__logo">

                                    <a href="index.html"><img src="assets/landing_page/img/logo/logo_1.png" alt="logo"></a>
                                </div>

                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 main_menu_wrap">
                            <div class="headerarea__main__menu">
                                <nav>
                                    <ul>


                                        <li class="mega__menu position-static">
                                            <a class="headerarea__has__dropdown" href="index.html">Demos<i
                                                    class="icofont-rounded-down"></i> </a>
                                            <div class="headerarea__submenu mega__menu__wrapper mega__menu__grid__5">

                                                <ul class="nav  tab__button__wrap" id="myTab2" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="single__tab__link active" data-bs-toggle="tab"
                                                            data-bs-target="#projects__light"
                                                            type="button">Light</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="single__tab__link" data-bs-toggle="tab"
                                                            data-bs-target="#projects__dark" type="button">Dark</button>
                                                    </li>
                                                </ul>


                                                <div class="tab-content tab__content__wrapper" id="myTabContent2">
                                                    <div class="tab-pane fade active show" id="projects__light"
                                                        role="tabpanel" aria-labelledby="projects__light">

                                                        <div class="row">

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="index.html">
                                                                        <img src="assets/landing_page/img/mega/home-1.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Default)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-2.html">
                                                                        <img src="assets/landing_page/img/mega/home-2.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Elegant)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-3.html">
                                                                        <img src="assets/landing_page/img/mega/home-3.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Classic)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-4.html">
                                                                        <img src="assets/landing_page/img/mega/home-4.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Classic LMS)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-5.html">
                                                                        <img src="assets/landing_page/img/mega/home-5.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Online Course)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-6.html">
                                                                        <img src="assets/landing_page/img/mega/home-6.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Marketplace)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-7.html">
                                                                        <img src="assets/landing_page/img/mega/home-7.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (University)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-8.html">
                                                                        <img src="assets/landing_page/img/mega/home-8.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (eCommerce)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-9.html">
                                                                        <img src="assets/landing_page/img/mega/home-9.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Kindergarten)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-10.html">
                                                                        <img src="assets/landing_page/img/mega/home-10.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Machine Learning)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>



                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-11.html">
                                                                        <img src="assets/landing_page/img/mega/home-11.png" alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Single Course)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>



                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming.png"
                                                                            alt="Mega Menu 1">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 1</span>
                                                                    </a>
                                                                </div>
                                                            </div>


                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming.png"
                                                                            alt="Mega Menu 2">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 2</span>
                                                                    </a>
                                                                </div>
                                                            </div>


                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming.png"
                                                                            alt="Mega Menu 3">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 3</span>
                                                                    </a>
                                                                </div>
                                                            </div>


                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming.png"
                                                                            alt="Mega Menu 4">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 4</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div class="tab-pane fade" id="projects__dark" role="tabpanel"
                                                        aria-labelledby="projects__dark">

                                                        <div class="row">

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="index-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-1-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Default)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-2-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-2-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Elegant)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-3-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-3-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Classic)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-4-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-4-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Classic LMS)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-5-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-5-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Online Course)</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-6-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-6-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Marketplace)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-7-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-7-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (University)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-8-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-8-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (eCommerce)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-9-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-9-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Kindergarten)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-10-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-10-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Machine Learning)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>

                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="home-11-dark.html">
                                                                        <img src="assets/landing_page/img/mega/home-11-dark.png"
                                                                            alt="Mega Menu">
                                                                        <span class="mega__menu__thumb__title">Home
                                                                            (Single Course)</span>
                                                                    </a>
                                                                    <span class="mega__menu__thumb__label">New</span>
                                                                </div>
                                                            </div>


                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming-dark.png"
                                                                            alt="Mega Menu 1">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 1</span>
                                                                    </a>
                                                                </div>
                                                            </div>


                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming-dark.png"
                                                                            alt="Mega Menu 2">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 2</span>
                                                                    </a>
                                                                </div>
                                                            </div>


                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming-dark.png"
                                                                            alt="Mega Menu 3">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 3</span>
                                                                    </a>
                                                                </div>
                                                            </div>


                                                            <div class="col-3 mega__menu__single__wrap">
                                                                <div class="mega__menu__thumb">
                                                                    <a href="#">
                                                                        <img src="assets/landing_page/img/mega/coming-dark.png"
                                                                            alt="Mega Menu 4">
                                                                        <span class="mega__menu__thumb__title">Layout
                                                                            Coming Soon 4</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </li>

                                        <li class="mega__menu position-static">
                                            <a class="headerarea__has__dropdown" href="about.html">Pages<i
                                                    class="icofont-rounded-down"></i> </a>
                                            <div class="headerarea__submenu mega__menu__wrapper">

                                                <div class="row">
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <h4 class="mega__menu__title"><a href="#">Get Started 1 </a>
                                                        </h4>
                                                        <ul class="mega__menu__item">
                                                            <li><a href="about.html">About <span
                                                                        class="mega__menu__label">Sale
                                                                        Everything</span></a></li>
                                                            <li><a href="about-dark.html">About (Dark)<span
                                                                        class="mega__menu__label new">New</span></a>
                                                            </li>
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog-dark.html">Blog (Dark)</a></li>
                                                            <li><a href="blog-details.html">Blog Details</a></li>
                                                            <li><a href="blog-details-dark.html">Blog Details (Dark)</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <h4 class="mega__menu__title"><a href="#">Get Started 2 </a>
                                                        </h4>
                                                        <ul class="mega__menu__item">
                                                            <li><a href="error.html">Error 404</a></li>
                                                            <li><a href="error-dark.html">Error (Dark)</a></li>
                                                            <li><a href="event-details.html">Event Details</a></li>
                                                            <li><a href="zoom/zoom-meetings.html">Zoom<span
                                                                        class="mega__menu__label">Online Call</span></a>
                                                            </li>
                                                            <li><a href="zoom/zoom-meetings-dark.html">Zoom Meeting
                                                                    (Dark)</a></li>
                                                            <li><a href="zoom/zoom-meeting-details.html">Zoom Meeting
                                                                    Details</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <h4 class="mega__menu__title"><a href="#">Get Started 3</a></h4>
                                                        <ul class="mega__menu__item">
                                                            <li><a href="zoom/zoom-meeting-details-dark.html">Meeting
                                                                    Details (Dark)</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="login-dark.html">Login (Dark)</a></li>
                                                            <li><a href="#">Maintenance</a></li>
                                                            <li><a href="#">Maintenance (Dark)</a></li>
                                                            <li><a href="#">Terms & Condition</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <h4 class="mega__menu__title"><a href="#">Get Started 4</a></h4>
                                                        <ul class="mega__menu__item">
                                                            <li><a href="#">Terms & Condition (Dark)</a></li>
                                                            <li><a href="#">Privacy Policy</a></li>
                                                            <li><a href="#">Privacy Policy (Dark)</a></li>
                                                            <li><a href="#">Success Stories</a></li>
                                                            <li><a href="#">Success Stories (Dark)</a></li>
                                                            <li><a href="#">Work Policy</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-12 mega__menu__single__wrap sp_top_30">
                                                        <div class="mega__menu__img">
                                                            <a href="#"><img src="assets/landing_page/img/mega/mega_menu_2.png"
                                                                    alt="Mega Menu"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>


                                        <li class="mega__menu position-static">
                                            <a class="headerarea__has__dropdown" href="course.html">Courses<i
                                                    class="icofont-rounded-down"></i> </a>
                                            <div class="headerarea__submenu mega__menu__wrapper">

                                                <div class="row">
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <h4 class="mega__menu__title"><a href="#">Get Started 1 </a>
                                                        </h4>
                                                        <ul class="mega__menu__item">
                                                            <li><a href="course.html">Grid <span
                                                                        class="mega__menu__label">All Courses</span></a>
                                                            </li>
                                                            <li><a href="course-dark.html">Course Grid (Dark)</a></li>
                                                            <li><a href="course-grid.html">Course Grid</a></li>
                                                            <li><a href="course-grid-dark.html">Course Grid (Dark)</a>
                                                            </li>
                                                            <li><a href="course-list.html">Course List</a></li>
                                                            <li><a href="course-list-dark.html">Course List (Dark)</a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <h4 class="mega__menu__title"><a href="#">Get Started 2 </a>
                                                        </h4>
                                                        <ul class="mega__menu__item">
                                                            <li><a href="course-details.html">Course Details</a></li>
                                                            <li><a href="course-details-dark.html">Course Details
                                                                    (Dark)</a></li>
                                                            <li><a href="course-details-2.html">Course Details 2</a>
                                                            </li>
                                                            <li><a href="course-details-2-dark.html">Details 2
                                                                    (Dark)</a></li>
                                                            <li><a href="course-details-3.html">Course Details 3</a>
                                                            </li>
                                                            <li><a href="course-details-3.html">Details 3 (Dark)</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <h4 class="mega__menu__title"><a href="#">Get Started 3</a></h4>
                                                        <ul class="mega__menu__item">
                                                            <li><a href="dashboard/become-an-instructor.html">Become An
                                                                    Instructor</a>
                                                            <li><a href="dashboard/create-course.html">Create Course
                                                                    <span class="mega__menu__label">Career</span></a>
                                                            </li>
                                                            <li><a href="instructor.html">Instructor</a></li>
                                                            <li><a href="instructor-dark.html">Instructor (Dark)</a>
                                                            </li>
                                                            <li><a href="instructor-details.html">Instructor Details</a>
                                                            </li>
                                                            <li><a href="lesson.html">Course Lesson<span
                                                                        class="mega__menu__label new">New</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-3 mega__menu__single__wrap">
                                                        <div class="mega__menu__img">
                                                            <a href="#"><img src="assets/landing_page/img/mega/mega_menu_1.png"
                                                                    alt="Mega Menu"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>


                                        <li><a class="headerarea__has__dropdown"
                                                href="dashboard/instructor-dashboard.html">Dashboard
                                                <i class="icofont-rounded-down"></i>
                                            </a>
                                            <ul class="headerarea__submenu headerarea__submenu--third--wrap">
                                                <li><a
                                                        href="https://html.themewin.com/edurock-preview/admin-dashboard.html">Admin
                                                        <i class="icofont-rounded-right"></i></a>

                                                    <ul class="headerarea__submenu--third">
                                                        <li><a href="dashboard/admin-dashboard.html">Admin Dashboard</a>
                                                        </li>
                                                        <li><a href="dashboard/admin-profile.html">Admin Profile</a>
                                                        </li>
                                                        <li><a href="dashboard/admin-message.html">Message</a></li>
                                                        <li><a href="dashboard/admin-course.html">Courses</a></li>
                                                        <li><a href="dashboard/admin-reviews.html">Review</a></li>
                                                        <li><a href="dashboard/admin-quiz-attempts.html">Admin Quiz</a>
                                                        </li>

                                                        <li><a href="dashboard/admin-settings.html">Settings</a></li>
                                                    </ul>

                                                </li>
                                                <li>
                                                    <a href="dashboard/instructor-dashboard.html">Instructor <i
                                                            class="icofont-rounded-right"></i></a>
                                                    <ul class="headerarea__submenu--third">
                                                        <li><a href="dashboard/instructor-dashboard.html">Inst.
                                                                Dashboard</a></li>
                                                        <li><a href="dashboard/instructor-profile.html">Inst.
                                                                Profile</a></li>
                                                        <li><a href="dashboard/instructor-message.html">Message</a></li>
                                                        <li><a href="dashboard/instructor-wishlist.html">Wishlist</a>
                                                        </li>
                                                        <li><a href="dashboard/instructor-reviews.html">Review</a></li>
                                                        <li><a href="dashboard/instructor-my-quiz-attempts.html">My
                                                                Quiz</a></li>
                                                        <li><a href="dashboard/instructor-order-history.html">Order
                                                                History</a></li>
                                                        <li><a href="dashboard/instructor-course.html">My Courses</a>
                                                        </li>
                                                        <li><a
                                                                href="dashboard/instructor-announcments.html">Announcements</a>
                                                        </li>
                                                        <li><a href="dashboard/instructor-quiz-attempts.html">Quiz
                                                                Attempts</a></li>
                                                        <li><a
                                                                href="dashboard/instructor-assignments.html">Assignment</a>
                                                        </li>
                                                        <li><a href="dashboard/instructor-settings.html">Settings</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="dashboard/student-dashboard.html">Student <i
                                                            class="icofont-rounded-right"></i></a>
                                                    <ul class="headerarea__submenu--third">
                                                        <li><a href="dashboard/student-dashboard.html">Dashboard</a>
                                                        </li>
                                                        <li><a href="dashboard/student-profile.html">Profile</a></li>
                                                        <li><a href="dashboard/student-message.html">Message</a></li>
                                                        <li><a href="dashboard/student-enrolled-courses.html">Enrolled
                                                                Courses</a></li>
                                                        <li><a href="dashboard/student-wishlist.html">Wishlist</a></li>
                                                        <li><a href="dashboard/student-reviews.html">Review</a></li>
                                                        <li><a href="dashboard/student-my-quiz-attempts.html">My
                                                                Quiz</a></li>
                                                        <li><a href="dashboard/student-assignments.html">Assignment</a>
                                                        </li>
                                                        <li><a href="dashboard/student-settings.html">Settings</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li><a class="headerarea__has__dropdown" href="ecommerce/shop.html">eCommerce
                                                <i class="icofont-rounded-down"></i>
                                            </a>
                                            <ul class="headerarea__submenu">
                                                <li><a href="ecommerce/shop.html">Shop<span
                                                            class="mega__menu__label">Online Store</span></a></li>
                                                <li><a href="ecommerce/product-details.html">Product Details</a></li>
                                                <li><a href="ecommerce/cart.html">Cart</a></li>
                                                <li><a href="ecommerce/checkout.html">Checkout</a></li>
                                                <li><a href="ecommerce/wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </li>


                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="headerarea__right">
                                <div class="headerarea__login">
                                    <a href="/login"><i class="icofont-user-alt-5"></i></a>
                                </div>
                                <div class="headerarea__button">
                                    <a href="/login">Get Start</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div class="container-fluid mob_menu_wrapper">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <div class="mobile-logo">
                                <a class="logo__dark" href="#"><img src="assets/landing_page/img/logo/logo_1.png" alt="logo"></a>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="header-right-wrap">

                                <div class="headerarea__right">

                                    <div class="header__cart">
                                        <a href="#"> <i class="icofont-cart-alt"></i></a>
                                        <div class="header__right__dropdown__wrapper">
                                            <div class="header__right__dropdown__inner">
                                                <div class="single__header__right__dropdown">

                                                    <div class="header__right__dropdown__img">
                                                        <a href="#">
                                                            <img src="assets/landing_page/img/grid/cart1.jpg" alt="photo">
                                                        </a>
                                                    </div>
                                                    <div class="header__right__dropdown__content">

                                                        <a href="shop-product.html">Web Directory</a>
                                                        <p>1 x <span class="price">$ 80.00</span></p>

                                                    </div>
                                                    <div class="header__right__dropdown__close">
                                                        <a href="#"><i class="icofont-close-line"></i></a>
                                                    </div>
                                                </div>

                                                <div class="single__header__right__dropdown">

                                                    <div class="header__right__dropdown__img">
                                                        <a href="#">
                                                            <img src="assets/landing_page/img/grid/cart2.jpg" alt="photo">
                                                        </a>
                                                    </div>
                                                    <div class="header__right__dropdown__content">

                                                        <a href="shop-product.html">Design Minois</a>
                                                        <p>1 x <span class="price">$ 60.00</span></p>

                                                    </div>
                                                    <div class="header__right__dropdown__close">
                                                        <a href="#"><i class="icofont-close-line"></i></a>
                                                    </div>
                                                </div>

                                                <div class="single__header__right__dropdown">

                                                    <div class="header__right__dropdown__img">
                                                        <a href="#">
                                                            <img src="assets/landing_page/img/grid/cart3.jpg" alt="photo">
                                                        </a>
                                                    </div>
                                                    <div class="header__right__dropdown__content">

                                                        <a href="shop-product.html">Crash Course</a>
                                                        <p>1 x <span class="price">$ 70.00</span></p>

                                                    </div>
                                                    <div class="header__right__dropdown__close">
                                                        <a href="#"><i class="icofont-close-line"></i></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="dropdown__price">Total: <span>$1,100.00</span>
                                            </p>
                                            <div class="header__right__dropdown__button">
                                                <a href="#" class="white__color">VIEW
                                                    CART</a>
                                                <a href="#" class="blue__color">CHECKOUT</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mobile-off-canvas">
                                    <a class="mobile-aside-button" href="#"><i class="icofont-navigation-menu"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- header section end -->

        <!-- Mobile Menu Start Here -->
        <div class="mobile-off-canvas-active">
            <a class="mobile-aside-close"><i class="icofont  icofont-close-line"></i></a>
            <div class="header-mobile-aside-wrap">
                <div class="mobile-search">
                    <form class="search-form" action="#">
                        <input type="text" placeholder="Search entire store…">
                        <button class="button-search"><i class="icofont icofont-search-2"></i></button>
                    </form>
                </div>
                <div class="mobile-menu-wrap headerarea">

                    <div class="mobile-navigation">

                        <nav>
                            <ul class="mobile-menu">
                                <li class="menu-item-has-children"><a href="index.html">Home</a>
                                    <ul class="dropdown">
                                        <li class="menu-item-has-children"><a href="index.html">Homes Light</a>
                                            <ul class="dropdown">
                                                <li><a href="index.html">Home (Default)</a></li>
                                                <li><a href="home-2.html">Elegant</a></li>
                                                <li><a href="home-3.html">Classic</a></li>
                                                <li><a href="home-4.html">Classic LMS</a></li>
                                                <li><a href="home-5.html">Online Course </a></li>
                                                <li><a href="home-6.html">Marketplace </a></li>
                                                <li><a href="home-7.html">University</a></li>
                                                <li><a href="home-8.html">eCommerce</a></li>
                                                <li><a href="home-9.html">Kindergarten</a></li>
                                                <li><a href="home-10.html">Machine Learning</a></li>
                                                <li><a href="home-11.html">Single Course</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="index.html">Homes Dark</a>
                                            <ul class="dropdown">
                                                <li><a href="index-dark.html">Home Default (Dark)</a></li>
                                                <li><a href="home-2-dark.html">Elegant (Dark)</a></li>
                                                <li><a href="home-3-dark.html">Classic (Dark)</a></li>
                                                <li><a href="home-4-dark.html">Classic LMS (Dark)</a></li>
                                                <li><a href="home-5-dark.html">Online Course (Dark)</a></li>
                                                <li><a href="home-6-dark.html">Marketplace (Dark)</a></li>
                                                <li><a href="home-7-dark.html">University (Dark)</a></li>
                                                <li><a href="home-8-dark.html">eCommerce (Dark)</a></li>
                                                <li><a href="home-9-dark.html">Kindergarten (Dark)</a></li>
                                                <li><a href="home-10-dark.html">Kindergarten (Dark)</a></li>
                                                <li><a href="home-11-dark.html">Single Course (Dark)</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>


                                <li class="menu-item-has-children "><a href="#">Pages</a>

                                    <ul class="dropdown">
                                        <li class="menu-item-has-children">
                                            <a href="#">Get Started 1</a>

                                            <ul class="dropdown">
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="about-dark.html">About (Dark)<span
                                                            class="mega__menu__label new">New</span></a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-dark.html">Blog (Dark)</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                <li><a href="blog-details-dark.html">Blog Details (Dark)</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="#">Get Started 2</a>
                                            <ul class="dropdown">
                                                <li><a href="error.html">Error 404</a></li>
                                                <li><a href="error-dark.html">Error (Dark)</a></li>
                                                <li><a href="event-details.html">Event Details</a></li>
                                                <li><a href="zoom/zoom-meetings.html">Zoom<span
                                                            class="mega__menu__label">Online Call</span></a></li>
                                                <li><a href="zoom/zoom-meetings-dark.html">Zoom Meeting (Dark)</a></li>
                                                <li><a href="zoom/zoom-meeting-details.html">Zoom Meeting Details</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="#">Get Started 3</a>
                                            <ul class="dropdown">
                                                <li><a href="zoom/zoom-meeting-details-dark.html">Meeting Details
                                                        (Dark)</a>
                                                </li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="login-dark.html">Login (Dark)</a></li>
                                                <li><a href="#">Maintenance</a></li>
                                                <li><a href="#">Maintenance (Dark)</a></li>
                                                <li><a href="#">Terms & Condition</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="#">Get Started 4</a>
                                            <ul class="dropdown">
                                                <li><a href="#">Terms & Condition (Dark)</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Privacy Policy (Dark)</a></li>
                                                <li><a href="#">Success Stories</a></li>
                                                <li><a href="#">Success Stories (Dark)</a></li>
                                                <li><a href="#">Work Policy</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <div class="mega__menu__img">
                                                <a href="#"><img src="assets/landing_page/img/mega/mega_menu_2.png" alt="Mega Menu"></a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>



                                <li class="menu-item-has-children "><a href="course.html">Courses</a>

                                    <ul class="dropdown">
                                        <li class="menu-item-has-children">
                                            <a href="#">Get Started 1</a>

                                            <ul class="dropdown">
                                                <li><a href="course.html">Grid <span class="mega__menu__label">All
                                                            Courses</span></a></li>
                                                <li><a href="course-dark.html">Course Grid (Dark)</a></li>
                                                <li><a href="course-grid.html">Course Grid</a></li>
                                                <li><a href="course-grid-dark.html">Course Grid (Dark)</a></li>
                                                <li><a href="course-list.html">Course List</a></li>
                                                <li><a href="course-list-dark.html">Course List (Dark)</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="#">Get Started 2</a>
                                            <ul class="dropdown">
                                                <li><a href="course-details.html">Course Details</a></li>
                                                <li><a href="course-details-dark.html">Course Details (Dark)</a></li>
                                                <li><a href="course-details-2.html">Course Details 2</a></li>
                                                <li><a href="course-details-2-dark.html">Details 2 (Dark)</a></li>
                                                <li><a href="course-details-3.html">Course Details 3</a></li>
                                                <li><a href="course-details-3.html">Details 3 (Dark)</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="#">Get Started 3</a>
                                            <ul class="dropdown">
                                                <li><a href="dashboard/become-an-instructor.html">Become An
                                                        Instructor</a>
                                                <li><a href="dashboard/create-course.html">Create Course <span
                                                            class="mega__menu__label">Career</span></a></li>
                                                <li><a href="instructor.html">Instructor</a></li>
                                                <li><a href="instructor-dark.html">Instructor (Dark)</a></li>
                                                <li><a href="instructor-details.html">Instructor Details</a></li>
                                                <li><a href="lesson.html">Course Lesson<span
                                                            class="mega__menu__label new">New</span></a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <div class="mega__menu__img">
                                                <a href="#"><img src="assets/landing_page/img/mega/mega_menu_1.png" alt="Mega Menu"></a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>


                                <li class="menu-item-has-children "><a
                                        href="dashboard/admin-dashboard.html">Dashboard</a>

                                    <ul class="dropdown">
                                        <li class="menu-item-has-children">
                                            <a href="#">Admin</a>

                                            <ul class="dropdown">
                                                <li><a href="dashboard/admin-dashboard.html">Admin Dashboard</a></li>
                                                <li><a href="dashboard/admin-profile.html">Admin Profile</a></li>
                                                <li><a href="dashboard/admin-message.html">Message</a></li>
                                                <li><a href="dashboard/admin-course.html">Courses</a></li>
                                                <li><a href="dashboard/admin-reviews.html">Review</a></li>
                                                <li><a href="dashboard/admin-quiz-attempts.html">Admin Quiz</a></li>

                                                <li><a href="dashboard/admin-settings.html">Settings</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="#">Instructor</a>
                                            <ul class="dropdown">
                                                <li><a href="dashboard/instructor-dashboard.html">Inst. Dashboard</a>
                                                </li>
                                                <li><a href="dashboard/instructor-profile.html">Inst. Profile</a></li>
                                                <li><a href="dashboard/instructor-message.html">Message</a></li>
                                                <li><a href="dashboard/instructor-wishlist.html">Wishlist</a></li>
                                                <li><a href="dashboard/instructor-reviews.html">Review</a></li>
                                                <li><a href="dashboard/instructor-my-quiz-attempts.html">My Quiz</a>
                                                </li>
                                                <li><a href="dashboard/instructor-order-history.html">Order History</a>
                                                </li>
                                                <li><a href="dashboard/instructor-course.html">My Courses</a></li>
                                                <li><a href="dashboard/instructor-announcments.html">Announcements</a>
                                                </li>
                                                <li><a href="dashboard/instructor-quiz-attempts.html">Quiz Attempts</a>
                                                </li>
                                                <li><a href="dashboard/instructor-assignments.html">Assignment</a></li>
                                                <li><a href="dashboard/instructor-settings.html">Settings</a></li>
                                            </ul>
                                        </li>

                                        <li class="menu-item-has-children">
                                            <a href="#">Student</a>
                                            <ul class="dropdown">
                                                <li><a href="dashboard/student-dashboard.html">Dashboard</a></li>
                                                <li><a href="dashboard/student-profile.html">Profile</a></li>
                                                <li><a href="dashboard/student-message.html">Message</a></li>
                                                <li><a href="dashboard/student-enrolled-courses.html">Enrolled
                                                        Courses</a></li>
                                                <li><a href="dashboard/student-wishlist.html">Wishlist</a></li>
                                                <li><a href="dashboard/student-reviews.html">Review</a></li>
                                                <li><a href="dashboard/student-my-quiz-attempts.html">My Quiz</a></li>
                                                <li><a href="dashboard/student-assignments.html">Assignment</a></li>
                                                <li><a href="dashboard/student-settings.html">Settings</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li class="menu-item-has-children"><a href="ecommerce/shop.html">eCommerce</a>
                                    <ul class="dropdown">
                                        <li><a href="ecommerce/shop.html">Shop<span class="mega__menu__label">Online
                                                    Store</span></a></li>
                                        <li><a href="ecommerce/product-details.html">Product Details</a></li>
                                        <li><a href="ecommerce/cart.html">Cart</a></li>
                                        <li><a href="ecommerce/checkout.html">Checkout</a></li>
                                        <li><a href="ecommerce/wishlist.html">Wishlist</a></li>

                                    </ul>
                                </li>

                            </ul>
                        </nav>

                    </div>

                </div>
                <div class="mobile-curr-lang-wrap">
                    <div class="single-mobile-curr-lang">
                        <a class="mobile-language-active" href="#">Language <i class="icofont-thin-down"></i></a>
                        <div class="lang-curr-dropdown lang-dropdown-active">
                            <ul>
                                <li><a href="#">English (US)</a></li>
                                <li><a href="#">English (UK)</a></li>
                                <li><a href="#">Spanish</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- <div class="single-mobile-curr-lang">
                                <a class="mobile-currency-active" href="#">Currency <i class="icofont-thin-down"></i></a>
                                <div class="lang-curr-dropdown curr-dropdown-active">
                                    <ul>
                                        <li><a href="#">USD</a></li>
                                        <li><a href="#">EUR</a></li>
                                        <li><a href="#">Real</a></li>
                                        <li><a href="#">BDT</a></li>
                                    </ul>
                                </div>
                            </div> -->

                    <div class="single-mobile-curr-lang">
                        <a class="mobile-account-active" href="#">My Account <i class="icofont-thin-down"></i></a>
                        <div class="lang-curr-dropdown account-dropdown-active">
                            <ul>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="login.html">/ Create Account</a></li>
                                <li><a href="login.html">My Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mobile-social-wrap">
                    <a class="facebook" href="#"><i class="icofont icofont-facebook"></i></a>
                    <a class="twitter" href="#"><i class="icofont icofont-twitter"></i></a>
                    <a class="pinterest" href="#"><i class="icofont icofont-pinterest"></i></a>
                    <a class="instagram" href="#"><i class="icofont icofont-instagram"></i></a>
                    <a class="google" href="#"><i class="icofont icofont-youtube-play"></i></a>
                </div>
            </div>
        </div>
        <!-- Mobile Menu end Here -->

        <!-- theme fixed shadow -->
        <div>
            <div class="theme__shadow__circle"></div>
            <div class="theme__shadow__circle shadow__right"></div>
        </div>
        <!-- theme fixed shadow -->

        <!-- herobannerarea__section__start -->
        <div class="herobannerarea herobannerarea__2">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                        <div class="herobannerarea__content__wraper">


                            <div class="herobannerarea__title">
                                <div class="herobannerarea__small__title">
                                    <span>Education Solution</span>
                                </div>
                                <div class="herobannerarea__title__heading__2 herobannerarea__title__heading__3">
                                    <h2>Cloud-based LMS Trusted by 1000+</h2>
                                </div>
                            </div>


                            <div class="herobannerarea__text herobannerarea__text__2">
                                <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum
                                    has been </p>
                            </div>
                            <div class="hreobannerarea__button__2">
                                <a class="default__button" href="#">View Courses</a>
                                <a class="default__button hreobannerarea__button__3" href="#">Explore More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                        <div class="aboutarea__img__2" data-tilt>
                            <img class="aboutimg__1" src="assets/landing_page/img/about/about_10.png" alt="aboutimg">
                        </div>

                    </div>
                </div>
            </div>
            <div class="herobannerarea__icon__2">
                <img class="herobanner__common__img herobanner__img__1" src="assets/landing_page/img/herobanner/herobanner__1.png"
                    alt="photo">
                <img class="herobanner__common__img herobanner__img__2" src="assets/landing_page/img/herobanner/herobanner__2.png"
                    alt="photo">
                <img class="herobanner__common__img herobanner__img__3" src="assets/landing_page/img/herobanner/herobanner__3.png"
                    alt="photo">
                <img class="herobanner__common__img herobanner__img__4" src="assets/landing_page/img/herobanner/herobanner__4.png"
                    alt="photo">
                <img class="herobanner__common__img herobanner__img__5" src="assets/landing_page/img/herobanner/herobanner__5.png"
                    alt="photo">
            </div>
        </div>
        <!-- herobannerarea__section__end-->
        <!-- brand__section__start -->
        <div class="brandarea__2">
            <div class="container">
                <div class="row">
                    <div class="brandarea__wraper brandarea__wraper__2" data-aos="fade-up">
                        <div class="brandarea__img">
                            <a href="#"><img src="assets/landing_page/img/brand/brand_1.png" alt="brand"></a>
                        </div>
                        <div class="brandarea__img">
                            <a href="#"><img src="assets/landing_page/img/brand/brand_2.png" alt="brand"></a>
                        </div>
                        <div class="brandarea__img">
                            <a href="#"><img src="assets/landing_page/img/brand/brand_3.png" alt="brand"></a>
                        </div>
                        <div class="brandarea__img">
                            <a href="#"><img src="assets/landing_page/img/brand/brand_4.png" alt="brand"></a>
                        </div>
                        <div class="brandarea__img">
                            <a href="#"><img src="assets/landing_page/img/brand/brand_5.png" alt="brand"></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- brand__section__end -->

        <!-- aboutarea__2__section__start -->
        <div class="aboutarea__2 aboutarea__4 sp_bottom_30">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                        <div class="about__right__wraper__2 about__right__wraper__4">
                            <div class="educationarea__img" data-tilt>
                                <img class="aboutimg__4__img__1" src="assets/landing_page/img/about/about_13.png" alt="about">
                                <img class="aboutimg__4__img__2" src="assets/landing_page/img/about/about_12.png" alt="about">
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">

                        <div class="aboutarea__content__wraper">

                            <div class="section__title__2">
                                <div class="section__small__title">
                                    <span>Education Solution</span>
                                </div>
                                <div class="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                                    <h2>Welcome to the online Learning Center</h2>
                                </div>
                            </div>


                            <div class="aboutarea__para aboutarea__para__2">
                                <p>25+Contrary to popular belief, Lorem Ipsum is not simply random text roots in a piece
                                    of classical Latin literature from 45 BC</p>
                            </div>
                            <div class="aboutarea__list__2">
                                <ul>
                                    <li>
                                        <i class="icofont-check"></i> Explore a variety of fresh educational teach
                                    </li>

                                    <li>
                                        <i class="icofont-check"></i> Explore a variety of fresh educational teach
                                    </li>

                                    <li>
                                        <i class="icofont-check"></i> Explore a variety of fresh educational teach
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- aboutarea__2__section__end -->



        <!-- populer__section__start -->
        <div class="populerarea sp_top_80 sp_bottom_50">
            <div class="container">
                <div class="row populerarea__wraper">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="populerarea__heading heading__underline">
                            <div class="default__small__button">Course List</div>
                            <h2>Populer <span>Subjects</span></h2>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="populerarea__content">
                            <p>Forging relationships between multi to national governments and global NGOs begins.</p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="populerarea__button">
                            <a class="default__button" href="#">All Catagories
                                <i class="icofont-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">

                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z"
                                        fill="#FFB31F" />
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Business Studies</a></h3>
                                <p>Business is succes</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">
                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_98_30)">
                                        <path
                                            d="M27.9228 12.1644H34.0478C34.3185 12.1644 34.5782 12.0616 34.7696 11.8788C34.9611 11.6959 35.0686 11.4479 35.0686 11.1894C35.0686 10.9308 34.9611 10.6828 34.7696 10.4999C34.5782 10.3171 34.3185 10.2144 34.0478 10.2144H27.9228C27.6521 10.2144 27.3924 10.3171 27.201 10.4999C27.0095 10.6828 26.902 10.9308 26.902 11.1894C26.902 11.4479 27.0095 11.6959 27.201 11.8788C27.3924 12.0616 27.6521 12.1644 27.9228 12.1644Z"
                                            fill="#FFB31F" />
                                        <path
                                            d="M13.0973 12.1388C12.9476 11.925 12.7156 11.7764 12.4517 11.7253C12.1879 11.6742 11.9136 11.7246 11.6885 11.8658L8.62601 13.8158C8.48705 13.9049 8.37319 14.0254 8.29446 14.1665C8.21574 14.3076 8.17456 14.4651 8.17456 14.625C8.17456 14.7849 8.21574 14.9424 8.29446 15.0835C8.37319 15.2246 8.48705 15.3451 8.62601 15.4343L11.6885 17.3843C11.8529 17.4942 12.0493 17.5522 12.25 17.55C12.4681 17.5484 12.6799 17.4801 12.8544 17.3552C13.0289 17.2302 13.1569 17.0552 13.2197 16.8557C13.2825 16.6562 13.2767 16.4427 13.2033 16.2466C13.1298 16.0504 12.9925 15.8819 12.8114 15.7658L11.025 14.625L12.8114 13.4843C13.0352 13.3413 13.1908 13.1197 13.2443 12.8677C13.2979 12.6157 13.245 12.3537 13.0973 12.1388Z"
                                            fill="#FFB31F" />
                                        <path
                                            d="M16.5783 9.75005C16.3157 9.68819 16.0381 9.7284 15.8065 9.86185C15.5749 9.9953 15.4082 10.2111 15.3431 10.4618L13.3014 18.2618C13.2599 18.3898 13.2465 18.5247 13.262 18.6579C13.2775 18.7911 13.3216 18.9198 13.3915 19.036C13.4615 19.1522 13.5557 19.2534 13.6684 19.3332C13.7811 19.4131 13.9099 19.4699 14.0466 19.5C14.1808 19.5347 14.321 19.5429 14.4586 19.524C14.5962 19.5051 14.7283 19.4596 14.8468 19.3902C14.9653 19.3208 15.0677 19.2291 15.1478 19.1205C15.2279 19.012 15.2839 18.889 15.3124 18.759L17.3541 10.959C17.3904 10.8309 17.399 10.697 17.3792 10.5656C17.3594 10.4342 17.3117 10.308 17.2391 10.1948C17.1665 10.0816 17.0704 9.98375 16.9567 9.90728C16.8431 9.8308 16.7143 9.7773 16.5783 9.75005Z"
                                            fill="#5F2DED" />
                                        <path
                                            d="M21.9989 13.8158L18.9364 11.8658C18.7114 11.7246 18.4371 11.6742 18.1732 11.7253C17.9094 11.7764 17.6774 11.925 17.5277 12.1388C17.3799 12.3537 17.3271 12.6157 17.3806 12.8677C17.4342 13.1197 17.5897 13.3413 17.8135 13.4843L19.6 14.625L17.8135 15.7658C17.6325 15.8819 17.4952 16.0504 17.4217 16.2466C17.3482 16.4427 17.3425 16.6562 17.4052 16.8557C17.468 17.0552 17.596 17.2302 17.7705 17.3552C17.9451 17.4801 18.1569 17.5484 18.375 17.55C18.5757 17.5522 18.772 17.4942 18.9364 17.3843L21.9989 15.4343C22.1379 15.3451 22.2518 15.2246 22.3305 15.0835C22.4092 14.9424 22.4504 14.7849 22.4504 14.625C22.4504 14.4651 22.4092 14.3076 22.3305 14.1665C22.2518 14.0254 22.1379 13.9049 21.9989 13.8158Z"
                                            fill="#FFB31F" />
                                        <path
                                            d="M27.9228 16.8072H40.1728C40.4435 16.8072 40.7032 16.7045 40.8946 16.5216C41.0861 16.3388 41.1936 16.0908 41.1936 15.8322C41.1936 15.5736 41.0861 15.3256 40.8946 15.1427C40.7032 14.9599 40.4435 14.8572 40.1728 14.8572H27.9228C27.6521 14.8572 27.3924 14.9599 27.201 15.1427C27.0095 15.3256 26.902 15.5736 26.902 15.8322C26.902 16.0908 27.0095 16.3388 27.201 16.5216C27.3924 16.7045 27.6521 16.8072 27.9228 16.8072Z"
                                            fill="#FFB31F" />
                                        <path
                                            d="M34.0392 19.5H27.451C27.3054 19.5 27.1657 19.5978 27.0628 19.772C26.9598 19.9461 26.902 20.1823 26.902 20.4286C26.902 20.6748 26.9598 20.911 27.0628 21.0852C27.1657 21.2593 27.3054 21.3571 27.451 21.3571H34.0392C34.1848 21.3571 34.3245 21.2593 34.4275 21.0852C34.5304 20.911 34.5883 20.6748 34.5883 20.4286C34.5883 20.1823 34.5304 19.9461 34.4275 19.772C34.3245 19.5978 34.1848 19.5 34.0392 19.5Z"
                                            fill="#FFB31F" />
                                        <path
                                            d="M43.8958 27.3V3.90005C43.8958 3.64146 43.7882 3.39347 43.5968 3.21062C43.4054 3.02777 43.1457 2.92505 42.875 2.92505H6.12496C5.85422 2.92505 5.59456 3.02777 5.40312 3.21062C5.21168 3.39347 5.10413 3.64146 5.10413 3.90005V27.3C4.2919 27.3 3.51294 27.6082 2.93861 28.1568C2.36428 28.7053 2.04163 29.4493 2.04163 30.225C2.04163 31.2594 2.47183 32.2514 3.23761 32.9828C4.00338 33.7142 5.04199 34.125 6.12496 34.125H42.875C43.9579 34.125 44.9965 33.7142 45.7623 32.9828C46.5281 32.2514 46.9583 31.2594 46.9583 30.225C46.9583 29.4493 46.6356 28.7053 46.0613 28.1568C45.487 27.6082 44.708 27.3 43.8958 27.3ZM41.8541 24.375H25.5208V4.87505H41.8541V24.375ZM7.14579 4.87505H23.4791V24.375H7.14579V4.87505ZM42.875 32.175H6.12496C5.58348 32.175 5.06417 31.9696 4.68128 31.6039C4.2984 31.2382 4.08329 30.7422 4.08329 30.225C4.08329 29.9665 4.19084 29.7185 4.38229 29.5356C4.57373 29.3528 4.83338 29.25 5.10413 29.25H18.7629L19.5081 30.6638C19.5929 30.8246 19.7227 30.9598 19.8831 31.0545C20.0434 31.1491 20.2281 31.1995 20.4166 31.2H28.5833C28.7718 31.1995 28.9565 31.1491 29.1168 31.0545C29.2772 30.9598 29.407 30.8246 29.4918 30.6638L30.237 29.25H43.8958C44.1665 29.25 44.4262 29.3528 44.6176 29.5356C44.8091 29.7185 44.9166 29.9665 44.9166 30.225C44.9166 30.7422 44.7015 31.2382 44.3186 31.6039C43.9357 31.9696 43.4164 32.175 42.875 32.175Z"
                                            fill="#5F2DED" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_98_30">
                                            <rect width="49" height="39" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Programming Tech</a></h3>
                                <p>update your skill</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">
                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.525 44.0499H20.4753C18.7037 44.0499 17.2625 42.7046 17.2625 41.0509C17.2625 36.723 15.7895 32.4935 13.115 29.1417C11.2743 26.835 10.3045 24.0912 10.3103 21.2067C10.3172 17.7711 11.7888 14.4906 14.4541 11.9697C17.1201 9.44796 20.6146 8.03229 24.2939 7.98346C28.1232 7.9323 31.7312 9.28502 34.4566 11.7915C37.1864 14.302 38.6898 17.6547 38.6898 21.2322C38.6898 24.0423 37.7594 26.7272 35.9993 28.9965C33.2113 32.5912 31.7377 36.7597 31.7377 41.0511C31.7377 42.7046 30.2964 44.0499 28.525 44.0499ZM24.5008 10.6603C24.4454 10.6603 24.3904 10.6607 24.3349 10.6614C18.3004 10.7416 13.1927 15.5731 13.1814 21.2117C13.1767 23.5138 13.9501 25.7029 15.418 27.5424C18.4589 31.3533 20.1335 36.1507 20.1335 41.0509C20.1335 41.2278 20.2869 41.3716 20.4752 41.3716H28.5249C28.7133 41.3716 28.8665 41.2278 28.8665 41.051C28.8665 36.1921 30.5286 31.4809 33.6733 27.4265C35.0768 25.6168 35.8187 23.4749 35.8187 21.2321C35.8187 18.3773 34.6191 15.7019 32.4409 13.6987C30.3067 11.7359 27.4925 10.6603 24.5008 10.6603Z"
                                        fill="#5F2DED" />
                                    <path d="M34.5884 35.3186H14.4117V37.9969H34.5884V35.3186Z" fill="#5F2DED" />
                                    <path
                                        d="M23.8501 30.4466L21.4301 29.0054L24.8268 24.0417H21.5536C21.0311 24.0417 20.5498 23.7768 20.297 23.3501C20.0444 22.9235 20.0602 22.4024 20.3384 21.9897L25.0805 14.9543L27.5109 16.38L24.1519 21.3634H27.4464C27.9708 21.3634 28.4533 21.63 28.7053 22.059C28.9573 22.4879 28.9385 23.0109 28.6564 23.4232L23.8501 30.4466Z"
                                        fill="#FFB31F" />
                                    <path d="M25.9355 2.17908H23.0645V6.19654H25.9355V2.17908Z" fill="#5F2DED" />
                                    <path
                                        d="M10.6816 6.93133L8.65027 8.8241L11.6922 11.6649L13.7235 9.77218L10.6816 6.93133Z"
                                        fill="#5F2DED" />
                                    <path
                                        d="M38.3173 6.93027L35.2754 9.77112L37.3067 11.6639L40.3486 8.82304L38.3173 6.93027Z"
                                        fill="#5F2DED" />
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Artist & Design</a></h3>
                                <p>show creativity</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">
                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M45.8483 26.6935C45.3965 26.2639 44.7953 26.0262 44.1558 26.0262C43.5164 26.0262 42.9166 26.2639 42.4634 26.6935L33.7409 34.9886C33.7306 34.9886 33.7183 34.9867 33.708 34.9867H25.1438C25.1438 34.9541 25.1458 34.9229 25.1458 34.8898C25.1458 34.2537 25.0301 33.6443 24.8165 33.0772H29.4735C29.7924 33.6951 30.4593 34.1214 31.2316 34.1214C32.314 34.1214 33.193 33.2873 33.193 32.258C33.193 31.2287 32.314 30.3946 31.2316 30.3946C30.4593 30.3946 29.7924 30.821 29.4735 31.4389H23.8321C22.7928 30.2507 21.2243 29.4949 19.4716 29.4949C17.9393 29.4949 16.5502 30.0736 15.53 31.0111L15.5281 31.0092L2.44995 43.5669H15.5486L19.0217 40.2842H33.708C34.1956 40.2842 34.6542 40.1645 35.0526 39.9548C35.325 39.8434 35.5749 39.6827 35.79 39.4776L45.8488 29.9124C46.3015 29.4832 46.5499 28.911 46.5499 28.3029C46.5499 27.6949 46.3015 27.1231 45.8483 26.6935ZM19.4716 37.1422C18.1633 37.1422 17.1034 36.1325 17.1034 34.8902C17.1034 33.6461 18.1633 32.6369 19.4716 32.6369C20.7799 32.6369 21.8397 33.6466 21.8397 34.8902C21.8397 36.1325 20.7799 37.1422 19.4716 37.1422ZM33.6664 38.9106C32.9255 38.9106 32.3253 38.3402 32.3253 37.6352C32.3253 36.9321 32.925 36.3599 33.6664 36.3599C34.4077 36.3599 35.0075 36.9321 35.0075 37.6352C35.0075 38.3402 34.4077 38.9106 33.6664 38.9106ZM36.3001 36.6749C36.133 36.2634 35.8606 35.9028 35.5127 35.6209L42.0537 29.4026C42.2727 29.7814 42.602 30.096 43.0019 30.3024L36.3001 36.6749ZM36.231 9.4762H28.4753V8.49301H36.231V9.4762ZM36.231 12.0986H28.4753V11.1155H36.231V12.0986ZM23.3048 9.4762H15.5486V8.49301H23.3044L23.3048 9.4762ZM23.3048 12.0986H15.5486V11.1155H23.3044L23.3048 12.0986ZM41.057 5.87011H39.3308V4.23132H28.589C27.7295 4.23132 26.9215 4.55004 26.3139 5.1283C26.1517 5.28253 26.0106 5.45121 25.8886 5.63014C25.7666 5.45121 25.6255 5.28253 25.4633 5.1283C24.8557 4.55004 24.0477 4.23132 23.1882 4.23132H12.4464V5.87011H10.7231V23.8991H24.0217C24.2677 24.6582 25.011 25.2103 25.8901 25.2103C26.7691 25.2103 27.5125 24.6586 27.7585 23.8991H41.057V5.87011ZM27.0455 5.82305C27.4576 5.43071 28.0059 5.2145 28.589 5.2145H38.2964L38.2797 20.6211H30.4471C29.0344 20.6211 27.6364 20.9873 26.4237 21.6644L26.407 7.29176C26.4065 6.73727 26.6329 6.21586 27.0455 5.82305ZM13.4803 5.21497H23.1877C23.7708 5.21497 24.3191 5.43118 24.7312 5.82352C25.1433 6.21586 25.3702 6.73773 25.3697 7.29223L25.353 21.6653C24.1388 20.9878 22.7413 20.6215 21.3296 20.6215H13.4803V5.21497Z"
                                        fill="#5F2DED" />
                                    <rect x="15" y="8.54175" width="8" height="0.993317" fill="#FFB31F" />
                                    <rect x="28" y="8.54175" width="8" height="0.993317" fill="#FFB31F" />
                                    <rect x="15" y="11.5198" width="8" height="0.993319" fill="#FFB31F" />
                                    <rect x="28" y="11.5198" width="8" height="0.993319" fill="#FFB31F" />
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Machine Learning</a></h3>
                                <p>Science is power</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">
                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_98_105)">
                                        <path
                                            d="M38.0462 15.8125C37.7036 15.8174 37.3751 15.9558 37.125 16.2006V12.9375C37.125 11.7938 36.6904 10.6969 35.9168 9.8881C35.1432 9.07935 34.094 8.625 33 8.625H31.625V7.1875C31.625 6.04375 31.1904 4.94685 30.4168 4.1381C29.6432 3.32935 28.594 2.875 27.5 2.875H16.5C15.406 2.875 14.3568 3.32935 13.5832 4.1381C12.8096 4.94685 12.375 6.04375 12.375 7.1875V8.625H11C9.90598 8.625 8.85677 9.07935 8.08318 9.8881C7.3096 10.6969 6.875 11.7938 6.875 12.9375V33.0625C6.875 34.2062 7.3096 35.3031 8.08318 36.1119C8.85677 36.9207 9.90598 37.375 11 37.375H12.375V38.8125C12.375 39.9562 12.8096 41.0531 13.5832 41.8619C14.3568 42.6707 15.406 43.125 16.5 43.125H27.5C28.594 43.125 29.6432 42.6707 30.4168 41.8619C31.1904 41.0531 31.625 39.9562 31.625 38.8125V37.375H33C34.094 37.375 35.1432 36.9207 35.9168 36.1119C36.6904 35.3031 37.125 34.2062 37.125 33.0625V21.1744C37.3751 21.4192 37.7036 21.5576 38.0462 21.5625C38.4109 21.5625 38.7607 21.411 39.0185 21.1415C39.2764 20.8719 39.4212 20.5062 39.4212 20.125V17.25C39.4212 16.8688 39.2764 16.5031 39.0185 16.2335C38.7607 15.964 38.4109 15.8125 38.0462 15.8125ZM15.125 7.1875C15.125 6.80625 15.2699 6.44062 15.5277 6.17103C15.7856 5.90145 16.1353 5.75 16.5 5.75H27.5C27.8647 5.75 28.2144 5.90145 28.4723 6.17103C28.7301 6.44062 28.875 6.80625 28.875 7.1875V8.625H15.125V7.1875ZM28.875 38.8125C28.875 39.1937 28.7301 39.5594 28.4723 39.829C28.2144 40.0985 27.8647 40.25 27.5 40.25H16.5C16.1353 40.25 15.7856 40.0985 15.5277 39.829C15.2699 39.5594 15.125 39.1937 15.125 38.8125V37.375H28.875V38.8125ZM34.375 33.0625C34.375 33.4437 34.2301 33.8094 33.9723 34.079C33.7144 34.3486 33.3647 34.5 33 34.5H11C10.6353 34.5 10.2856 34.3486 10.0277 34.079C9.76987 33.8094 9.625 33.4437 9.625 33.0625V12.9375C9.625 12.5563 9.76987 12.1906 10.0277 11.921C10.2856 11.6515 10.6353 11.5 11 11.5H33C33.3647 11.5 33.7144 11.6515 33.9723 11.921C34.2301 12.1906 34.375 12.5563 34.375 12.9375V33.0625Z"
                                            fill="#5F2DED" />
                                        <path
                                            d="M29.5624 23H27.4999L26.5924 17.02C26.5464 16.7228 26.4124 16.4483 26.2092 16.235C26.0061 16.0218 25.744 15.8806 25.4599 15.8314C25.1759 15.7821 24.8843 15.8274 24.6261 15.9607C24.368 16.094 24.1564 16.3086 24.0212 16.5743L21.2712 22.1518L20.0887 18.2562C20.0066 17.9854 19.8495 17.7462 19.6375 17.5686C19.4254 17.3911 19.1678 17.2832 18.8971 17.2586C18.6264 17.234 18.3548 17.2937 18.1166 17.4304C17.8784 17.567 17.6843 17.7743 17.5587 18.0262L15.7849 21.5625H14.4099C14.0452 21.5625 13.6955 21.7139 13.4376 21.9835C13.1798 22.2531 13.0349 22.6187 13.0349 23C13.0349 23.3812 13.1798 23.7468 13.4376 24.0164C13.6955 24.286 14.0452 24.4375 14.4099 24.4375H16.5824C16.8312 24.4368 17.0751 24.3655 17.2881 24.2314C17.5012 24.0972 17.6755 23.9051 17.7924 23.6756L18.4249 22.4106L19.6074 26.3062C19.6898 26.5745 19.8459 26.8116 20.0561 26.9879C20.2663 27.1643 20.5215 27.2721 20.7899 27.2981H20.9137C21.1624 27.2974 21.4063 27.2262 21.6194 27.092C21.8325 26.9578 22.0068 26.7657 22.1237 26.5362L24.5299 21.7493L24.9699 24.6243C25.0226 24.9645 25.1905 25.2735 25.4428 25.4952C25.6952 25.7168 26.0153 25.8363 26.3449 25.8318H29.5624C29.9271 25.8318 30.2768 25.6804 30.5347 25.4108C30.7926 25.1412 30.9374 24.7756 30.9374 24.3943C30.9374 24.0131 30.7926 23.6475 30.5347 23.3779C30.2768 23.1083 29.9271 22.9568 29.5624 22.9568V23Z"
                                            fill="#FFB31F" />
                                    </g>
                                    <defs>
                                        <clipPath>
                                            <rect width="44" height="46" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Health & Fitness</a></h3>
                                <p>health is wealth</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">
                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_98_105)">
                                        <path
                                            d="M38.0462 15.8125C37.7036 15.8174 37.3751 15.9558 37.125 16.2006V12.9375C37.125 11.7938 36.6904 10.6969 35.9168 9.8881C35.1432 9.07935 34.094 8.625 33 8.625H31.625V7.1875C31.625 6.04375 31.1904 4.94685 30.4168 4.1381C29.6432 3.32935 28.594 2.875 27.5 2.875H16.5C15.406 2.875 14.3568 3.32935 13.5832 4.1381C12.8096 4.94685 12.375 6.04375 12.375 7.1875V8.625H11C9.90598 8.625 8.85677 9.07935 8.08318 9.8881C7.3096 10.6969 6.875 11.7938 6.875 12.9375V33.0625C6.875 34.2062 7.3096 35.3031 8.08318 36.1119C8.85677 36.9207 9.90598 37.375 11 37.375H12.375V38.8125C12.375 39.9562 12.8096 41.0531 13.5832 41.8619C14.3568 42.6707 15.406 43.125 16.5 43.125H27.5C28.594 43.125 29.6432 42.6707 30.4168 41.8619C31.1904 41.0531 31.625 39.9562 31.625 38.8125V37.375H33C34.094 37.375 35.1432 36.9207 35.9168 36.1119C36.6904 35.3031 37.125 34.2062 37.125 33.0625V21.1744C37.3751 21.4192 37.7036 21.5576 38.0462 21.5625C38.4109 21.5625 38.7607 21.411 39.0185 21.1415C39.2764 20.8719 39.4212 20.5062 39.4212 20.125V17.25C39.4212 16.8688 39.2764 16.5031 39.0185 16.2335C38.7607 15.964 38.4109 15.8125 38.0462 15.8125ZM15.125 7.1875C15.125 6.80625 15.2699 6.44062 15.5277 6.17103C15.7856 5.90145 16.1353 5.75 16.5 5.75H27.5C27.8647 5.75 28.2144 5.90145 28.4723 6.17103C28.7301 6.44062 28.875 6.80625 28.875 7.1875V8.625H15.125V7.1875ZM28.875 38.8125C28.875 39.1937 28.7301 39.5594 28.4723 39.829C28.2144 40.0985 27.8647 40.25 27.5 40.25H16.5C16.1353 40.25 15.7856 40.0985 15.5277 39.829C15.2699 39.5594 15.125 39.1937 15.125 38.8125V37.375H28.875V38.8125ZM34.375 33.0625C34.375 33.4437 34.2301 33.8094 33.9723 34.079C33.7144 34.3486 33.3647 34.5 33 34.5H11C10.6353 34.5 10.2856 34.3486 10.0277 34.079C9.76987 33.8094 9.625 33.4437 9.625 33.0625V12.9375C9.625 12.5563 9.76987 12.1906 10.0277 11.921C10.2856 11.6515 10.6353 11.5 11 11.5H33C33.3647 11.5 33.7144 11.6515 33.9723 11.921C34.2301 12.1906 34.375 12.5563 34.375 12.9375V33.0625Z"
                                            fill="#5F2DED" />
                                        <path
                                            d="M29.5624 23H27.4999L26.5924 17.02C26.5464 16.7228 26.4124 16.4483 26.2092 16.235C26.0061 16.0218 25.744 15.8806 25.4599 15.8314C25.1759 15.7821 24.8843 15.8274 24.6261 15.9607C24.368 16.094 24.1564 16.3086 24.0212 16.5743L21.2712 22.1518L20.0887 18.2562C20.0066 17.9854 19.8495 17.7462 19.6375 17.5686C19.4254 17.3911 19.1678 17.2832 18.8971 17.2586C18.6264 17.234 18.3548 17.2937 18.1166 17.4304C17.8784 17.567 17.6843 17.7743 17.5587 18.0262L15.7849 21.5625H14.4099C14.0452 21.5625 13.6955 21.7139 13.4376 21.9835C13.1798 22.2531 13.0349 22.6187 13.0349 23C13.0349 23.3812 13.1798 23.7468 13.4376 24.0164C13.6955 24.286 14.0452 24.4375 14.4099 24.4375H16.5824C16.8312 24.4368 17.0751 24.3655 17.2881 24.2314C17.5012 24.0972 17.6755 23.9051 17.7924 23.6756L18.4249 22.4106L19.6074 26.3062C19.6898 26.5745 19.8459 26.8116 20.0561 26.9879C20.2663 27.1643 20.5215 27.2721 20.7899 27.2981H20.9137C21.1624 27.2974 21.4063 27.2262 21.6194 27.092C21.8325 26.9578 22.0068 26.7657 22.1237 26.5362L24.5299 21.7493L24.9699 24.6243C25.0226 24.9645 25.1905 25.2735 25.4428 25.4952C25.6952 25.7168 26.0153 25.8363 26.3449 25.8318H29.5624C29.9271 25.8318 30.2768 25.6804 30.5347 25.4108C30.7926 25.1412 30.9374 24.7756 30.9374 24.3943C30.9374 24.0131 30.7926 23.6475 30.5347 23.3779C30.2768 23.1083 29.9271 22.9568 29.5624 22.9568V23Z"
                                            fill="#FFB31F" />
                                    </g>
                                    <defs>
                                        <clipPath>
                                            <rect width="44" height="46" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Health & Fitness</a></h3>
                                <p>health is wealth</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">
                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.351 30.927C9.54602 30.3482 4.98802 25.6347 4.98802 19.9289C4.98802 13.8097 10.191 8.84815 16.512 8.84815C18.404 8.84815 20.21 9.30295 21.801 10.0885L23.865 8.10391C21.715 6.86353 19.221 6.16064 16.512 6.16064C8.60003 6.16064 2.15002 12.3626 2.15002 19.9703C2.15002 27.3712 8.21303 33.4491 15.867 33.7385C15.523 33.077 15.308 32.3741 15.308 31.5885V30.927H15.351Z"
                                        fill="#5F2DED" />
                                    <path
                                        d="M29.971 21.376L30.874 20.7971C30.917 20.5077 30.917 20.2183 30.917 19.8875C30.917 17.324 30.186 14.8846 28.896 12.8586L26.832 14.8433C27.649 16.3731 28.122 18.0683 28.122 19.8875C28.122 20.7558 27.993 21.5827 27.821 22.4096C28.552 22.2029 29.283 21.8721 29.971 21.376Z"
                                        fill="#5F2DED" />
                                    <path
                                        d="M16.5551 14.0164C16.8991 14.0164 17.2431 14.0578 17.5871 14.0991L19.8661 11.9078C18.8341 11.4943 17.7161 11.2876 16.5551 11.2876C11.6101 11.2876 7.61108 15.1328 7.61108 19.8876C7.61108 24.2289 11.0081 27.8674 15.3511 28.4049V27.4126C15.3511 26.7924 15.4801 26.2549 15.6951 25.7174C12.7281 25.3039 10.4061 22.8645 10.4061 19.8876C10.4061 16.6626 13.1581 14.0164 16.5551 14.0164Z"
                                        fill="#5F2DED" />
                                    <path
                                        d="M24.9831 22.7405C25.3271 21.8309 25.4991 20.8799 25.4991 19.8876C25.4991 18.7713 25.2841 17.6963 24.8541 16.704L22.5751 18.8953C22.6611 19.2261 22.6611 19.5569 22.6611 19.8876C22.6611 20.9213 22.4031 21.8722 21.8871 22.7405H24.9831Z"
                                        fill="#5F2DED" />
                                    <path
                                        d="M36.0771 5.37505C35.9051 5.00293 35.5181 4.75486 35.0881 4.75486H32.2931V2.06736C32.2931 1.6539 32.0351 1.28178 31.6481 1.1164C31.2611 0.951011 30.7881 1.0337 30.4871 1.32313L27.6061 4.09332C27.3911 4.30005 27.3051 4.54813 27.3051 4.7962V7.60774L17.8021 16.7452C17.4151 16.5799 16.9851 16.4972 16.5121 16.4972C14.5771 16.4972 12.9861 18.027 12.9861 19.8875C12.9861 21.7481 14.5771 23.2779 16.5121 23.2779C18.4471 23.2779 20.0381 21.7481 20.0381 19.8875C20.0381 19.4327 19.9521 19.0193 19.7801 18.6472L29.2831 9.50966H32.2071C32.5081 9.50966 32.7661 9.38562 32.9381 9.22024L35.8191 6.45005C36.1631 6.16063 36.2491 5.74716 36.0771 5.37505Z"
                                        fill="#FFB31F" />
                                    <path
                                        d="M25.4991 25.1385H20.2101C18.8771 25.1385 17.8021 26.1721 17.8021 27.4539V31.5471C17.8021 32.8289 18.8771 33.8625 20.2101 33.8625H21.4571L22.5321 39.6923C22.6181 40.0644 22.9191 40.3539 23.3061 40.3539H25.7141C26.2301 40.3539 26.6171 39.8991 26.5311 39.4442L25.4991 33.9039C27.6061 33.9039 29.6271 34.5241 31.3471 35.6817L32.8091 36.6741V22.3683L31.3901 23.3606C29.6701 24.5183 27.6061 25.1385 25.4991 25.1385Z"
                                        fill="#5F2DED" />
                                    <path
                                        d="M37.926 26.5029V21.1279C37.926 20.1769 36.808 19.6394 36.034 20.1769L35.088 20.8385V38.1212L36.034 38.7827C36.851 39.3202 37.926 38.7827 37.926 37.8317V32.4567C39.56 32.3327 40.85 31.051 40.85 29.4798C40.807 27.9087 39.517 26.6269 37.926 26.5029Z"
                                        fill="#5F2DED" />
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Marketing Analysis</a></h3>
                                <p>Science is power</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div class="single__service">
                            <div class="service__img">

                                <svg class="service__icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.7027 23.7833H15.8987C16.4257 23.7833 16.8649 24.4239 16.8649 25.3207V36.7228C16.8649 37.6196 16.4257 38.2602 15.8987 38.2602H13.7027C13.0879 38.2602 12.6487 37.6196 12.6487 36.7228V25.3207C12.6487 24.4239 13.0879 23.7833 13.7027 23.7833Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.0596 19.6471H23.2108C23.727 19.6471 24.2433 20.412 24.2433 21.1769V36.7303C24.2433 37.6227 23.727 38.2602 23.2108 38.2602H21.0596C20.4573 38.2602 20.0271 37.6227 20.0271 36.7303V21.1769C20.0271 20.412 20.4573 19.6471 21.0596 19.6471Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M28.4381 15.5109H30.5892C31.1055 15.5109 31.6217 16.1499 31.6217 17.0445V36.7265C31.6217 37.6212 31.1055 38.2602 30.5892 38.2602H28.4381C27.8357 38.2602 27.4055 37.6212 27.4055 36.7265V17.0445C27.4055 16.1499 27.8357 15.5109 28.4381 15.5109Z"
                                        fill="#5F2DED" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M26.9989 7.6293L23.05 18.137L20.3744 15.4678C15.622 19.6266 9.96272 22.5976 3.63238 24.2568C1.36694 24.9297 0.353173 21.6176 2.74495 21.0505C8.47735 19.533 13.5443 16.8156 17.8363 13.1279L15.5453 10.8879L26.9989 7.6293Z"
                                        fill="#FFB31F" />
                                </svg>



                                <div class="service__bg__img">
                                    <svg class="service__icon__bg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M63.3775 44.4535C54.8582 58.717 39.1005 53.2202 23.1736 47.5697C7.2467 41.9192 -5.18037 32.7111 3.33895 18.4477C11.8583 4.18418 31.6595 -2.79441 47.5803 2.85105C63.5011 8.49652 71.8609 30.2313 63.3488 44.4865L63.3775 44.4535Z"
                                            fill="#5F2DED" fill-opacity="0.05" />
                                    </svg>
                                </div>
                            </div>
                            <div class="service__content">
                                <h3><a href="course-details.html">Business Studies</a></h3>
                                <p>Business is succes</p>
                            </div>
                            <div class="service__small__img">
                                <svg class="icon__hover__img" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5961 10.265L19 1.33069L10.0022 3.73285L1 6.1306L7.59393 12.6627L14.1879 19.1992L16.5961 10.265Z"
                                        stroke="#FFB31F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- populer__section__end -->


        <!-- grid__section__start -->
        <div class="gridarea gridarea__2">
            <div class="container">
                <div class="row grid__row">

                    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="fade-up">
                        <div class="section__title__2">
                            <div class="section__title__button">
                                <div class="default__small__button">Course List</div>
                            </div>
                            <div class="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                                <h2>Perfect Online Course Your Carrer</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12" data-aos="fade-up">
                        <div class="gridfilter_nav grid__filter__2 gridFilter">
                            <button class="active" data-filter="*">See All </button>
                            <button data-filter=".filter1" class="">Data science </button>
                            <button data-filter=".filter2" class="">Engineering </button>
                            <button data-filter=".filter3" class="">Featured </button>
                            <button data-filter=".filter4" class="">Architecture</button>
                        </div>
                    </div>
                </div>





                <div class="row grid" data-aos="fade-up">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
                        <div class="gridarea__wraper">
                            <div class="gridarea__img">
                                <a href="course-details.html"><img src="assets/landing_page/img/grid/grid_1.png" alt="grid"></a>
                                <div class="gridarea__small__button">
                                    <div class="grid__badge">Data & Tech</div>
                                </div>
                                <div class="gridarea__small__icon">
                                    <a href="#"><i class="icofont-heart-alt"></i></a>
                                </div>

                            </div>
                            <div class="gridarea__content">
                                <div class="gridarea__list">
                                    <ul>
                                        <li>
                                            <i class="icofont-book-alt"></i> 23 Lesson
                                        </li>
                                        <li>
                                            <i class="icofont-clock-time"></i> 1 hr 30 min
                                        </li>
                                    </ul>
                                </div>
                                <div class="gridarea__heading">
                                    <h3><a href="course-details.html">Foundation course to under stand
                                            about softwere</a></h3>
                                </div>
                                <div class="gridarea__price">
                                    $32.00 <del>/ $67.00</del>
                                    <span> <del class="del__2">Free</del></span>

                                </div>
                                <div class="gridarea__bottom">

                                    <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                            <img src="assets/landing_page/img/grid/grid_small_1.jpg" alt="grid">
                                            <div class="gridarea__small__content">
                                                <h6>Micle Jhon</h6>
                                            </div>
                                        </div>
                                    </a>

                                    <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter2 filter3">
                        <div class="gridarea__wraper">
                            <div class="gridarea__img">
                                <img src="assets/landing_page/img/grid/grid_2.png" alt="grid">
                                <div class="gridarea__small__button">
                                    <div class="grid__badge blue__color">Mechanical</div>
                                </div>
                                <div class="gridarea__small__icon">
                                    <a href="#"><i class="icofont-heart-alt"></i></a>
                                </div>

                            </div>
                            <div class="gridarea__content">
                                <div class="gridarea__list">
                                    <ul>
                                        <li>
                                            <i class="icofont-book-alt"></i> 29 Lesson
                                        </li>
                                        <li>
                                            <i class="icofont-clock-time"></i> 2 hr 10 min
                                        </li>
                                    </ul>
                                </div>
                                <div class="gridarea__heading">
                                    <h3><a href="#">Nidnies course to under stand
                                            about softwere</a></h3>
                                </div>
                                <div class="gridarea__price green__color">
                                    $32.00<del>/$67.00</del>
                                    <span>.Free</span>

                                </div>
                                <div class="gridarea__bottom">
                                    <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                            <img src="assets/landing_page/img/grid/grid_small_2.jpg" alt="grid">
                                            <div class="gridarea__small__content">
                                                <h6>Rinis Jhon</h6>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter4 filter5">
                        <div class="gridarea__wraper">
                            <div class="gridarea__img">
                                <a href="course-details.html"><img src="assets/landing_page/img/grid/grid_3.png" alt="grid"></a>
                                <div class="gridarea__small__button">
                                    <div class="grid__badge pink__color">Development</div>
                                </div>
                                <div class="gridarea__small__icon">
                                    <a href="#"><i class="icofont-heart-alt"></i></a>
                                </div>

                            </div>
                            <div class="gridarea__content">
                                <div class="gridarea__list">
                                    <ul>
                                        <li>
                                            <i class="icofont-book-alt"></i> 25 Lesson
                                        </li>
                                        <li>
                                            <i class="icofont-clock-time"></i> 1 hr 40 min
                                        </li>
                                    </ul>
                                </div>
                                <div class="gridarea__heading">
                                    <h3><a href="course-details.html">Minws course to under stand
                                            about solution</a></h3>
                                </div>
                                <div class="gridarea__price">
                                    $40.00 <del>/ $67.00</del>
                                    <span> <del class="del__2">Free</del></span>

                                </div>
                                <div class="gridarea__bottom">

                                    <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                            <img src="assets/landing_page/img/grid/grid_small_3.jpg" alt="grid">
                                            <div class="gridarea__small__content">
                                                <h6>Micle Jhon</h6>
                                            </div>
                                        </div>
                                    </a>

                                    <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter4">
                        <div class="gridarea__wraper">
                            <div class="gridarea__img">
                                <a href="course-details.html"><img src="assets/landing_page/img/grid/grid_4.png" alt="grid"></a>
                                <div class="gridarea__small__button">
                                    <div class="grid__badge green__color">Ui & UX Design</div>
                                </div>
                                <div class="gridarea__small__icon">
                                    <a href="#"><i class="icofont-heart-alt"></i></a>
                                </div>

                            </div>
                            <div class="gridarea__content">
                                <div class="gridarea__list">
                                    <ul>
                                        <li>
                                            <i class="icofont-book-alt"></i> 36 Lesson
                                        </li>
                                        <li>
                                            <i class="icofont-clock-time"></i> 3 hr 40 min
                                        </li>
                                    </ul>
                                </div>
                                <div class="gridarea__heading">
                                    <h3><a href="course-details.html">Design course to under stand
                                            about solution</a></h3>
                                </div>
                                <div class="gridarea__price">
                                    $40.00 <del>/ $67.00</del>
                                    <span> <del class="del__2">Free</del></span>

                                </div>
                                <div class="gridarea__bottom">

                                    <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                            <img src="assets/landing_page/img/grid/grid_small_4.jpg" alt="grid">
                                            <div class="gridarea__small__content">
                                                <h6>Micle Robin</h6>
                                            </div>
                                        </div>
                                    </a>

                                    <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
                        <div class="gridarea__wraper">
                            <div class="gridarea__img">
                                <a href="course-details.html"><img src="assets/landing_page/img/grid/grid_5.png" alt="grid"></a>
                                <div class="gridarea__small__button">
                                    <div class="grid__badge orange__color">Data & Tech</div>
                                </div>
                                <div class="gridarea__small__icon">
                                    <a href="#"><i class="icofont-heart-alt"></i></a>
                                </div>

                            </div>
                            <div class="gridarea__content">
                                <div class="gridarea__list">
                                    <ul>
                                        <li>
                                            <i class="icofont-book-alt"></i> 36 Lesson
                                        </li>
                                        <li>
                                            <i class="icofont-clock-time"></i> 3 hr 40 min
                                        </li>
                                    </ul>
                                </div>
                                <div class="gridarea__heading">
                                    <h3><a href="course-details.html">Data course to under stand
                                            about solution</a></h3>
                                </div>
                                <div class="gridarea__price">
                                    $40.00 <del>/ $67.00</del>
                                    <span> <del class="del__2">Free</del></span>

                                </div>
                                <div class="gridarea__bottom">

                                    <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                            <img src="assets/landing_page/img/grid/grid_small_5.jpg" alt="grid">
                                            <div class="gridarea__small__content">
                                                <h6>Micle Robin</h6>
                                            </div>
                                        </div>
                                    </a>

                                    <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter5 filter2">
                        <div class="gridarea__wraper">
                            <div class="gridarea__img">
                                <a href="course-details.html"><img src="assets/landing_page/img/grid/grid_6.png" alt="grid"></a>
                                <div class="gridarea__small__button">
                                    <div class="grid__badge yellow__color">Big Data</div>
                                </div>
                                <div class="gridarea__small__icon">
                                    <a href="#"><i class="icofont-heart-alt"></i></a>
                                </div>

                            </div>
                            <div class="gridarea__content">
                                <div class="gridarea__list">
                                    <ul>
                                        <li>
                                            <i class="icofont-book-alt"></i> 30 Lesson
                                        </li>
                                        <li>
                                            <i class="icofont-clock-time"></i> 3 hr 40 min
                                        </li>
                                    </ul>
                                </div>
                                <div class="gridarea__heading">
                                    <h3><a href="course-details.html">Big data to under stand
                                            about solution pacage</a></h3>
                                </div>
                                <div class="gridarea__price">
                                    $40.00 <del>/ $67.00</del>
                                    <span> <del class="del__2">Free</del></span>

                                </div>
                                <div class="gridarea__bottom">

                                    <a href="instructor-details.html">
                                        <div class="gridarea__small__img">
                                            <img src="assets/landing_page/img/grid/grid_small_5.jpg" alt="grid">
                                            <div class="gridarea__small__content">
                                                <h6>Micle Robin</h6>
                                            </div>
                                        </div>
                                    </a>

                                    <div class="gridarea__star">
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <span>(44)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- grid__section__end -->


        <!-- register__section__start-->
        <div class="registerarea sp_top_90">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                        <div class="registerarea__wraper">
                            <div class="section__title registerarea__section__title">
                                <div class="section__title__button">
                                    <div class="default__small__button">Course List</div>
                                </div>
                                <div class="section__title__heading heading__underline">
                                    <h2>Register Your <span>Account </span>Get free access to <small>60000</small>
                                        online course
                                    </h2>
                                </div>
                            </div>
                            <div class="registerarea__content">
                                <div class="registerarea__video">
                                    <div class="video__pop__btn">
                                        <a class="video-btn" href="https://www.youtube.com/watch?v=vHdclsdkp28"> <img
                                                src="assets/landing_page/img/icon/video.png" alt=""></a>
                                    </div>
                                    <div class="registerarea__para">
                                        <p>Learn Something new & Build Your Career From Anywhere In The World</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                        <div class="registerarea__form">
                            <div class="registerarea__form__heading">
                                <h4>Fill Your Registration</h4>
                            </div>
                            <form action="#">
                                <input class="register__input" type="text" placeholder="Your Name">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <input class="register__input" type="text" placeholder="Email Address">
                                    </div>
                                    <div class="col-xl-6">
                                        <input class="register__input" type="text" placeholder="Phone">
                                    </div>
                                </div>
                                <input class="register__input" type="text" placeholder="Address">
                                <textarea class="register__input textarea" name="#" id="#" cols="30"
                                    rows="10">Comment</textarea>
                                <div class="registerarea__button">
                                    <a class="default__button" href="#">Sign Up
                                        <i class="icofont-long-arrow-right"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div class="registerarea__img">
                <img class="register__1" src="assets/landing_page/img/register/register__1.png" alt="register">
                <img class="register__2" src="assets/landing_page/img/register/register__2.png" alt="register">
                <img class="register__3" src="assets/landing_page/img/register/register__3.png" alt="register">
            </div>
        </div>
        <!-- register__section__start-->

        <!-- team__section__start -->
        <div class="teamarea sp_bottom_100 sp_top_50">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12" data-aos="fade-up">
                        <div class="section__title__2 text-center teamarea__margin">
                            <div class="section__small__title">
                                <span>Expert teacher</span>
                            </div>
                            <div class="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                                <h2>Our Expert Teacher</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up">
                        <div class="single__team">
                            <div class="teamarea__img">
                                <img src="assets/landing_page/img/team/team__1.png" alt="team">
                                <div class="teamarea__icon">
                                    <ul>
                                        <li>
                                            <a href="#"> <i class="icofont-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-youtube-play"></i></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="teamarea__content">
                                <p>INTERIOR DESIGNER</p>
                                <h5><a href="#">Mirnsdo Jons</a></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up">
                        <div class="single__team">
                            <div class="teamarea__img">
                                <img src="assets/landing_page/img/team/team__2.png" alt="team">
                                <div class="teamarea__icon">
                                    <ul>
                                        <li>
                                            <a href="#"> <i class="icofont-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-youtube-play"></i></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="teamarea__content">
                                <p>INTERIOR DESIGNER</p>
                                <h5><a href="#">Daniel Rock</a></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up">
                        <div class="single__team">
                            <div class="teamarea__img">
                                <img src="assets/landing_page/img/team/team__3.png" alt="team">
                                <div class="teamarea__icon">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="icofont-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"> <i class="icofont-instagram"></i></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="teamarea__content">
                                <p>INTERIOR DESIGNER</p>
                                <h5><a href="#">Sajid Mustahidul</a></h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- team__section__end-->

        <!-- testimonial__section__start -->
        <div class="testimonialarea__3">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="section__title__2" data-aos="fade-up">
                            <div class="section__small__title">
                                <span>Education Solution</span>
                            </div>
                            <div class="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                                <h2>Client Testimonial About Our Lms Agency</h2>
                            </div>
                        </div>

                        <div class="testimonial__slider__active__3" data-aos="fade-up">
                            <div class="testimonialarea__paragraph__3 ">
                                <p class="testimonial__quote"><i class="icofont-quote-left quote__left"></i>The other
                                    hand we denounce with righteou indg ation and dislike men who are so beguiled and
                                    demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and
                                    demoraliz worlds ed by the charms of pleasure of the moment. Lorem ipsum dolor sit
                                    amet, consec elit.<i class="icofont-quote-right quote__right"></i></p>

                                <div class="testimonialarea__person__3">
                                    <div class="testimonial__img__3">
                                        <img src="assets/landing_page/img/testimonial/testi_2.png" alt="">
                                    </div>
                                    <div class="testimonial__name">
                                        <h6><a href="#">Mirnsdo Jons</a></h6>
                                        <span>Ui/Ux Designer</span>
                                    </div>
                                </div>

                            </div>

                            <div class="testimonialarea__paragraph__3 ">
                                <p class="testimonial__quote"><i class="icofont-quote-left quote__left"></i>The other
                                    hand we denounce with righteou indg ation and dislike men who are so beguiled and
                                    demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and
                                    demoraliz worlds ed by the charms of pleasure of the moment. Lorem ipsum dolor sit
                                    amet, piscing elit.<i class="icofont-quote-right quote__right"></i></p>

                                <div class="testimonialarea__person__3">
                                    <div class="testimonial__img__3">
                                        <img src="assets/landing_page/img/testimonial/testi_2.png" alt="">
                                    </div>
                                    <div class="testimonial__name">
                                        <h6><a href="#">Mirnsdo Jons</a></h6>
                                        <span>Ui/Ux Designer</span>
                                    </div>
                                </div>
                            </div>

                            <div class="testimonialarea__paragraph__3 ">
                                <p class="testimonial__quote"><i class="icofont-quote-left quote__left"></i>The other
                                    hand we denounce with righteou indg ation and dislike men who are so beguiled and
                                    demorali ed by the of pleasure of the moment.Dislike men who are so beguiled and
                                    demoraliz worlds ed by the charms of pleasure of the moment. Lorem ipsum dolor sit
                                    amet.<i class="icofont-quote-right quote__right"></i></p>

                                <div class="testimonialarea__person__3">
                                    <div class="testimonial__img__3">
                                        <img src="assets/landing_page/img/testimonial/testi_2.png" alt="">
                                    </div>
                                    <div class="testimonial__name">
                                        <h6><a href="#">Mirnsdo Jons</a></h6>
                                        <span>Ui/Ux Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                        <div class="testimonial__group__img" data-tilt>
                            <img src="assets/landing_page/img/testimonial/testi__group__1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- testimonial__section__start -->

        <!-- blog__section__start -->
        <div class="blogarea__2 sp_top_100 sp_bottom_100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12" data-aos="fade-up">
                        <div class="section__title__2 text-center teamarea__margin">
                            <div class="section__small__title">
                                <span>News & Blog</span>
                            </div>
                            <div class="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                                <h2>Latest News & Blogs</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                        <div class="single__blog__wraper">
                            <div class="single__blog__img">
                                <img src="assets/landing_page/img/blog/blog_5.png" alt="blog">
                                <div class="single__blog__button">
                                    <a class="default__button" href="#">Story</a>
                                </div>
                            </div>
                            <div class="single__blog__content">
                                <p>13 january 2023</p>
                                <h4> <a href="#">Facebook design is dedicated to what's new in design </a></h4>
                                <div class="single__blog__bottom__button">
                                    <a href="#">Read More
                                        <i class="icofont-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                        <div class="single__blog__wraper">
                            <div class="single__blog__img">
                                <img src="assets/landing_page/img/blog/blog_24.png" alt="blog">
                                <div class="single__blog__button">
                                    <a class="default__button" href="#">Story</a>
                                </div>
                            </div>
                            <div class="single__blog__content">
                                <p>13 january 2023</p>
                                <h4> <a href="#">Facebook design is dedicated to what's new in design </a></h4>
                                <div class="single__blog__bottom__button">
                                    <a href="#">Read More
                                        <i class="icofont-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                        <div class="single__blog__wraper">
                            <div class="single__blog__img">
                                <img src="assets/landing_page/img/blog/blog_25.png" alt="blog">
                                <div class="single__blog__button">
                                    <a class="default__button" href="#">Story</a>
                                </div>
                            </div>
                            <div class="single__blog__content">
                                <p>13 january 2023</p>
                                <h4> <a href="#">Facebook design is dedicated to what's new in design </a></h4>
                                <div class="single__blog__bottom__button">
                                    <a href="#">Read More
                                        <i class="icofont-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12" data-aos="fade-up">
                        <div class="blogarea__bottom__button">
                            <a class="default__button" href="#">MORE BLOG</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- blog__section__end -->

        <!-- footer__section__start -->
        <div class="footerarea">
            <div class="container">
                <div class="footerarea__newsletter__wraper">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                            <div class="footerarea__text">
                                <h3>Still You Need Our <span>Support</span> ?</h3>
                                <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                            <div class="footerarea__newsletter">
                                <div class="footerarea__newsletter__input">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your email here">
                                        <div class="footerarea__newsletter__button">
                                            <button type="submit" class="subscribe__btn">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footerarea__wrapper footerarea__wrapper__2">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                            <div class="footerarea__inner footerarea__about__us">
                                <div class="footerarea__heading">
                                    <h3>About us</h3>
                                </div>
                                <div class="footerarea__content">
                                    <p>orporate clients and leisure travelers has been relying on Groundlink for
                                        dependable safe, and professional chauffeured car end service in major cities
                                        across World.</p>
                                </div>
                                <div class="foter__bottom__text">
                                    <div class="footer__bottom__icon">
                                        <i class="icofont-clock-time"></i>
                                    </div>
                                    <div class="footer__bottom__content">
                                        <h6>Opening Houres</h6>
                                        <span>Mon - Sat(8.00 - 6.00)</span>
                                        <span>Sunday - Closed</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2  col-md-6 col-sm-6" data-aos="fade-up">
                            <div class="footerarea__inner">
                                <div class="footerarea__heading">
                                    <h3>Usefull Links</h3>
                                </div>
                                <div class="footerarea__list">
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Teachers</a>
                                        </li>
                                        <li>
                                            <a href="#">Partner</a>
                                        </li>
                                        <li>
                                            <a href="#">Room-Details</a>
                                        </li>
                                        <li>
                                            <a href="#">Gallery</a>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                            <div class="footerarea__inner footerarea__padding__left">
                                <div class="footerarea__heading">
                                    <h3>Course</h3>
                                </div>
                                <div class="footerarea__list">
                                    <ul>
                                        <li>
                                            <a href="#">Ui Ux Design</a>
                                        </li>
                                        <li>
                                            <a href="#">Web Development</a>
                                        </li>
                                        <li>
                                            <a href="#">Business Strategy</a>
                                        </li>
                                        <li>
                                            <a href="#">Softwere Development</a>
                                        </li>
                                        <li>
                                            <a href="#">Business English</a>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                            <div class="footerarea__right__wraper footerarea__inner">
                                <div class="footerarea__heading">
                                    <h3>Recent Post</h3>
                                </div>
                                <div class="footerarea__right__list">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div class="footerarea__right__img">
                                                    <img src="assets/landing_page/img/footer/footer__1.png" alt="footerphoto">
                                                </div>
                                                <div class="footerarea__right__content">
                                                    <span>02 Apr 2023 </span>
                                                    <h6>Best Your Business</h6>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="footerarea__right__img">
                                                    <img src="assets/landing_page/img/footer/footer__2.png" alt="footerphoto">
                                                </div>
                                                <div class="footerarea__right__content">
                                                    <span>02 Apr 2023 </span>
                                                    <h6>Keep Your Business</h6>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <div class="footerarea__right__img">
                                                    <img src="assets/landing_page/img/footer/footer__3.png" alt="footerphoto">
                                                </div>
                                                <div class="footerarea__right__content">
                                                    <span>02 Apr 2023 </span>
                                                    <h6>Nice Your Business</h6>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footerarea__copyright__wrapper footerarea__copyright__wrapper__2">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3">
                            <div class="copyright__logo">
                                <a href="https://html.themewin.com/"><img src="assets/landing_page/img/logo/logo_2.png" alt="logo"></a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="footerarea__copyright__content footerarea__copyright__content__2">
                                <p>Copyright © <span>2023</span> by edurock. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3">
                            <div class="footerarea__icon footerarea__icon__2">
                                <ul>
                                    <li><a href="http://facebook.com/"><i class="icofont-facebook"></i></a></li>
                                    <li><a href="http://twitter.com/"><i class="icofont-twitter"></i></a></li>
                                    <li><a href="http://vimeo.com/"><i class="icofont-vimeo"></i></a></li>
                                    <li><a href="http://linkedin.com/"><i class="icofont-linkedin"></i></a></li>
                                    <li><a href="http://skype.com/"><i class="icofont-skype"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- footer__section__end -->




    </main>





    <!-- JS here -->
    <script src="{{asset("assets/landing_page/js/vendor/modernizr-3.5.0.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/vendor/jquery-3.6.0.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/popper.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/bootstrap.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/isotope.pkgd.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/slick.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/jquery.meanmenu.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/ajax-form.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/wow.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/jquery.scrollUp.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/imagesloaded.pkgd.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/jquery.magnific-popup.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/waypoints.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/jquery.counterup.min.js")}}"></script>
    <script src="{{asset("assets/landing_page/js/plugins.js")}}"></script>
    <script src="../../../cdn.jsdelivr.net/npm/swiper%409/swiper-bundle.min.js"></script>
    <script src="{{asset("assets/landing_page/js/main.js")}}"></script>

    <script>
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          document.getElementById("light--to-dark-button")?.classList.add("dark--mode");
        } 
        if (localStorage.getItem("theme-color") === "light") {
          document.getElementById("light--to-dark-button")?.classList.remove("dark--mode");
        } 
    </script>


</body>

</html>