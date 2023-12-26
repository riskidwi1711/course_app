import { router } from "@inertiajs/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    hideMiniLoading,
    showMiniLoading,
    toggleComponentLoading,
    toggleModal,
} from "@/App/Utils/Reducers/PageSlice";
import AddPaketModal, { AddPaketModalTitle } from "../Modal/AddPaketModal";
import EditPaketModal, { EditPaketModalTitle } from "../Modal/EditPaketModal";
import { usePaketContext } from "../Context/PaketContext";
import { useRouter } from "@/App/Utils/hooks/useRouter";

export default function usePaketCrud() {
    const prefix = "master.paket";
    const context = usePaketContext();
    const {visit} = useRouter()
    const [formData, setFormData] = useState({});
    const [contextData, setContextData] = useState(
        context ? context : {}
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setContextData(context);
    }, [context]);

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

    const handleEdit = useCallback(
        (row) => {
            dispatch(
                toggleModal({
                    title: <EditPaketModalTitle />,
                    component: (
                        <EditPaketModal {...contextData} row={row} />
                    ),
                    size: "md",
                    show: true,
                })
            );
        },
        [formData]
    );

    const handleAdd = () => {
        dispatch(
            toggleModal({
                title: <AddPaketModalTitle />,
                component: <AddPaketModal {...contextData} />,
                size: "md",
                show: true,
            })
        );
    };

    const handleView = (row) =>{
        visit(route("master.menu_paket", row.slug))
    }

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
