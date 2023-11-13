import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import React from "react";

export default function BaseForm({
    children,
    url,
    onBefore = () => {},
    onSuccess = () => {},
    onFinish = () => {},
    onProgress = () => {},
    onError = () => {},
    onStart = () => {},
}) {
    const { data, setData, get, processing } = useForm({});
    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                controller: setData,
            });
        });
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(route(url), data, {
            onBefore: onBefore,
            onProgress: onProgress,
            onFinish: onFinish,
            onError: onError,
            onStart: onStart,
            onSuccess: onSuccess,
        });
    };
    return (
        <form onSubmit={submit} method="post">
            {renderChildren()}
            <div className="mt-4 d-flex justify-content-end">
                <button
                    className="btn btn-primary"
                    disabled={processing}
                    type="submit"
                >
                    <i className="fas fa-save me-2"></i>
                    Simpan
                </button>
            </div>
        </form>
    );
}
