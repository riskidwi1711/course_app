import { router } from "@inertiajs/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    hideMiniLoading,
    showMiniLoading,
    toggleComponentLoading,
    toggleModal,
} from "@/App/Utils/Reducers/PageSlice";
import { usePaketMenuContext } from "../Context/PaketMenuContext";
import EditPaketMenuModal, { EditPaketMenuModalTitle } from "../Modal/EditPaketMenuModal";
import AddPaketMenuModal, { AddPaketMenuModalTitle } from "../Modal/AddPaketMenuModal";
import { useRouter } from "@/App/Utils/hooks/useRouter";

export default function usePaketMenuCrud() {
    const prefix = "master.produk_paket";
    const paketCategoryContext = usePaketMenuContext();
    const { visit } = useRouter();
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
                title: <EditPaketMenuModalTitle />,
                component: <EditPaketMenuModal {...contextData} row={row}/>,
                size: "md",
                show: true,
            })
        );
    }, [formData])

    const handleAdd = () => {
        dispatch(
            toggleModal({
                title: <AddPaketMenuModalTitle />,
                component: <AddPaketMenuModal {...contextData} />,
                size: "md",
                show: true,
            })
        );
    };

    const handleView = (row) => {
        visit(route("master.produk_paket.detail", row.id));
    };


    return {
        handleDataChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleAdd,
        handleView,
        setFormData,
        formData,
        contextData,
    };
}
