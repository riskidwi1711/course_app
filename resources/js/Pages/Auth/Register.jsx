import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { InputDefault } from "@/App/Components/Input";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        address: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <div class="sign_form rounded-lg">
                <div class="main_logo25 pb-4 pt-0" id="logo">
                    <Link href="/">
                        <img src="/assets/dashboard/images/logo.svg" alt="" />
                    </Link>
                    <Link href="/">
                        <img
                            class="logo-inverse"
                            src="/assets/dashboard/images/ct_logo.svg"
                            alt=""
                        />
                    </Link>
                </div>
                <form onSubmit={submit} method="POST">
                    <InputDefault
                        name="email"
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="Email"
                        type="email"
                        errors={errors}
                        icon="uil uil-envelope icon icon2"
                    />
                    <InputDefault
                        name="nama"
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Nama lengkap"
                        type="text"
                        errors={errors}
                        icon="uil uil-user icon icon2"
                    />
                    <InputDefault
                        name="alamat"
                        onChange={(e) => setData("address", e.target.value)}
                        placeholder="Alamat lengkap"
                        type="text"
                        errors={errors}
                        icon="uil uil-map icon icon2"
                    />
                    <InputDefault
                        name="no whatsapp"
                        onChange={(e) => setData("address", e.target.value)}
                        placeholder="No whatsapp"
                        type="tel"
                        errors={errors}
                        icon="uil uil-phone icon icon2"
                    />
                    <InputDefault
                        name="gender"
                        onChange={(e) => setData("address", e.target.value)}
                        placeholder="Jenis Kelamin"
                        type="text"
                        errors={errors}
                        icon="uil uil-mars icon icon2"
                    />
                    <InputDefault
                        name="password"
                        onChange={(e) => setData("address", e.target.value)}
                        placeholder="Password"
                        type="password"
                        errors={errors}
                        icon="uil uil-lock icon icon2"
                    />
                    <InputDefault
                        name="password_confirm"
                        onChange={(e) => setData("address", e.target.value)}
                        placeholder="Konfirmasi password"
                        type="password"
                        errors={errors}
                        icon="uil uil-lock icon icon2"
                    />
                    <InputDefault
                        name="password_confirm"
                        onChange={(e) => setData("address", e.target.value)}
                        placeholder="Referral Kode"
                        type="password"
                        errors={errors}
                        icon="uil uil-users-alt icon icon2"
                    />
                    <div className="row px-2 mt-5">
                        <button
                            class="btn btn-primary btn-block btn-lg mb-0"
                            type="submit"
                            disabled={processing}
                        >
                            Daftar
                        </button>
                        <div class="my-2">
                            <p>Atau sudah memiliki akun ?</p>
                        </div>
                        <Link
                            href="/register"
                            class="btn btn-primary btn-block btn-lg mb-0"
                        >
                            Masuk sekarang
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
