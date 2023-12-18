import Authenticated from "@/Layouts/AuthenticatedLayout";
import Quiz from "react-quiz-component";
import React, { useEffect, useState } from "react";
import { QuizHeader } from "@/App/Components/Cards/SoalCard";
import { router } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import ConfirmFinish, { ConfirmFinishTitle } from "../Modal/ConfirmFinish";
import { MiniSpinner } from "@/App/Components/Indicators";

export default function StartQuiz(props) {
    const questions = props.quiz.questions;
    const [startQuiz, setStartQuiz] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [quizInput, setQuizInput] = useState({});
    const [isStoreAnswer, setIsStoreAnswer] = useState(false);
    const [singleAnswer, setSingleAnswer] = useState({
        question_id: questions[0].id,
        answer: null,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        handleSelectQuestion();
    }, [currentQuestion]);

    const handleSelectQuestion = () => {
        let tmpQuestion = questions.filter((e, i) => currentQuestion === i);
        setSelectedQuestion(tmpQuestion[0]);
        console.log(selectedQuestion);
    };

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        setSingleAnswer({
            question_id: name,
            answer: value,
        });
        setQuizInput((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleNext = (index, question_id) => {
        setQuizInput({...quizInput, [question_id]: null})
        router.post(
            route("student.show_my_pake_detail.store_answer", {
                quiz_id: props.quiz.id,
            }),
            singleAnswer.answer
                ? singleAnswer
                : { question_id: question_id, answer: null },
            {
                onBefore: () => {
                    setIsStoreAnswer(true);
                },
                onFinish: () => {
                    setIsStoreAnswer(false);
                },
                onError: () =>
                    setCurrentQuestion(
                        currentQuestion > 0
                            ? currentQuestion - 1
                            : currentQuestion
                    ),
                onSuccess: () => {
                    if (index <= questions.length - 1) {
                        setCurrentQuestion(index);
                    } else {
                        dispatch(
                            toggleModal({
                                show: true,
                                title: <ConfirmFinishTitle />,
                                component: (
                                    <ConfirmFinish onSave={handleSubmitQuiz} />
                                ),
                                size: "md",
                            })
                        );
                    }
                },
            }
        );
    };

    const handleSubmitQuiz = () => {
        dispatch(
            toggleModal({
                show: false,
            })
        );
        router.visit(
            route("student.show_my_pake_detail.quiz_results", {
                paket_id: props.quiz.paket_id,
            })
        );
    };

    const handleSelectNumQuestion = (index) => {
        setCurrentQuestion(index);
    };

    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            {!startQuiz ? (
                <QuizBrief quiz={props.quiz} onStart={(e) => setStartQuiz(e)} />
            ) : (
                <div className="row mb-5">
                    <div className="d-flex justify-content-end mb-4">
                        <h3 className="text-right">
                            <i className="uil uil-clock"></i>00:10:09
                        </h3>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h3>Soal No {currentQuestion + 1}</h3>
                                <hr className="border" />
                                <div className="mt-4">
                                    <h4
                                        dangerouslySetInnerHTML={{
                                            __html: selectedQuestion?.question_text,
                                        }}
                                    ></h4>
                                </div>
                                <div className="mt-3 ">
                                    {selectedQuestion?.options &&
                                        Object.values(
                                            selectedQuestion.options
                                        ).map((e, index) => {
                                            const literal = {
                                                0: "A",
                                                1: "B",
                                                2: "C",
                                                3: "D",
                                            };
                                            return (
                                                <div className="mb-2 d-flex justify-content-start align-items-center">
                                                    <input
                                                        className="me-2"
                                                        type="radio"
                                                        name={
                                                            selectedQuestion.id
                                                        }
                                                        key={e.id + index}
                                                        value={index + 1}
                                                        checked={
                                                            index + 1 ==
                                                            quizInput[
                                                                selectedQuestion
                                                                    .id
                                                            ]
                                                        }
                                                        onChange={
                                                            handleOptionChange
                                                        }
                                                    />
                                                    <h4
                                                        className="fw-normal p-0 m-0 d-flex gap-2"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                literal[index] +
                                                                "." +
                                                                e.option_text,
                                                        }}
                                                    ></h4>
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="mt-4">
                                    <button
                                        disabled={isStoreAnswer}
                                        onClick={() =>
                                            handleNext(
                                                currentQuestion + 1,
                                                selectedQuestion.id
                                            )
                                        }
                                        className={`btn ${
                                            currentQuestion <
                                            questions?.length - 1
                                                ? "btn-primary"
                                                : "btn-success"
                                        }`}
                                    >
                                        {isStoreAnswer && <MiniSpinner />}{" "}
                                        {currentQuestion < questions?.length - 1
                                            ? "Selanjutnya"
                                            : "Selesai"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>Nomor Soal</h3>
                                <hr className="border" />
                                <div className="d-flex flex-wrap justify-content-center align-items-center">
                                    {Object.values(questions).map(
                                        (e, index) => {
                                            return (
                                                <button
                                                    disabled={!(e.id in quizInput)}
                                                    onClick={() =>
                                                        handleSelectNumQuestion(
                                                            index
                                                        )
                                                    }
                                                    className={`btn m-1 ${
                                                        currentQuestion !==
                                                        index
                                                            ? "btn-outline-primary"
                                                            : "btn-primary"
                                                    }`}
                                                >
                                                    {index + 1}
                                                </button>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Authenticated>
    );
}

function QuizBrief({ quiz, onStart }) {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <h3 className="mb-2 text-capitalize">{quiz.title}</h3>
                    <p>{quiz.description}</p>
                </div>
                <div className="mt-4">
                    <hr className="border" />
                    <h4 className="p-0 m-0 fw-normal">
                        <i className="fas fa-clock me-2 text-primary"></i>
                        Waktu Mengerjakan {quiz.total_time} Menit
                    </h4>
                    <hr className="border" />
                    <div className="d-flex">
                        <h4 className="p-0 m-0 fw-normal">
                            <i className="fas fa-list-alt me-2 text-primary"></i>
                            Total {quiz.questions?.length} Soal
                        </h4>
                    </div>
                    <hr className="border" />
                </div>
                <div class="w-full p-4 text-white bg-primary opacity rounded">
                    <div class="items-center">
                        <p class="ms-3 fs-4 mb-2 text-white">
                            <b>Perhatian!</b>
                        </p>
                        <ol class="mt-0" style={{ listStyleType: "decimal" }}>
                            <li>
                                Pastikan anda menggunakan google chrome terbaru
                                agar tidak terjadi kendala dalam pengerjaan soal
                                tryout ini.{" "}
                            </li>
                            <li>
                                Pastikan tidak ada aktivitas login ke akun anda
                                (pada perangkat lain) saat sedang mengerjakan
                                tryout.{" "}
                            </li>
                            <li>
                                Mohon pastikan bahwa jaringan internet di tempat
                                anda mengerjakan soal ini lancar agar tidak
                                terjadi hal-al yang tidak diinginkan.
                            </li>
                            <li>
                                Jangan lupa berdoa ya. Biar semuanya
                                dilancarkan!
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="mt-4 gap-2 d-flex justify-content-end">
                    <button
                        onClick={() => onStart(true)}
                        className="btn btn-primary"
                    >
                        Mulai mengerjakan
                    </button>
                    <button
                        onClick={() =>
                            router.visit(
                                route("student.show_my_pake_detail", {
                                    id: quiz.paket_id,
                                })
                            )
                        }
                        className="btn btn-danger"
                    >
                        Batalkan
                    </button>
                </div>
            </div>
        </div>
    );
}
