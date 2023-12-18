import { aloneIll_img, teamIll_img } from "@/App/Theme/images";
import { formatRupiah } from "@/App/Utils/helpers";
import React from "react";

export default function PaketCard({ data, onBuy }) {
    return (
        <div class="card plan-box">
            <div class="card-body p-4">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h4 className="mb-2">{data.title}</h4>
                        <p class="text-muted">{data.paket_name}</p>
                    </div>
                    <div class="flex-shrink-0 ms-3">
                        <i class="bx bx-run h1 text-primary"></i>
                    </div>
                </div>
                <div class="py-4">
                    <del>
                        {" "}
                        <h4 className="text-muted">
                            {formatRupiah(data.base_price)}
                        </h4>
                    </del>
                    <h2 className="p-0 m-0">
                        {formatRupiah(data.reduced_price)} /{" "}
                        <span class="font-size-13">Tahun</span>
                    </h2>
                </div>

                <div class="plan-features">
                    {Object.keys(data.feature).map((e) => {
                        return (
                            <p className="text-capitalize">
                                <i class="fas fa-check text-primary me-2"></i>{" "}
                                {data.feature[e]} {e.replace("_", " ")}
                            </p>
                        );
                    })}
                </div>

                <div className="mt-4">
                    <button
                        disabled={data.is_subscribed}
                        onClick={onBuy}
                        class="w-100 btn btn-primary waves-effect waves-light"
                    >
                        {data.is_subscribed ? "Sudah Aktif" : "Beli Sekarang"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export function PaketCategoryCard({ data, onCekPaket }) {
    const categoryIllustration = {
        paket_mandiri: aloneIll_img,
        paket_bimbel: teamIll_img,
        unknown: aloneIll_img,
    };

    let slugging = data.title.toLowerCase().replace(" ", "_");

    return (
        <div class="card plan-box">
            <div class="card-body p-4">
                <div
                    style={{
                        width: 100 + "%",
                        height: 150 + "px",
                        backgroundImage:
                            "url(" + categoryIllustration[slugging] + ")",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div class="d-flex mt-5">
                    <div class="flex-grow-1">
                        <h4 className="mb-2">{data.title}</h4>
                        <p class="text-muted">{data.description}</p>
                    </div>
                    <div class="flex-shrink-0 ms-3">
                        <i class="bx bx-run h1 text-primary"></i>
                    </div>
                </div>
                <div class="text-center plan-btn mt-4">
                    <a
                        onClick={onCekPaket}
                        href="javascript: void(0);"
                        class="btn btn-primary waves-effect waves-light w-100"
                    >
                        Cek Paket
                    </a>
                </div>
            </div>
        </div>
    );
}
