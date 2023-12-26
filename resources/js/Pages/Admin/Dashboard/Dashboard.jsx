import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { profile_img } from "@/App/Theme/images";
import { CardMini } from "@/App/Components/Card";
import { WarningAlert } from "@/App/Components/Alert";
import useUserData from "./Hooks/useUserData";

export default function Dashboard({ auth, pageIdentity }) {
    const {user} = useUserData()
    return (
        <AuthenticatedLayout auth={auth} pageIdentity={pageIdentity}>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card overflow-hidden">
                        <div class="bg-primary bg-soft">
                            <div class="row">
                                <div class="col">
                                    <div class="text-primary py-5 px-4">
                                        <p className="fw-bold fs-4 mb-2 text-capitalize">
                                            Halo, {user?.name} 😁
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
                                value={10}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Tryout Gratis"
                                icon="uil uil-invoice"
                                value={10}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Mencoba Tryout"
                                icon="uil uil-invoice"
                                value={10}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Pembelian Paket"
                                icon="uil uil-money-insert"
                                value={10}
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
                                value={10}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Paket SKB"
                                icon="uil uil-file-check-alt"
                                value={10}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Paket Uji Kompentensi"
                                icon="uil uil-file-check-alt"
                                value={10}
                            />
                        </div>
                        <div class="col-md-3">
                            <CardMini
                                title="Paket PPPK"
                                icon="uil uil-file-check-alt"
                                value={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
