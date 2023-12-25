import React from "react";
import PageTitle from "./PageTitle";
import { motion } from "framer-motion";

export default function ContentWrapper({ children, pageIdentity }) {
    return (
        <motion.div
            className="row px-4"
            animate={{ y: 0 }}
            initial={{ y: 100 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.71, 1],
                y: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.05,
                },
            }}
        >
            <div className="col-12">
                <PageTitle pageIdentity={pageIdentity}/>
                
                {children}
            </div>
        </motion.div>
    );
}
