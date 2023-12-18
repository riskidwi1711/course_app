import React from "react";

export default function NotificationCard() {
    return (
        <a href="javascript: void(0);" class="text-reset notification-item">
            <div class="d-flex">
                <div class="avatar-xs me-3">
                    <span class="avatar-title bg-primary rounded-circle font-size-16">
                        <i class="uil uil-bell"></i>
                    </span>
                </div>
                <div class="flex-grow-1">
                    <h5 class="mb-1" key="t-your-order">
                        Transaksi berhasil
                    </h5>
                    <div class="font-size-12 text-muted">
                        <p class="mb-1" key="t-grammer">
                            Selamat, transaksi pembelian paket berhasil
                        </p>
                        <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}
