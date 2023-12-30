import React, { useState } from "react";
import ChoiceCard from "@/App/Components/Cards/ChoiceCard";
import MyCk from "@/App/Components/Editor/CkEditor";
import { useDispatch } from "react-redux";
import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";

export default function ModalAddQuestions({ paket_id, quiz_id }) {
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
    };

    const correctAnsActive = (id) => quizData.correct_answer.includes(id);
    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="bg-white rounded p-2">
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
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary mt-4"
                        onClick={handleSave}
                    >
                        <i class="fas fa-save"></i> Simpan soal
                    </button>
                </div>
            </div>
        </div>
    );
}
