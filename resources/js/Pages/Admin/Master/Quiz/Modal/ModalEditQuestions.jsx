import BaseModalTitle from "@/App/Components/Base/Modal/BaseModalTitle";
import React, { useEffect } from "react";
import useQuizDetailController from "../Hooks/useQuizDetailController";
import ChoiceCard, { QuestionCard } from "@/App/Components/Cards/ChoiceCard";
import { Spinner } from "@/App/Components/Indicators";
import RichInput from "@/App/Components/Cards/QuizCard";

export function ModalEditQuestionTitle() {
    return (
        <BaseModalTitle
            title="Edit pertanyaan"
            description="Mengedit pertanyaan"
            icon="uil uil-edit"
        />
    );
}

export default function ModalEditQuestions(props) {
    const {
        handleChangeEditQuestion,
        handleChangeEditOption,
        setEditQuestionData,
        setEditOptionData,
        handleSaveEditQuestion,
        editQuestionData,
        editOptionData,
    } = useQuizDetailController();

    useEffect(() => {
        setEditQuestionData(props);
        setEditOptionData(props.options);
    }, [props]);

    console.log(props);
    return !editOptionData && editQuestionData ? (
        <Spinner />
    ) : (
        <form>
            <RichInput
                name="Pertanyaan"
                handleChange={(e) => {
                    handleChangeEditQuestion({
                        target: {
                            name: "question_text",
                            value: e,
                        },
                    });
                }}
                initial={editQuestionData.question_text}
            />
            <RichInput
                name="Penjelasan"
                handleChange={(e) => {
                    handleChangeEditQuestion({
                        target: {
                            name: "explanation_text",
                            value: e,
                        },
                    });
                }}
                initial={editQuestionData.explanation?.explanation_text}
            />
            {Object.values(editOptionData).map((e, index) => {
                const isCorrect =
                    editQuestionData.correct_answer == parseInt(index) + 1;

                console.log(isCorrect);
                return (
                    <ChoiceCard
                        key={index}
                        handleChange={(txt) =>
                            handleChangeEditOption(index, txt)
                        }
                        name="option"
                        setCorrectAnswer={(e) => {
                            e.preventDefault();
                            handleChangeEditQuestion({
                                target: {
                                    name: "correct_answer",
                                    value: index + 1,
                                },
                            });
                        }}
                        correct={isCorrect}
                        initialContent={e.option_text}
                        nOption={index + 1}
                    />
                );
            })}
            <div className="d-flex justify-content-end mt-4">
                <button
                    onClick={handleSaveEditQuestion}
                    className="btn btn-primary"
                >
                    <i className="fas fa-save"></i> Simpan
                </button>
            </div>
        </form>
    );
}
