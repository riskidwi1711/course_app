import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import usePageState from "@/App/Utils/hooks/usePageState";
import { GoogleSvg, InstagramSvg } from "@/App/Theme/Svgs";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const { pageLoading } = usePageState();

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onBefore: () => {
                pageLoading();
            },
            onSuccess: () => {
                pageLoading();
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Login" />
            <div className="d-flex justify-content-center align-items-center">
                <div class="sign_form rounded-lg">
                    <div class="main_logo25 pb-4 pt-0" id="logo">
                        <Link href="/login">
                            <h2 style={{fontWeight: 'bold', fontFamily:'sans-serif'}}>NIPASN.ID</h2>
                        </Link>
                    </div>
                    <form onSubmit={submit} method="POST">
                        <div class="ui search focus mt-15">
                            <div class="ui left icon input swdh95">
                                <input
                                    class="prompt srch_explore"
                                    type="email"
                                    name="emailaddress"
                                    id="id_email"
                                    required=""
                                    maxlength="64"
                                    placeholder="Email Address"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <i class="uil uil-envelope icon icon2"></i>
                            </div>
                            {errors.email && (
                                <div
                                    class="alert alert-danger mt-2"
                                    role="alert"
                                >
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div class="ui search focus mt-15">
                            <div class="ui left icon input swdh95">
                                <input
                                    class="prompt srch_explore"
                                    type="password"
                                    name="password"
                                    id="id_password"
                                    required=""
                                    maxlength="64"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <i class="uil uil-key-skeleton-alt icon icon2"></i>
                            </div>
                            {errors.password && (
                                <div
                                    class="alert alert-danger mt-2"
                                    role="alert"
                                >
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div class="d-flex justify-content-end my-2">
                            <a
                                class="btn btn-link"
                                href={route("password.request")}
                            >
                                <p>Lupa password</p>
                            </a>
                        </div>
                        <div className="row px-2">
                            <button
                                class="btn btn-primary btn-block btn-lg mb-3"
                                type="submit"
                                disabled={processing}
                            >
                                Masuk
                            </button>
                            <Link
                                href="/register"
                                class="btn btn-block btn-lg mb-2 bg-light"
                            >
                                <img
                                    src={GoogleSvg}
                                    width="17"
                                    alt=""
                                    className="me-1"
                                />{" "}
                                Masuk Dengan Google
                            </Link>
                            <Link
                                href="/register"
                                class="btn btn-block btn-lg mb-0 bg-light"
                            >
                                <img
                                    src={InstagramSvg}
                                    width="17"
                                    alt=""
                                    className="me-1"
                                />{" "}
                                Masuk Dengan Instagram
                            </Link>
                            <div class="mt-3">
                                <p>
                                    Atau belum memiliki akun ?{" "}
                                    <Link href="/register">Daftar sekarang</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
