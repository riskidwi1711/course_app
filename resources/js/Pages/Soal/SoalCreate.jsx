import React, { useRef } from "react";
import ChoiceCard from "@/App/Components/Cards/ChoiceCard";
import MyCk from "@/App/Components/Editor/CkEditor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";

export default function SoalCreate({ auth, pageIdentity }) {
    const dispatch = useDispatch();

    const handleImport = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <DragAndDrop />,
                title: <ModalImportSoalTitle/>,
            })
        );
    };

    const handleSave = () => {};

    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="bg-white rounded p-2">
                        <div className="d-flex justify-content-between align-items-center  mt-2 mb-3">
                            <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic radio toggle button group"
                            >
                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio1"
                                    autocomplete="off"
                                    checked
                                />
                                <label
                                    class="btn mb-0 btn-outline-primary"
                                    for="btnradio1"
                                >
                                    Satu jawaban benar
                                </label>

                                <input
                                    type="radio"
                                    class="btn-check"
                                    name="btnradio"
                                    id="btnradio2"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn mb-0 btn-outline-primary"
                                    for="btnradio2"
                                >
                                    Beberapa jawaban yang benar
                                </label>
                            </div>
                            <div className="d-flex justify-content-end align-items-center gap-2">
                                <button className="btn btn-primary">
                                    <i class="fas fa-save"></i> Simpan soal
                                </button>
                                <button
                                    onClick={handleImport}
                                    className="btn btn-success"
                                >
                                    <i className="fas fa-file-excel me-2"></i>
                                    Import
                                </button>
                            </div>
                        </div>
                        <div className="bg-light">
                            <MyCk initial="Masukan soal" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export function ModalImportSoalTitle() {
    return (
        <div className="fw-normal d-flex gap-2 align-items-center">
            <button className="btn btn-outline-success m-0">
                <i className="fas fa-upload"></i>
            </button>
            <div>
                <h5 className="fw-bold mb-1 m-0">
                    Impor pertanyaan dari Excel
                </h5>
                <p
                    className="fw-normal p-0 m-0"
                    style={{ fontSize: 12 + "px" }}
                >
                    Harap unggah spreadsheet excel yang mengikuti contoh
                    template
                </p>
            </div>
        </div>
    );
}

export function DragAndDrop() {
    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            // Handle the dropped file
            console.log("Dropped file:", file);
        }
    };

    const handleAreaClick = (e) => {
        fileInputRef.current.click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileInputChange = () => {
        // Mengakses nilai input file
        console.log(fileInputRef.current.files[0]);
    };

    return (
        <div>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={handleAreaClick}
                style={{ cursor: "copy" }}
                className="bg-light d-flex justify-content-center align-content-center rounded p-5 mb-3"
            >
                <div className="text-center" style={{ width: 35 + "%" }}>
                    <img
                        src="https://cf.quizizz.com/img/icons/import_excel.png"
                        className="img-fluid"
                        alt=""
                        style={{ maxWidth: 70 + "%" }}
                    />
                    <div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileInputChange}
                            name=""
                            style={{ display: "none" }}
                            id=""
                        />
                        <p className="m-0 p-0" style={{ fontSize: 12 + "px" }}>
                            Seret dan lepas{" "}
                        </p>
                        <p className="m-0 p-0" style={{ fontSize: 12 + "px" }}>
                            atau klik di sini untuk upload excel
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <a
                    className="border-0 px-0 py-0 m-0 text-secondary fw-normal"
                    style={{ fontSize: 12 + "px", cursor: "pointer" }}
                >
                    <img
                        src="https://cf.quizizz.com/img/icons/msExcel.png"
                        className="img-fluid"
                        style={{ maxWidth: 3 + "%" }}
                        alt=""
                    />{" "}
                    Download template format pertanyaan
                </a>
            </div>
        </div>
    );
}
