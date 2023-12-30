import SoalCard, { PreviewSoalCard } from "@/App/Components/Cards/SoalCard";
import { QuestionCard } from "@/App/Components/Cards/ChoiceCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";
import useQuizController from "../Hooks/useQuizController";
import useQuizDetailController from "../Hooks/useQuizDetailController";

export default function DetailQuiz(props) {
    const [quizDetail, setQuizDetail] = useState(props.quiz);
    const quizId = quizDetail?.id;
    const quizTitle = quizDetail?.title;
    const quizType = quizDetail?.quiz_type;
    const quizDate = quizDetail?.created_at;
    const user = quizDetail?.user;
    const questionCount = props.questions?.length;

    const {handleAction, handleAddQuestionn, handleShowResult, handleImportSoal} = useQuizController()
    const {handleEditQuestion, handleDeleteQuestion} = useQuizDetailController()

    return (
        <div className="row">
            <div className="col-lg-12">
                <SoalCard
                    title={quizDetail.title}
                    type={quizType}
                    created_at={quizDate}
                    created_by={user}
                    view={false}
                    id={quizId}
                    hanldeAction={handleAction}
                    point={quizDetail.points_per_question}
                    time={quizDetail.total_time}
                />

                <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                    <p className="p-0 m-0">
                        <i className="fas fa-list ms-1 me-2"></i>
                        {questionCount}
                    </p>
                    <div className="d-flex gap-2">
                        <button
                            onClick={handleShowResult}
                            className="btn btn-outline-primary"
                        >
                            <i className="fas fa-eye"></i> Lihat hasil
                        </button>
                        <button
                            onClick={handleAddQuestionn}
                            className="btn btn-outline-primary"
                        >
                            <i className="fas fa-plus"></i> Tambah pertanyaan
                        </button>
                        <button
                            onClick={handleImportSoal}
                            className="btn btn-outline-primary"
                        >
                            <i className="fas fa-file-excel me1=-1"></i> Impor pertanyaan
                        </button>
                    </div>
                </div>
                {Object.values(props.questions).map((e) => {
                    return <QuestionCard onDelete={handleDeleteQuestion} onEdit={handleEditQuestion} questions={e} />;
                })}
            </div>
        </div>
    );
}
