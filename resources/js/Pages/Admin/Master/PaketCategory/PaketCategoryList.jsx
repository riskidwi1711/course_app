import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PaketCategoryTable from "./Table/PaketCategoryTable";
import { CardWithAction } from "@/App/Components/Card";
import { useDispatch } from "react-redux";
import AddPaketCategoryModal from "./Modal/AddPaketCategoryModal";
import AddPaketCategoryModalTitle from "./Modal/AddPaketCategoryModalTitle";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import useCrud from "@/App/Utils/hooks/useCrud";

export default function PaketCategoryList(props) {
    const dispatch = useDispatch();

    const handleAddPaketCategory = () => {
        dispatch(
            toggleModal({
                title: <AddPaketCategoryModalTitle />,
                component: <AddPaketCategoryModal {...props}/>,
                size: "md",
                show: true,
            })
        );
    };
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <CardWithAction
                title="List Kategori Paket"
                desc="Daftar kategori paket yang digunakan untuk mengkategorikan paket yang dibuat berdasarkan kategori"
                actionText="Tambah Kategori"
                onAction={handleAddPaketCategory}
            >
                <PaketCategoryTable category={props.paket_category} />
            </CardWithAction>
        </Authenticated>
    );
}
