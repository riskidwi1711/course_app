import BaseModalTitle from "@/App/Components/Base/Modal/BaseModalTitle";
import { UndrawConfirmationSvg } from "@/App/Theme/Svgs";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function ConfirmFinish({
    onSave = () => {},
    onCancel = () => {},
}) {
    const dispatch = useDispatch();

    const handleSave = () => {
        onSave();
    };

    const handleCancel = () => {
        onCancel();
        dispatch(
            toggleModal({
                show: false,
                title: <ConfirmFinishTitle />,
                component: <ConfirmFinish />,
                size: "md",
            })
        );
    };

    return (
        <div>
            <div className="text-center mb-4">
                <img
                    className="img-fluid"
                    style={{ maxWidth: 150 + "px" }}
                    src={UndrawConfirmationSvg}
                    alt=""
                />
                <h4 className="mb-2">
                    Apakah kamu sudah menyelesaikan semua soal ?
                </h4>
                <p>Semua jawaban yang sudah di submit tidak dapat dirubah</p>
            </div>
            <hr className="border" />
            <div className="d-flex gap-2 justify-content-end">
                <button className="btn btn-primary" onClick={handleSave}>
                    {" "}
                    Selesai
                </button>
                <button className="btn btn-danger" onClick={handleCancel}>
                    Batal
                </button>
            </div>
        </div>
    );
}

export function ConfirmFinishTitle() {
    return (
        <BaseModalTitle
            icon="uil uil-question-circle"
            title="Konfirmasi"
            description="Apakah kamu yakin ?"
        />
    );
}
