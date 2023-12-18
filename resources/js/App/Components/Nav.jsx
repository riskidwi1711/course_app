import { usePage, useRemember } from "@inertiajs/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import To from "./Link/Link";

import { motion } from "framer-motion";
import Item from "./Nav/Item";
import NavFooter from "./Nav/NavFooter";
import { setCurrentMenu } from "../Utils/Reducers/PageSlice";

export default function Nav({ menu }) {
    const { url } = usePage();
    const dispatch = useDispatch();
    const currentMenu = useSelector(state=>state.page.currentMenu)
    const [showSubMenu, ToggleSubMenu] = useState(false);
    const [selectedSub, setSelectedSub] = useRemember("");

    const handleClickSub = (title) => {
        ToggleSubMenu(true);
        setSelectedSub(title);
        dispatch(setCurrentMenu(title))
    };

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    const variantsParent = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    };

    const groupedObject = menu.reduce((result, item) => {
        const section = item.section;

        if (!result[section]) {
            result[section] = [];
        }

        result[section].push(item);

        return result;
    }, {});

    return (
        <nav className="vertical_nav">
            <div className="left_section menu_left" id="js-menu">
                {groupedObject &&
                    Object.keys(groupedObject).map((key, index) => {
                        return (
                            <div key={index} className="left_section">
                                <h6 class="left_title text-capitalize">
                                    {key}
                                </h6>
                                <motion.ul
                                    className="ps-0"
                                    animate={groupedObject ? "open" : "closed"}
                                    variants={variants}
                                >
                                    {Object.values(groupedObject[key]).map(
                                        (val) => {
                                            let hasSub =
                                                typeof val.sub === "undefined"
                                                    ? false
                                                    : true;
                                            if (!hasSub) {
                                                return (
                                                    <li className="menu--item">
                                                        <To
                                                            href={val.url}
                                                            className={`menu--link ${
                                                                val.url ===
                                                                    url &&
                                                                "active"
                                                            }`}
                                                            title="Home"
                                                        >
                                                            <i
                                                                className={`uil ${val.icon} menu--icon`}
                                                            ></i>
                                                            <span className="menu--label">
                                                                {val.title}
                                                            </span>
                                                        </To>
                                                    </li>
                                                );
                                            } else {
                                                let isShow = url.startsWith(
                                                    "/dashboard/" +
                                                        val.title.toLowerCase()
                                                );
                                                return (
                                                    <motion.li
                                                        className="menu--item menu--item__has_sub_menu"
                                                        variants={
                                                            variantsParent
                                                        }
                                                        whileHover={{
                                                            scale: 1,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.95,
                                                        }}
                                                    >
                                                        <label
                                                            onClick={() =>
                                                                handleClickSub(
                                                                    val.title
                                                                )
                                                            }
                                                            className={`menu--link mb-0 ${
                                                                (isShow ||
                                                                    selectedSub ===
                                                                        val.title) &&
                                                                "active"
                                                            }`}
                                                            title={val.title}
                                                        >
                                                            <i
                                                                className={`uil ${val.icon} menu--icon`}
                                                            ></i>
                                                            <span className="menu--label text-capitalize">
                                                                {val.title.replace(
                                                                    "_",
                                                                    " "
                                                                )}
                                                            </span>
                                                        </label>
                                                        <motion.ul
                                                            animate={
                                                                currentMenu ==
                                                                val.title
                                                                    ? "open"
                                                                    : "closed"
                                                            }
                                                            variants={variants}
                                                            className="sub_menu"
                                                            style={{
                                                                display:
                                                                    (currentMenu == val.title) &&
                                                                    "block",
                                                            }}
                                                        >
                                                            {Object.values(
                                                                val.sub
                                                            ).map(
                                                                (e, index) => {
                                                                    let isSubActive =
                                                                        e.url ===
                                                                        url;

                                                                    return (
                                                                        <Item
                                                                            key={
                                                                                index +
                                                                                e.title
                                                                            }
                                                                            e={
                                                                                e
                                                                            }
                                                                            isSubActive={
                                                                                isSubActive
                                                                            }
                                                                        />
                                                                    );
                                                                }
                                                            )}
                                                        </motion.ul>
                                                    </motion.li>
                                                );
                                            }
                                        }
                                    )}
                                </motion.ul>
                            </div>
                        );
                    })}
                <NavFooter />
            </div>
        </nav>
    );
}
