import { emptyIll_img } from "@/App/Theme/images";
import React from "react";

export default function Empty({ identity }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center pt-5">
            <img
                src={emptyIll_img}
                alt=""
                className="img-fluid"
                style={{ maxWidth: 30 + "%" }}
            />
            <div className="text-center mt-4">
                <h3 className="fw-bold">Ups!</h3>
                <p>Maaf {identity} belum tersedia, cek lagi nanti ya..</p>
            </div>
        </div>
    );
}
