import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { InputDefault, InputSelect } from "@/App/Components/Input";

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

    console.log(data)

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
                        <div class="mt-4 d-flex flex-column justify-content-start align-items-start">
                            <h5 class="font-size-14 text-muted fw-normal mb-3">
                                Jenis Kelamin
                            </h5>
                            <div className="d-flex gap-2">
                                <div class="form-check mb-3">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="formRadios1"
                                        value="L"
                                        onChange={(e)=>setData("gender", e.target.value)}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="formRadios1"
                                    >
                                        Laki-Laki
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="formRadios2"
                                        value="P"
                                        onChange={(e)=>setData("gender", e.target.value)}
                                    />
                                    <label
                                        class="form-check-label"
                                        for="formRadios2"
                                    >
                                        Perempuan
                                    </label>
                                </div>
                            </div>
                        </div>
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
                            name="referal_code"
                            onChange={(e) =>
                                setData("referal_code", e.target.value)
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
