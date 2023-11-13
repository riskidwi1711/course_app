import React, { useEffect, useState } from "react";
import { HdDp_img, MainLogo_img } from "../Theme/images";
import useScreenWidth from "../Utils/hooks/useScreenWidth";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [showUserMenu, ToggleUserMenu] = useState(false);
    const [showNav, ToggleNav] = useState(true);
    const { screenWidth } = useScreenWidth();

    const handleShowNav = () => {
        ToggleNav(!showNav);
    };

    const hideNav = () => {
        let nav = document.getElementsByClassName("vertical_nav");
        let wrapper = document.getElementsByClassName("wrapper");
        nav[0].classList.remove("vertical_nav__minify");
        wrapper[0].style.marginLeft = 0 + "px";
        nav[0].classList.remove("vertical_nav__opened");
        nav[0].style.left = -240 + "px";
    };

    const openNav = () => {
        let nav = document.getElementsByClassName("vertical_nav");
        let wrapper = document.getElementsByClassName("wrapper");
        nav[0].classList.remove("vertical_nav__minify");
        screenWidth < 992 ? wrapper[0].style.marginLeft = 0 + "px" : wrapper[0].style.marginLeft = 240 + "px" 
        nav[0].classList.add("vertical_nav__opened");
        nav[0].style.left = 0 + "px";
    };

    useEffect(() => {
        showNav ? openNav() : hideNav();
    }, [showNav]);

    useEffect(() => {
        let nav = document.getElementsByClassName("vertical_nav");
        let wrapper = document.getElementsByClassName("wrapper");
        if (screenWidth < 992) {
            hideNav();
        }
    }, []);

    return (
        <header className="header clearfix">
            <button
                type="button"
                id="toggleMenu"
                className="toggle_menu"
                onClick={() => ToggleNav(!showNav)}
            >
                <i className="uil uil-bars"></i>
            </button>
            <button
                id="collapse_menu"
                className="collapse_menu"
                onClick={() => handleShowNav()}
            >
                <i className="uil uil-bars collapse_menu--icon "></i>
                <span className="collapse_menu--label"></span>
            </button>
            <div className="main_logo" id="logo">
                <a href="index.html">
                    <img src={MainLogo_img} alt="" />
                </a>
                <a href="index.html">
                    <img
                        className="logo-inverse"
                        src="images/ct_logo.svg"
                        alt=""
                    />
                </a>
            </div>
            <div className="search120">
                <div className="ui search">
                    <div className="ui left icon input swdh10">
                        <input
                            className="prompt srch10"
                            type="text"
                            placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                        />
                        <i className="uil uil-search-alt icon icon1"></i>
                    </div>
                </div>
            </div>
            <div className="header_right">
                <ul>
                    <li className="ui dropdown">
                        <a
                            href="#"
                            onClick={() => ToggleUserMenu(!showUserMenu)}
                            className="opts_account"
                            title="Account"
                        >
                            <img src={HdDp_img} alt="" />
                        </a>
                        <div
                            className="menu dropdown_account"
                            style={
                                showUserMenu
                                    ? {
                                          display: "block",
                                          right: 0 + "px",
                                          left: "unset",
                                      }
                                    : {}
                            }
                        >
                            <div className="channel_my">
                                <div className="profile_link">
                                    <img src={HdDp_img} alt="" />
                                    <div className="pd_content">
                                        <div className="rhte85">
                                            <h6>Joginder Singh</h6>
                                            <div
                                                className="mef78"
                                                title="Verify"
                                            >
                                                <i className="uil uil-check-circle"></i>
                                            </div>
                                        </div>
                                        <span>gambol943@gmail.com</span>
                                    </div>
                                </div>
                                <a
                                    href="my_instructor_profile_view.html"
                                    className="dp_link_12"
                                >
                                    View Instructor Profile
                                </a>
                            </div>
                            <div className="night_mode_switch__btn">
                                <a
                                    href="#"
                                    id="night-mode"
                                    className="btn-night-mode"
                                >
                                    <i className="uil uil-moon"></i> Night mode
                                    <span className="btn-night-mode-switch">
                                        <span className="uk-switch-button"></span>
                                    </span>
                                </a>
                            </div>
                            <a
                                href="instructor_dashboard.html"
                                className="item channel_item"
                            >
                                Cursus dashboard
                            </a>
                            <a
                                href="membership.html"
                                className="item channel_item"
                            >
                                Paid Memberships
                            </a>
                            <a
                                href="setting.html"
                                className="item channel_item"
                            >
                                Setting
                            </a>
                            <a href="help.html" className="item channel_item">
                                Help
                            </a>
                            <a
                                href="feedback.html"
                                className="item channel_item"
                            >
                                Send Feedback
                            </a>
                            <Link
                                href="/logout"
                                className="item channel_item"
                                method="post"
                            >
                                Sign Out
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}
