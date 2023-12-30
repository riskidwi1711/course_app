import React, { useCallback, useState } from "react";
import { useQuizContext } from "../Context/QuizContext";
import { useDispatch } from "react-redux";
import { useRouter } from "@/App/Utils/hooks/useRouter";
import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import ModalEditQuestions, {
    ModalEditQuestionTitle,
} from "../Modal/ModalEditQuestions";
import { validateObject } from "@/App/Utils/helpers";
import useModal from "@/App/Utils/hooks/useModal";

export default function useQuizDetailController() {
    const context = useQuizContext();

    // custom hooks
    const dispatch = useDispatch();
    const { post, visit } = useRouter();
    const {togglegModal} = useModal()

    // state
    const [editQuestionData, setEditQuestionData] = useState({});
    const [editOptionData, setEditOptionData] = useState([]);

    const handleChangeEditQuestion = useCallback(
        (e) => {
            const { name, value } = e.target;
            setEditQuestionData((prevData) => ({ ...prevData, [name]: value }));
        },
        [editOptionData]
    );

    const handleChangeEditOption = (index, e) => {
        let copyOfEditOtpionData = editOptionData;
        copyOfEditOtpionData[index].option_text = e;
        console.log(copyOfEditOtpionData);
        setEditOptionData(copyOfEditOtpionData);
    };

    const handleDeleteQuestion = (id) => {
        post(route("soal.delete_question", id), {}, () => {
            dispatch(
                toggleToast({
                    show: true,
                    text: "Berhasil menghapus pertanyaan",
                })
            );
        });
    };

    const handleEditQuestion = (question) => {
        dispatch(
            toggleModal({
                show: true,
                component: <ModalEditQuestions {...question} />,
                title: <ModalEditQuestionTitle />,
                size: "md",
            })
        );
    };

    const handleSaveEditQuestion = (e) => {
        e.preventDefault();
        let data = Object.assign({}, editQuestionData);
        data.options = editOptionData;
        let validate = validateObject(data, ['options', 'explanation_text', 'question_text']);
        if (validate) {
            togglegModal(false)
            post(route("soal.edit_question"), data, () => {
                dispatch(
                    toggleToast({
                        show: true,
                        text: "Berhasil mengubah pertanyaan",
                    })
                );
            });
        } else {
            dispatch(
                toggleToast({
                    show: true,
                    text: "Data tidak boleh kosong",
                })
            );
        }
    };

    return {
        editQuestionData,
        editOptionData,
        setEditQuestionData,
        setEditOptionData,
        handleChangeEditOption,
        handleDeleteQuestion,
        handleEditQuestion,
        handleChangeEditQuestion,
        handleSaveEditQuestion,
    };
}
