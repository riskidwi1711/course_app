import { router, usePage } from "@inertiajs/react";
import React from "react";
import { toggleModal, toggleToast } from "../Reducers/PageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function useAction() {
    const dispatch = useDispatch();
    const { currentPageIcon, currentPage } = useSelector((state) => state.page);

    const handleDelete = (url) => {
        router.delete(url, {
            onSuccess: dispatch(
                toggleToast({
                    show: true,
                    text: "Berhasil mengahpus paket",
                })
            ),
        });
    };

    const handleEdit = (form) => {
        dispatch(
            toggleModal({
                show: true,
                component: form,
                title: `Edit`,
            })
        );
    };

    const handleDetail = (url) => {
        router.get(url);
    };

    return { handleDelete, handleEdit, handleDetail };
}
