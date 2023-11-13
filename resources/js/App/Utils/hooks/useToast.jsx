import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToast } from "../Reducers/PageSlice";
import { motion } from "framer-motion";
import ProgressBar from "@/App/Components/ProgressBar";

export default function useToast() {
    const toastState = useSelector((state) => state.page.toast);
    const dispatch = useDispatch();
    const toastOn = toastState.show;
    const currentTime = new Date();

    useEffect(() => {
        console.log(`toast muncul : ${toastOn}`);
        const exists = document.getElementById("liveToast");
        if (exists) {
            if (toastOn) {
                setTimeout(() => {
                    togglegToast(false);
                    document
                        .getElementById("liveToast")
                        .classList.remove("show");
                }, 6000);
            }

            toastOn
                ? document.getElementById("liveToast").classList.add("show")
                : document.getElementById("liveToast").classList.remove("show");
        }
    }, [toastOn]);

    const togglegToast = (e) => {
        dispatch(toggleToast({ show: e, text: "muncul" }));
    };

    const toast = toastOn && (
        <div>
            <motion.div
                animate={{ y: 0, display: "block" }}
                initial={{ y: 100, display: "none" }}
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
                class="position-fixed end-0 p-3"
                style={{ zIndex: 10000, top: 60 }}
            >
                <div
                    id="liveToast"
                    class="toast fade"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div class="toast-header">
                        <i class="uil uil-bell"></i>
                        <strong class="me-auto">Notification</strong>
                        <small>{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</small>
                        <button
                            onClick={() => togglegToast(false)}
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="toast-body">{toastState.text}</div>
                    <ProgressBar />
                </div>
            </motion.div>
        </div>
    );

    return { toast, toastOn };
}
