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

    // useEffect(() => {
    //     return () => {
    //         reset("password", "password_confirmation");
    //     };
    // }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("register"));
    };

    return (
        <GuestLayout>
            <div className="d-flex justify-content-center align-items-center">
                <div class="sign_form rounded-lg my-4">
                    <div class="main_logo25 pb-4 pt-0" id="logo">
                        <Link href="/">
                            <h2>NIPASN.ID</h2>
                        </Link>
                    </div>
                    <form onSubmit={submit}>
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
                            name="address"
                            onChange={(e) => setData("address", e.target.value)}
                            placeholder="Alamat lengkap"
                            type="text"
                            errors={errors}
                            icon="uil uil-map icon icon2"
                        />
                        <InputDefault
                            name="no_whatsapp"
                            onChange={(e) =>
                                setData("no_whatsapp", e.target.value)
                            }
                            placeholder="No whatsapp"
                            type="tel"
                            errors={errors}
                            icon="uil uil-phone icon icon2"
                        />
                        <InputDefault
                            name="gender"
                            onChange={(e) => setData("gender", e.target.value)}
                            placeholder="Jenis Kelamin"
                            type="text"
                            errors={errors}
                            icon="uil uil-mars icon icon2"
                        />
                        <InputDefault
                            name="password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="Password"
                            type="password"
                            errors={errors}
                            icon="uil uil-lock icon icon2"
                        />
                        <InputDefault
                            name="password_confirm"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            placeholder="Konfirmasi password"
                            type="password"
                            errors={errors}
                            icon="uil uil-lock icon icon2"
                        />
                        <InputDefault
                            name="referral_code"
                            onChange={(e) =>
                                setData("referral_code", e.target.value)
                            }
                            placeholder="Referral Kode"
                            type="text"
                            errors={errors}
                            required={false}
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
                            <div class="mt-3 mb-2">
                                <p>
                                    Atau sudah memiliki akun ?
                                    <Link href="/login" className="ms-2">
                                        Masuk sekarang
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
