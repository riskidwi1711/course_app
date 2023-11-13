import React, { useState } from "react";
import { Card } from "../Card";
import { Input } from "postcss";
import { useDispatch } from "react-redux";
import { toggleToast } from "@/App/Utils/Reducers/PageSlice";

export default function SoalCard() {
    const [titleEdit, setEditTitle] = useState(false);
    const [titleValue, setTitleValue] = useState("Quiz belum berjudul");
    const dispacth = useDispatch();
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Handle the Enter key press here
            console.log("Enter key pressed");
            setEditTitle(false);
            // You can perform your desired action here.
        }
    };
    const handleEditTitle = (event) => {
        if (titleValue.length <= 0) {
            dispacth(
                toggleToast({
                    show: true,
                    text: "Tidak boleh kosong",
                })
            );
        } else {
            setEditTitle(!titleEdit);
        }
    };
    return (
        <Card>
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex gap-3 ">
                    <div>
                        <img
                            className="bg-light"
                            style={{ maxWidth: 70 + "px" }}
                            src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&h=200"
                            alt=""
                        />
                    </div>

                    <div>
                        <div>
                            <p
                                className="p-0 m-0"
                                style={{ fontSize: 12 + "px" }}
                            >
                                Soal
                            </p>
                            <div className="d-flex gap-2 align-items-center mt-2 ">
                                {!titleEdit ? (
                                    <h4 className="mb-0 text-capitalize">
                                        {titleValue}
                                    </h4>
                                ) : (
                                    <input
                                        className="form-control text-capitalize fs-4"
                                        name="title"
                                        type="text"
                                        value={titleValue}
                                        onChange={(e) =>
                                            setTitleValue(e.target.value)
                                        }
                                        onKeyDown={handleKeyPress}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <a
                        className="fs-5 p-1 btn btn-outline-primary"
                        onClick={handleEditTitle}
                    >
                        {titleEdit ? (
                            <i className="uil uil-check"></i>
                        ) : (
                            <i className="uil uil-pen"></i>
                        )}
                    </a>
                    <a className="p-1 fs-5 btn btn-outline-primary">
                        <i className="uil uil-trash"></i>
                    </a>
                    <a className="p-1 fs-5 btn btn-outline-primary">
                        <i className="uil uil-cog"></i>
                    </a>
                </div>
            </div>
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <div className="gap-2 d-flex align-items-center">
                        <div>
                            <img
                                className="rounded-circle"
                                style={{ maxWidth: 20 + "px" }}
                                src="https://lh3.googleusercontent.com/a/ACg8ocKIVDlpHFACIFL9Ee9L3QIY9hiMcvPGX5lmClQebpw0_xE=s96-c"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="m-0" style={{ fontSize: 12 + "px" }}>
                                Riski Dwi Patrio
                            </p>
                            <p
                                style={{ fontSize: 12 + "px" }}
                                className="fw-light"
                            >
                                8 Jam
                            </p>
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        <div>
                        <button className="btn btn-outline-primary">
                            <i className="uil uil-edit me-1"></i> Edit
                        </button>
                        </div>
                        <div>
                        <button className="btn btn-outline-success">
                            <i className="uil uil-eye me-1"></i> Lihat
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export function PreviewSoalCard() {
    const [titleEdit, setEditTitle] = useState(false);
    const [titleValue, setTitleValue] = useState("Quiz belum berjudul");
    const dispacth = useDispatch();
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Handle the Enter key press here
            console.log("Enter key pressed");
            setEditTitle(false);
            // You can perform your desired action here.
        }
    };
    const handleEditTitle = (event) => {
        if (titleValue.length <= 0) {
            dispacth(
                toggleToast({
                    show: true,
                    text: "Tidak boleh kosong",
                })
            );
        } else {
            setEditTitle(!titleEdit);
        }
    };
    return (
        <div className="border border-2 p-2 mb-3">
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex gap-3 ">
                    <div>
                        <img
                            className="bg-light"
                            style={{ maxWidth: 70 + "px" }}
                            src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&h=200"
                            alt=""
                        />
                    </div>

                    <div>
                        <div>
                            <p
                                className="p-0 m-0"
                                style={{ fontSize: 14 + "px" }}
                            >
                                Soal
                            </p>
                            <div className="d-flex gap-2 align-items-center mt-2">
                                {!titleEdit ? (
                                    <h4 className="mb-0 text-capitalize">
                                        {titleValue}
                                    </h4>
                                ) : (
                                    <input
                                        className="form-control text-capitalize"
                                        name="title"
                                        type="text"
                                        value={titleValue}
                                        onChange={(e) =>
                                            setTitleValue(e.target.value)
                                        }
                                        onKeyDown={handleKeyPress}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <a className="p-1 rounded bg-light">
                        <i className="uil uil-trash"></i>
                    </a>
                </div>
            </div>
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <div className="gap-2 d-flex align-items-center">
                        <div>
                            <img
                                className="rounded-circle"
                                style={{ maxWidth: 20 + "px" }}
                                src="https://lh3.googleusercontent.com/a/ACg8ocKIVDlpHFACIFL9Ee9L3QIY9hiMcvPGX5lmClQebpw0_xE=s96-c"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="m-0" style={{ fontSize: 12 + "px" }}>
                                Riski Dwi Patrio
                            </p>
                            <p
                                style={{ fontSize: 12 + "px" }}
                                className="fw-light"
                            >
                                8 Jam
                            </p>
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        <div>
                        <button className="btn btn-outline-primary">
                            <i className="uil uil-edit me-1"></i> Edit
                        </button>
                        </div>
                        <div>
                        <button className="btn btn-outline-success">
                            <i className="uil uil-eye me-1"></i> Lihat
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
