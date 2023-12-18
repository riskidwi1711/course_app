import React, { useEffect, useState } from "react";
import { HdDp_img, MainLogo_img } from "../Theme/images";
import useScreenWidth from "../Utils/hooks/useScreenWidth";
import { Link, router } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../Utils/Reducers/PageSlice";
import { ModalImportSoalTitle } from "@/Pages/Soal/SoalCreate";
import BaseModalTitle from "./Base/Modal/BaseModalTitle";
import NotificationCard from "./Cards/NotificationCard";

export function ModalNotificationTitle() {
    return (
        <BaseModalTitle
            icon="uil uil-bell"
            title="Aktifitas & Notifikasi"
            description="Semua aktifitas dan notifikasi akan muncul disini"
        />
    );
}

export function ModalNotification() {
    return (
        <div className="row">
            <NotificationCard/>
        </div>
    );
}

export default function Header() {
    const userData = useSelector((state) => state.userData);
    const [showUserMenu, ToggleUserMenu] = useState(false);
    const [showNav, ToggleNav] = useState(true);
    const { screenWidth } = useScreenWidth();
    const dispatch = useDispatch();

    const handleShowNav = () => {
        ToggleNav(!showNav);
    };

    const handleShowCart = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <ModalNotification />,
                size: "md",
                title: <ModalNotificationTitle />,
            })
        );
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
        screenWidth < 992
            ? (wrapper[0].style.marginLeft = 0 + "px")
            : (wrapper[0].style.marginLeft = 240 + "px");
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
                <Link href="/dashboard">
                    <p className="fs-4 fw-bold">NIPASN</p>
                </Link>
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
                    <li>
                        <a
                            onClick={handleShowCart}
                            class="option_links"
                            title="cart"
                        >
                            <i class="uil uil-bell"></i>
                            <span class="noti_count">2</span>
                        </a>
                    </li>
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
                                            <h6>{userData.user.name}</h6>
                                            <div
                                                className="mef78"
                                                title="Verify"
                                            >
                                                <i className="uil uil-check-circle"></i>
                                            </div>
                                        </div>
                                        <span>{userData.user.email}</span>
                                    </div>
                                </div>
                                <Link
                                    href={route('student.show_profile')}
                                    className="dp_link_12"
                                >
                                    Lihat Profil Saya
                                </Link>
                            </div>
                            <Link
                                href={route('student.show_transaction_history')}
                                className="item channel_item"
                            >
                                Riwayat Transaksi
                            </Link>
                            <Link
                                href="/logout"
                                className="item channel_item"
                                method="post"
                            >
                                Keluar
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}
