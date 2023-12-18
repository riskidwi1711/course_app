import { WarningAlert } from "@/App/Components/Alert";
import { CardMini } from "@/App/Components/Card";
import { profile_img } from "@/App/Theme/images";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { useSelector } from "react-redux";

export default function ShowHome({ auth, pageIdentity, user_overview }) {
    const userData = useSelector((state) => state.userData);
    console.log(user_overview)
    return (
        <AuthenticatedLayout auth={auth} pageIdentity={pageIdentity}>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card overflow-hidden">
                        <div class="bg-primary bg-soft">
                            <div class="row">
                                <div class="col">
                                    <div class="text-primary py-5 px-4">
                                        <p className="fw-bold fs-4 mb-2">
                                            Halo, {userData.user.name} 😁
                                        </p>
                                        <p className="fw-bold fs-3 mb-2">
                                            Selamat datang kembali
                                        </p>
                                        <p>
                                            Sudah siap belajar apa hari ini?
                                            Jangan lupa semangat karena banyak
                                            latihan dan tryout yang masih
                                            menunggu untuk diselesaikan.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-xl-3 align-self-end">
                                    <img
                                        src={profile_img}
                                        alt=""
                                        style={{ maxWidth: 200 + "px" }}
                                        class="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 mb-2">
                    <WarningAlert
                        text="Penting : Gunakan Chrome versi
            terbaru dan jaringan yang stabil saat mengakses agar website bekerja
            pada perfoma terbaik"
                    />
                </div>
                <div class="col-xl-12">
                    <p>Overview</p>
                    <div class="row">
                        <div class="col-md-3">
                            <CardMini
                                title="Latihan"
                                icon="uil uil-clipboard-notes"
                                value={user_overview.total_soal}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Tryout"
                                icon="uil uil-invoice"
                                value={user_overview.total_tryout}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Mencoba Tryout"
                                icon="uil uil-invoice"
                                value={user_overview.total_try}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Pembelian Paket"
                                icon="uil uil-money-insert"
                                value={user_overview.total_transaction}
                            />
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <p>Paket Tersedia</p>
                    <div class="row">
                        <div class="col-md-3">
                            <CardMini
                                title="Paket SKD"
                                icon="uil uil-file-check-alt"
                                value={user_overview.total_paket_skd}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Paket SKB"
                                icon="uil uil-file-check-alt"
                                value={user_overview.total_paket_skb}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Paket Uji Kompentensi"
                                icon="uil uil-file-check-alt"
                                value={user_overview.total_paket_ujikom}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Paket PPPK"
                                icon="uil uil-file-check-alt"
                                value={user_overview.total_paket_pppk}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
