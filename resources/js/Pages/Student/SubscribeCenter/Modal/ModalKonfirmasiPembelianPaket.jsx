import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { formatRupiah } from "@/App/Utils/helpers";
import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ModalPaymentTitle from "../../TransactionHistory/Modal/ModalPaymentTitle";
import ModalPayment from "../../TransactionHistory/Modal/ModalPayment";

export default function ModalKonfirmasiPembelianPaket({ detailPaket }) {
    const [isLoading, setIsLoading] = useState(false);
    const [checkVoucherLoading, setIsVoucherLoading] = useState(false);
    const [voucherCode, setVoucherCode] = useState(null);
    const [voucherDetail, setVoucherDetail] = useState(null);
    const [amount, setAmount] = useState(detailPaket.reduced_price);
    const dispatch = useDispatch();
    const handleCheckKodeVoucher = () => {
        setIsVoucherLoading(true);
        router.post(
            route("student.transaction.check_voucher", { code: voucherCode }),
            {},
            {
                onBefore: () => setIsVoucherLoading(true),
                onError: () => setIsVoucherLoading(false),
                onFinish: () => setIsVoucherLoading(false),
                onSuccess: (data) => {
                    let response_data = data.props.response;
                    console.log(response_data);
                    if (response_data) {
                        if (response_data.status === "00") {
                            setVoucherDetail(response_data.data);
                            dispatch(
                                toggleToast({
                                    show: true,
                                    text: "Yeay, kamu mendapatkan potongan harga!",
                                })
                            );
                        } else {
                            setVoucherDetail(null);
                            dispatch(
                                toggleToast({
                                    show: true,
                                    text: "Kode voucher yang dimasukan salah/tidak terdaftar!",
                                })
                            );
                        }
                    }
                },
            }
        );
    };

    useEffect(() => {
        if (voucherDetail) {
            let discount_price = calculateDiscount(
                detailPaket.reduced_price,
                voucherDetail.discount
            );
            setAmount(discount_price);
        }
    }, [voucherDetail]);

    const calculateDiscount = (base_price, discount) => {
        let discount_price = (base_price * discount) / 100;
        let reduced_price = base_price - discount_price
        return reduced_price;
    };

    const calculateDiffDiscount = (base_price, discount_price) => {
        return base_price - discount_price;
    };

    const handleConfirm = () => {
        setIsLoading(true);
        let data = {
            status_id: 0,
            product: detailPaket.title,
            voucher_code: voucherDetail ? voucherDetail.code : "",
            payment_method: "bank transfer",
            amount: detailPaket.amount,
            fee: 0,
            total_amount: detailPaket.reduced_price,
            paket_id: detailPaket.id,
        };
        router.post(route("student.transaction"), data, {
            onBefore: () => setIsLoading(true),
            onFinish: () => setIsLoading(false),
            onSuccess: (data) => {
                let response_data = data.props.response;
                if (response_data) {
                    if (response_data.invoice_url) {
                        dispatch(
                            toggleModal({
                                title: <ModalPaymentTitle />,
                                component: <ModalPayment url={response_data.invoice_url} />,
                                size: "md",
                                show: true,
                            })
                        );
                    }
                    dispatch(
                        toggleToast({
                            show: true,
                            text: "Berhasil membuat pesanan, silahkan lakukan pembayaran atau cek pada transaksi saya",
                        })
                    );
                }
            },
        });
    };

    return (
        <div>
            <div class="mb-4 text-left">
                <h3 className="p-0 m-0 mb-1">{detailPaket.title}</h3>

                {voucherDetail ? (
                    <>
                        <del>
                            {" "}
                            <h4 className="text-muted">
                                {formatRupiah(detailPaket.reduced_price)}
                            </h4>
                        </del>
                        <h3 className="p-0 m-0 my-2 fw-bold">
                            {formatRupiah(
                                calculateDiscount(
                                    detailPaket.reduced_price,
                                    voucherDetail.discount
                                )
                            )}
                        </h3>
                        <p>
                            Kamu menggunakan kode voucher{" "}
                            <strong>{voucherDetail.code}</strong>, kamu berhemat
                            sebanyak{" "}
                            <strong>
                                {formatRupiah(
                                    calculateDiffDiscount(
                                        detailPaket.reduced_price,
                                        calculateDiscount(
                                            detailPaket.reduced_price,
                                            voucherDetail.discount
                                        )
                                    )
                                )}
                            </strong>
                        </p>
                    </>
                ) : (
                    <h3 className="p-0 m-0 fw-bold">
                        {formatRupiah(detailPaket.reduced_price)}
                    </h3>
                )}
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
                        onChange={(e) => setVoucherCode(e.target.value)}
                    />
                    <button
                        onClick={handleCheckKodeVoucher}
                        className="btn btn-primary"
                        disabled={isLoading}
                    >
                        {checkVoucherLoading ? (
                            <div
                                class="spinner-border spinner-border-sm me-2"
                                role="status"
                            >
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            "Gunakan"
                        )}
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
