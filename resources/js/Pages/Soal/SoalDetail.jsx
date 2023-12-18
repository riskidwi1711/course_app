import SoalCard, { PreviewSoalCard } from "@/App/Components/Cards/SoalCard";
import { QuestionCard } from "@/App/Components/Cards/ChoiceCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import QuizEdit from "./Cruds/QuizEdit";
import { router } from "@inertiajs/react";
import QuizAddQuestion from "./Cruds/QuizAddQuestion";
import QuizShowResult from "./Cruds/QuizShowResult";

export default function SoalDetail(props) {
    const dispatch = useDispatch();
    const [quizDetail, setQuizDetail] = useState(props.quiz);
    const quizId = quizDetail.id;
    const quizTitle = quizDetail.title;
    const quizType = quizDetail.quiz_type;
    const quizDate = quizDetail.created_at;
    const user = quizDetail.user;
    const questionCount = props.questions?.length;

    const handleAction = (actionId, id) => {
        if (actionId === "edit") {
            dispatch(
                toggleModal({
                    show: true,
                    component: <QuizEdit quizDetail={quizDetail} />,
                    title: `Edit Soal`,
                })
            );
        } else if (actionId === "delete") {
            router.post(route("soal.delete_quiz", id), {
                paket_id: props.quiz.paket_id,
            });
        } else if (actionId === "view") {
            router.visit(route("soal.detail_quiz", id));
        }
    };

    const handleAddQuestionn = () => {
        dispatch(
            toggleModal({
                show: true,
                component: (
                    <QuizAddQuestion
                        quiz_id={quizDetail.id}
                        paket_id={quizDetail.paket_id}
                    />
                ),
                title: "Tambah pertanyaan",
                size: "xl",
            })
        );
    };

    const handleShowResult = () => {
        dispatch(
            toggleModal({
                show: true,
                component: (
                    <QuizShowResult
                        quiz_id={quizDetail.id}
                        paket_id={quizDetail.paket_id}
                    />
                ),
                title: "Tambah pertanyaan",
                size: "xl",
            })
        );
    };

    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <div className="row">
                <div className="col-lg-8">
                    <SoalCard
                        title={quizDetail.title}
                        type={quizType}
                        created_at={quizDate}
                        created_by={user}
                        view={false}
                        id={quizId}
                        hanldeAction={handleAction}
                    />

                    <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                        <p className="p-0 m-0">
                            <i className="fas fa-list ms-1 me-2"></i>
                            {questionCount}
                        </p>
                        <div className="d-flex gap-2">
                            <button onClick={handleShowResult} className="btn btn-outline-primary">
                                <i className="fas fa-eye"></i> Lihat hasil
                            </button>
                            <button
                                onClick={handleAddQuestionn}
                                className="btn btn-outline-primary"
                            >
                                <i className="fas fa-plus"></i> Tambah
                                pertanyaan
                            </button>
                        </div>
                    </div>
                    {Object.values(props.questions).map((e) => {
                        return <QuestionCard questions={e} />;
                    })}
                </div>
                <div className="col-lg-4">
                    <div className="mb-3">
                        <p className="p-0 m-0">
                            <i className="fas fa-newspaper ms-1 me-2"></i>
                            Lihat soal lain
                        </p>
                    </div>
                    <div>
                        {Object.values(props.quizez).map((e) => {
                            return (
                                <PreviewSoalCard
                                    handleAction={handleAction}
                                    id={e.id}
                                    view={true}
                                    title={e.title}
                                    type={e.quiz_type}
                                    created_at={e.created_at}
                                    created_by={e.user}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
