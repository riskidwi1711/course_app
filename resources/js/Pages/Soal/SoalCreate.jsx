import React, { useRef, useState } from "react";
import ChoiceCard from "@/App/Components/Cards/ChoiceCard";
import MyCk from "@/App/Components/Editor/CkEditor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useDispatch } from "react-redux";
import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";

export default function SoalCreate({ auth, pageIdentity, paket_id, quiz_id }) {
    const dispatch = useDispatch();
    const [singleCorrectAns, setSingleCorrectAns] = useState(true);
    const [quizData, setQuizData] = useState({
        question_type: "multiple choice",
        image_link: null,
        time_in_seconds: 400,
        correct_answer: [],
        quiz_id: quiz_id,
        paket_id: paket_id,
    });

    const handleImport = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <DragAndDrop />,
                title: <ModalImportSoalTitle />,
            })
        );
    };

    const handleSave = () => {
        if (quizData.correct_answer.length < 1) {
            dispatch(
                toggleToast({
                    show: true,
                    text: `Pilih ${
                        singleCorrectAns ? "satu" : "beberapa"
                    } Jawaban yang benar`,
                })
            );
        } else {
            router.post(route("soal.store"), quizData, {
                onSuccess: dispatch(
                    toggleToast({
                        show: true,
                        text: `Berhasil menambahkan soal`,
                    })
                ),
            });
        }

        console.log(quizData);
    };

    const setCorrectAnswer = (question_id) => {
        let newArray = quizData.correct_answer;
        if (singleCorrectAns) {
            newArray = [];
            newArray.push(question_id);
        } else {
            if (!newArray.includes(question_id)) {
                newArray.push(question_id);
            } else {
                newArray = newArray.filter((item) => item !== question_id);
            }
        }
        setQuizData({ ...quizData, correct_answer: newArray });
        console.log(newArray);
    };

    const handleChange = (data, name) => {
        setQuizData({
            ...quizData,
            [name]: data,
        });
        console.log(quizData);
    };

    const correctAnsActive = (id) => quizData.correct_answer.includes(id);

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
                                    onClick={() => setSingleCorrectAns(true)}
                                    checked={singleCorrectAns}
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
                                    onClick={() => setSingleCorrectAns(false)}
                                    checked={!singleCorrectAns}
                                />
                                <label
                                    class="btn mb-0 btn-outline-primary"
                                    for="btnradio2"
                                >
                                    Beberapa jawaban yang benar
                                </label>
                            </div>
                            <div className="d-flex justify-content-end align-items-center gap-2">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSave}
                                >
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
                            <MyCk
                                initial="Masukan soal"
                                onDataChange={(e) =>
                                    handleChange(e, "question_text")
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <MyCk
                                initial="Masukan pembahasan soal"
                                onDataChange={(e) =>
                                    handleChange(e, "explanation_text")
                                }
                            />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard
                                handleChange={handleChange}
                                name="option1"
                                setCorrectAnswer={(e) => setCorrectAnswer(1)}
                                correct={correctAnsActive(1)}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard
                                handleChange={handleChange}
                                name="option2"
                                setCorrectAnswer={(e) => setCorrectAnswer(2)}
                                correct={correctAnsActive(2)}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard
                                handleChange={handleChange}
                                name="option3"
                                setCorrectAnswer={(e) => setCorrectAnswer(3)}
                                correct={correctAnsActive(3)}
                            />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <ChoiceCard
                                handleChange={handleChange}
                                name="option4"
                                setCorrectAnswer={(e) => setCorrectAnswer(4)}
                                correct={correctAnsActive(4)}
                            />
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

export function DragAndDrop(props) {
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
