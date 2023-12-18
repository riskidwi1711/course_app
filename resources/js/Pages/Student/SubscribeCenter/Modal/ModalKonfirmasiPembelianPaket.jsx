import { toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { formatRupiah } from "@/App/Utils/helpers";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function ModalKonfirmasiPembelianPaket({ detailPaket }) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const handleCheckKodeVoucher = () => {
        dispatch(
            toggleToast({
                show: true,
                text: "Maaf kode voucher yang kamu masukan tidak dapat dipakai",
            })
        );
    };

    const handleConfirm = () => {
        setIsLoading(true);
        let data = {
            status_id: 0,
            product: detailPaket.title,
            voucher_code: "",
            payment_method: "bank transfer",
            amount: detailPaket.reduced_price,
            fee: 0,
            total_amount: detailPaket.reduced_price,
            paket_id: detailPaket.id,
        };
        router.post(route("student.transaction"), data, {
            onBefore: () => setIsLoading(true),
            onFinish: () => setIsLoading(false),
            onSuccess: () => {
                dispatch(
                    toggleToast({
                        show: true,
                        text: "Berhasil membeli paket, silahkan cek pada menu paket saya",
                    })
                );
            },
        });
    };

    return (
        <div>
            <div class="mb-4 text-left">
                <h3 className="p-0 m-0 mb-1">{detailPaket.title}</h3>
                <h3 className="p-0 m-0 fw-bold">
                    {formatRupiah(detailPaket.reduced_price)}
                </h3>
            </div>
            <div class="plan-features">
                {Object.keys(detailPaket.feature).map((e) => {
                    return (
                        <p className="text-capitalize">
                            <i class="fas fa-check text-primary me-2"></i>{" "}
                            {detailPaket.feature[e]} {e.replace("_", " ")}
                        </p>
                    );
                })}
                <p className="text-capitalize">
                    <i class="fas fa-check text-primary me-2"></i>Aktif selama 1
                    tahun
                </p>
            </div>
            <hr className="border my-4" />
            <div>
                <p className="fs-5 m-0 p-0 mb-3">Gunakan kode voucher</p>
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                    />
                    <button
                        onClick={handleCheckKodeVoucher}
                        class="btn btn-outline-primary"
                        type="button"
                        id="inputGroupFileAddon04"
                    >
                        Gunakan
                    </button>
                </div>
            </div>
            <div className="d-flex gap-2 mt-4 justify-content-end">
                <button
                    onClick={handleConfirm}
                    className="btn btn-primary"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div
                            class="spinner-border spinner-border-sm me-2"
                            role="status"
                        >
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <i class="uil uil-shopping-cart-alt"></i>
                    )}
                    Beli sekarang
                </button>
                <button className="btn btn-danger disabled">Batal</button>
            </div>
        </div>
    );
}
