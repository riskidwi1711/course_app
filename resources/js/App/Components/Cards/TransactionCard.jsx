import React from "react";
import { Card } from "../Card";
import { formatRupiah } from "@/App/Utils/helpers";

export default function TransactionCard({
    title,
    amount,
    status,
    onCheckout,
    date,
}) {
    const button_status = {
        0: (
            <button className="btn btn-outline-warning btn-sm">
                <i className="uil uil-hourglass"></i> Belum dibayar
            </button>
        ),
        1: (
            <button className="btn btn-outline-danger btn-sm">
                <i className="uil uil-hourglass"></i> Gagal
            </button>
        ),
        2: (
            <button className="btn btn-outline-success btn-sm">
                <i className="uil uil-check"></i> Berhasil
            </button>
        ),
        3: (
            <button className="btn btn-outline-info btn-sm">
                <i className="uil uil-hourglass"></i> Kadaluarsa
            </button>
        ),
        4: (
            <button className="btn btn-outline-info btn-sm">
                <i className="uil uil-hourglass"></i> Di Proses
            </button>
        ),
    };
    return (
        <Card>
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex gap-3 mb-3">
                    <div>
                        <div>
                            <p
                                className="p-0 m-0"
                                style={{ fontSize: 14 + "px" }}
                            >
                                Transaksi Pembelian Paket
                            </p>
                            <div className="mt-2 ">
                                <h3 className="mt-0 mb-2 text-capitalize">
                                    {title}
                                </h3>
                                <h4 className="mt-0 text-capitalize">
                                    {formatRupiah(amount)}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div>
                        <p className="m-0" style={{ fontSize: 14 + "px" }}>
                            <i className="uil uil-clock"></i> {date}
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="d-flex justify-content-between align-items-end">
                    <div className="gap-2 d-flex align-items-center">
                        <div>
                            
                        {status == 0 && (
                            <button
                                className="btn btn-primary m-0 btn-sm"
                                onClick={onCheckout}
                            >
                                <i className="uil-money-insert"></i> Bayar
                                sekarang
                            </button>
                        )}
                        </div>
                    </div>
                    <div>
                        
                    {button_status[status]}
                    </div>
                </div>
            </div>
        </Card>
    );
}
