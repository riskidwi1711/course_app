import React from "react";
import { LogoNip_img, Pre_img } from "../Theme/images";

export function FullIndicators() {
    return (
        <div id="back__preloader">
            <div id="back__circle_loader"></div>
            <div class="back__loader_logo">
                <img src={LogoNip_img} alt="Preload" />
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

export function MiniSpinner() {
    return (
        <div class="spinner-border text-light spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
}

export function Spinner() {
    return (
        <div class="spinner-border spinner-border-sm " role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
}

export function ComponentSpiner() {
    return (
        <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{
                minHeight: 100 + "vh",
                height:100+"%",
                position: "absolute",
                top: 0,
                zIndex: 99,
                backgroundColor: "rgb(0 0 0 / 9%)",
            }}
        >
            <div
                style={{
                    width: 100 + "px",
                    height: 50 + "px",
                    padding: 12 + "px",
                }}
                className="bg-white shadow rounded d-flex justify-content-center align-items-center"
            >
                <div
                    class="spinner-border spinner-border-sm text-primary m-0 p-0"
                    role="status"
                >
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
}
