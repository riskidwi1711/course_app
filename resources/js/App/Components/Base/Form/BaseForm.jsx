import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import React from "react";
import { useDispatch } from "react-redux";

export default function BaseForm({
    incomingData = {},
    children,
    url,
    param = {},
    onSuccessText = "Berhasil",
    onBefore = () => {},
    onSuccess = () => {},
    onFinish = () => {},
    onProgress = () => {},
    onError = () => {},
    onStart = () => {},
}) {
    const { data, setData, get, processing } = useForm(incomingData);
    const dispacth = useDispatch();
    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                controller: setData,
                value: data
            });
        });
    };

    const submit = (e) => {
        let newData = { ...data, ...param };
        console.log(newData);
        e.preventDefault();
        router.post(route(url), newData, {
            onBefore: onBefore,
            onProgress: onProgress,
            onFinish: onFinish,
            onError: onError,
            onStart: onStart,
            onSuccess: () => {
                onSuccess();
                dispacth(
                    toggleToast({
                        show: true,
                        text: onSuccessText,
                    })
                );
                dispacth(
                    toggleModal({
                        show: false,
                    })
                );
            },
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
