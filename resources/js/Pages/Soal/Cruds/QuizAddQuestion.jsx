import React, { useState } from "react";
import ChoiceCard from "@/App/Components/Cards/ChoiceCard";
import MyCk from "@/App/Components/Editor/CkEditor";
import { useDispatch } from "react-redux";
import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";

export default function QuizAddQuestion({ paket_id, quiz_id }) {
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
            router.post(route("soal.add_question", quiz_id), quizData, {
                onSuccess: () => {
                    dispatch(
                        toggleToast({
                            show: true,
                            text: `Berhasil menambahkan soal`,
                        })
                    ),
                        dispatch(
                            toggleModal({
                                show: false,
                            })
                        );
                },
            });
        }
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
                            onDataChange={(e) => handleChange(e, "explanation_text")}
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
    );
}
