import React, { useEffect, useRef, useState } from "react";
import { FileList } from "./File/File";
import { router, useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { toggleModal, toggleToast } from "../Utils/Reducers/PageSlice";

export function DragAndDropUpload(props) {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState([]);
    const { data, progress, post, setData, reset } = useForm([]);
    const dispacth = useDispatch();
    const param = props.params;

    useEffect(() => {
        let newData = { files: selectedFile, ...param };
        setData(newData);
    }, [selectedFile]);

    const handleSave = (e) => {
        e.preventDefault();
        console.log(data);
        post(route(param.route), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                dispacth(
                    toggleToast({
                        show: true,
                        text: "Berhasil mengunggah file",
                    })
                );
                dispacth(
                    toggleModal({
                        show: false,
                    })
                );
            },
            onError: (e) => {
                dispacth(
                    toggleToast({
                        show: true,
                        text: e.message ? e.message : 'Gagal mengunggah file',
                    })
                );
            },
        });
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files) {
            setSelectedFile(files);
        }
    };

    const handleAreaClick = (e) => {
        fileInputRef.current.click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileInputChange = () => {
        let files = fileInputRef.current.files;
        setSelectedFile(files);
    };

    const handleRemoveItem = (index) => {
        let files = [...selectedFile];
        files.splice(index, 1);

        setSelectedFile(files);
    };

    return (
        <form onSubmit={handleSave}>
            {selectedFile.length < 1 ? (
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
                                name="file"
                                style={{ display: "none" }}
                                id=""
                                multiple={false}
                            />
                            <p
                                className="m-0 p-0"
                                style={{ fontSize: 12 + "px" }}
                            >
                                Seret dan lepas{" "}
                            </p>
                            <p
                                className="m-0 p-0"
                                style={{ fontSize: 12 + "px" }}
                            >
                                atau klik di sini untuk upload {props.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <FileList
                        list={selectedFile}
                        removeItem={handleRemoveItem}
                    />
                    <div className="d-flex justify-content-end mt-4">
                        {progress ? (
                            <div class="progress w-100">
                                <div
                                    class="progress-bar progress-bar-striped"
                                    role="progressbar"
                                    style={{ width: progress.percentage + "%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={progress}
                            >
                                <div>
                                    <i className="fas fa-upload me-2 "></i>
                                    Unggah
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            )}
            {props.formattedFIle && (
                <div>
                    <a
                        href={route("soal.download_format")}
                        target="__blank"
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
            )}
        </form>
    );
}
