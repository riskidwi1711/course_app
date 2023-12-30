import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToast } from "../Reducers/PageSlice";
import { motion } from "framer-motion";
import ProgressBar from "@/App/Components/ProgressBar";

export default function useToast() {
    const toastState = useSelector((state) => state.page.toast);
    const dispatch = useDispatch();
    const toastOn = toastState.show;
    const currentTime = new Date();

    const toggleToastCallback = useCallback(
        (e) => {
            dispatch(toggleToast({ show: e, text: "" }));
        },
        [toastOn]
    );

    const hideToast = () => {
        document.getElementById("liveToast").classList.remove("show");
    };

    const showToast = () => {
        document.getElementById("liveToast").classList.add("show");
    };

    useEffect(() => {
        if (document.getElementById("liveToast")) {
            toastOn ? showToast() : hideToast();
        }
    }, [toggleToastCallback]);

    // useEffect(() => {
    //     if (toastOn) {
    //         setTimeout(() => {
    //             toggleToastCallback(false);
    //             hideToast();
    //         }, 6000);
    //     }
    // }, [toastOn]);

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
                className="position-fixed end-0 p-3"
                style={{ zIndex: 10000, top: 60 }}
            >
                <div
                    id="liveToast"
                    className="toast fade"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"

                    style={{backgroundColor: 'white'}}
                >
                    <div className="toast-header">
                        <i className="uil uil-bell"></i>
                        <strong className="me-auto">Notifikasi</strong>
                        <small>{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</small>
                        <button
                            onClick={() => toggleToastCallback(false)}
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body">{toastState.text}</div>
                    {/* <ProgressBar /> */}
                </div>
            </motion.div>
        </div>
    );

    return { toast, toastOn };
}
