import React from "react";
import { Pre_img } from "../Theme/images";

export function FullIndicators() {
    return (
        <div id="back__preloader">
            <div id="back__circle_loader"></div>
            <div class="back__loader_logo">
                <img src={Pre_img} alt="Preload" />
            </div>
        </div>
    );
}

export function WindowIndicators() {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: 80 + "vh" }}
        >
            <div class="spinner-border font-color-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default FullIndicators;
