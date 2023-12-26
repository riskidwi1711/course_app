import { router } from "@inertiajs/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    hideMiniLoading,
    showMiniLoading,
    toggleComponentLoading,
    toggleModal,
} from "@/App/Utils/Reducers/PageSlice";
import EditPaketCategoryModal from "../Modal/EditPaketCategoryModal";
import EditPaketCategoryModalTitle from "../Modal/EditPaketCategoryModalTitle";
import AddPaketCategoryModalTitle from "../Modal/AddPaketCategoryModalTitle";
import AddPaketCategoryModal from "../Modal/AddPaketCategoryModal";
import { usePaketCategoryContext } from "../Context/PaketCategoryContext";

export default function usePaketCategoryCrud() {
    const prefix = "master.paket_kategori";
    const paketCategoryContext = usePaketCategoryContext();
    const [formData, setFormData] = useState({});
    const [contextData, setContextData] = useState(
        paketCategoryContext ? paketCategoryContext : {}
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setContextData(paketCategoryContext);
    }, [paketCategoryContext]);

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

    const handleEdit = useCallback((row)=>{
        setFormData(row)
        dispatch(
            toggleModal({
                title: <EditPaketCategoryModalTitle />,
                component: <EditPaketCategoryModal {...contextData} row={row}/>,
                size: "md",
                show: true,
            })
        );
    }, [formData])

    const handleAdd = () => {
        dispatch(
            toggleModal({
                title: <AddPaketCategoryModalTitle />,
                component: <AddPaketCategoryModal {...contextData} />,
                size: "md",
                show: true,
            })
        );
    };

    return {
        handleDataChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleAdd,
        setFormData,
        formData,
        contextData,
    };
}
