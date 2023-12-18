import React from "react";
import To from "../Link/Link";
import { motion } from "framer-motion";

export default function Item({ onClick, e, isSubActive }) {
    const variants = {
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
    return (
        <motion.li
            className="sub_menu--item"
            variants={variants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <To
                onClick={onClick}
                href={e.url}
                
                className={`sub_menu--link ${isSubActive && "active"}`}
            >
                {e.title}
            </To>
        </motion.li>
    );
}
