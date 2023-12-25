import { router } from "@inertiajs/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    hideMiniLoading,
    showMiniLoading,
    toggleComponentLoading,
    toggleModal,
} from "../Reducers/PageSlice";

export default function useCrud(prefix) {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post(route(prefix + ".create"), formData, {
            onBefore: () => dispatch(showMiniLoading()),
            onFinish: () => dispatch(hideMiniLoading()),
            onError: () => dispatch(hideMiniLoading()),
            onSuccess: () => {
                dispatch(hideMiniLoading());
                dispatch(toggleModal({ show: false }));
            },
        });
    };

    const handleDataChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDelete = (id) => {
        router.delete(route(prefix + ".delete", id), {
            onBefore: () => dispatch(toggleComponentLoading(true)),
            onFinish: () => dispatch(toggleComponentLoading(false)),
            onError: () => dispatch(toggleComponentLoading(false)),
            onSuccess: () => dispatch(toggleComponentLoading(false)),
        });
    };


    return { handleDataChange, handleSubmit, handleDelete };
}
