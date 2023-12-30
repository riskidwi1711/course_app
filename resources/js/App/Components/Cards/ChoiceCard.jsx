import React, { useRef, useState } from "react";
import MyCk from "../Editor/CkEditor";
import { router } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { toggleToast } from "@/App/Utils/Reducers/PageSlice";

const ChoiceCard = React.memo(
    ({ handleChange, name, setCorrectAnswer = () => {}, correct, nOption = 1, initialContent = "Ketikan pilihan jawaban" }) => {
        const [optionValue, setOptionValue] = useState(
            "Ketik opsi jawaban anda disini"
        );
        const [isEditable, setIsEditable] = useState(false);
        const contentRef = useRef(null);
    
        const handleValue = () => {
            setContent(contentRef.current.textContent);
        };
    
        const handleContentClick = () => {
            setIsEditable(true);
            contentRef.current.focus();
        };
    
        const handleBlur = () => {
            setIsEditing(false);
        };
        return (
            <div className="bg-white rounded">
                <div style={{ padding: 5 + "px", paddingTop: 10 + "px" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex gap-2">
                            Pilihan {nOption}
                        </div>
                        <div>
                            <button
                                onClick={setCorrectAnswer}
                                className={`btn rounded ${
                                    correct 
                                        ? "btn-success"
                                        : "btn-outline-secondary"
                                } p-2`}
                                href=""
                            >
                                <i className="uil uil-check"></i>
                            </button>
                        </div>
                    </div>
                    <div className="bg-light rounded">
                        <MyCk
                            initial={initialContent}
                            onDataChange={(e) => handleChange(e, name)}
                        />
                    </div>
                </div>
            </div>
        );
    }
  );


export default ChoiceCard

export function QuestionCard({ questions, onDelete, onEdit }) {
    const correct_options = questions.correct_answer;
    const dispacth = useDispatch();

    
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="p-0 m-0" style={{ fontSize: 12 + "px" }}>
                        <i className="fas fa-check me-2"></i> Soal pilhan ganda
                    </p>
                    <div>
                        <button
                            className="btn btn-outline-primary py-1 me-2"
                            onClick={() => onEdit(questions)}
                        >
                            <i className="fas fa-edit"></i> Edit
                        </button>
                        <button
                            className="btn btn-outline-danger py-1"
                            onClick={() => onDelete(questions.id)}
                        >
                            <i className="fas fa-trash"></i> Hapus
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: questions.question_text,
                        }}
                    ></div>
                    <div className="mt-4">
                        <p style={{ fontSize: 12 + "px" }}>Pilihan jawaban :</p>
                        <div className="row">
                            {Object.values(questions.options).map(
                                (e, index) => {
                                    return (
                                        <div className="col-lg-12 mb-3">
                                            <div className="d-flex gap-2">
                                                <i
                                                    className={`fas fa-circle ${
                                                        correct_options.includes(
                                                            index + 1
                                                        )
                                                            ? "text-success"
                                                            : "text-danger"
                                                    } me-2`}
                                                ></i>
                                                <div
                                                    className="text-black"
                                                    dangerouslySetInnerHTML={{
                                                        __html: e.option_text,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                    <div
                        className="border rounded-lg p-4 mt-4"
                        dangerouslySetInnerHTML={{
                            __html: questions.explanation?.explanation_text,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
