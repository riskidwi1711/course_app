import React, { useEffect, useState } from "react";
import { useQuizContext } from "../Context/QuizContext";
import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { ModalImportSoalTitle } from "../../PaketDetail/Modal/ModalImportSoal";
import { useRouter } from "@/App/Utils/hooks/useRouter";
import { useDispatch } from "react-redux";
import { CreateWizard } from "../Page/CreateWizard";
import DetailQuiz from "../Page/DetailQuiz";
import ErrorPage from "@/Pages/Error";
import ModalEditQuiz from "../Modal/ModalEditQuiz";
import ModalAddQuestions from "../Modal/ModalAddQuestions";
import ModalQuizShowResult from "../Modal/ModalQuizShowResult";
import ModalUploadQuestions from "../Modal/ModalUploadQuestions";
import ModalEditQuestions, { ModalEditQuestionTitle } from "../Modal/ModalEditQuestions";

export default function useQuizController() {
    // vars
    const context = useQuizContext();
    const initialPage = context.page_id ? context.page_id : "create";
    const initialForm = {
        paket_id: context.paket_detail?.id ? context.paket_detail?.id : null,
        paket_menu: context.paket_detail?.paket?.id
            ? context.paket_detail?.paket?.id
            : null,
        jenis_soal: context.quiz_type ? context.quiz_type : null,
        point_per_question: null,
        total_time: null,
    };

    // state
    const [form, setForm] = useState(initialForm);
    const [allFilled, setAllFilled] = useState(false);
    const [curentPage, setCurrentPage] = useState(initialPage);
    const [quizData, setQuizData] = useState({
        question_type: "multiple choice",
        image_link: null,
        time_in_seconds: 10,
        correct_answer: [],
        quiz_id: context.quiz?.id,
        paket_id: context.quiz?.paket_id,
    });

    // custom hooks
    const dispatch = useDispatch();
    const { post, visit } = useRouter();

    const pages = [
        { id: "create", component: <CreateWizard /> },
        { id: "detail", component: <DetailQuiz {...context} /> },
        { id: "default", component: <ErrorPage status={404} /> },
    ];

    const changePage = (pageId) => {
        setCurrentPage(pageId);
    };

    const renderPage = (pageId) => {
        let page = pages.find((e) => e.id == pageId).component;
        let default_page = pages.find((e) => e.id == "default").component;
        if (page) {
            return page;
        } else {
            default_page;
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (curentPage === "create") {
            setForm({
                ...form,
                [name]: value,
            });
        } else {
            setQuizData({ ...quizData, [name]: value });
        }
    };

    useEffect(() => {
        if (
            form.paket_id &&
            form.paket_menu &&
            form.point_per_question &&
            form.total_time
        ) {
            setAllFilled(true);
        } else {
            setAllFilled(false);
        }
    }, [form]);

    useEffect(() => {
        if (context.page_id) {
            changePage(context.page_id);
        }
    }, [context.page_id]);

    // handling
    const handleRoute = () => {
        post(route("soal.create_quiz"), form, () =>
            dispatch(
                toggleToast({
                    show: true,
                    text: `Berhasil menambahkan soal`,
                })
            )
        );
    };

    const handleImport = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <></>,
                title: <ModalImportSoalTitle />,
            })
        );
    };

    const handleAction = (actionId, id) => {
        if (actionId === "edit") {
            dispatch(
                toggleModal({
                    show: true,
                    component: <ModalEditQuiz quizDetail={context.quiz} />,
                    title: `Edit Soal`,
                })
            );
        } else if (actionId === "delete") {
            post(route("soal.delete_quiz", id), {
                paket_id: context.quiz?.paket_id,
            });
        } else if (actionId === "view") {
            visit(route("soal.detail_quiz", id));
        }
    };

    const handleAddQuestionn = () => {
        dispatch(
            toggleModal({
                show: true,
                component: (
                    <ModalAddQuestions
                        quiz_id={context.quiz?.id}
                        paket_id={context.quiz?.paket_id}
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
                    <ModalQuizShowResult
                        quiz_id={context.quiz?.id}
                        paket_id={context.quiz?.paket_id}
                    />
                ),
                title: "Tambah pertanyaan",
                size: "xl",
            })
        );
    };

    const handleImportSoal = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <ModalUploadQuestions detail={context.quiz} />,
                title: <ModalImportSoalTitle />,
                size: "md",
            })
        );
    };

    

    return {
        context,
        form,
        allFilled,
        curentPage,
        quizData,
        handleChange,
        handleImport,
        handleRoute,
        renderPage,
        changePage,
        handleAction,
        handleAddQuestionn,
        handleShowResult,
        handleImportSoal
    };
}
