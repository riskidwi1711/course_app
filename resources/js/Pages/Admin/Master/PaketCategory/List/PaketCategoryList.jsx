import { CrudButton } from "@/App/Components/Button";
import TableGrid from "@/App/Components/Table/TableGrid";
import React from "react";
import { useSelector } from "react-redux";
import EditPaketCategoryModalTitle from "../Modal/EditPaketCategoryModalTitle";
import EditPaketCategoryModal from "../Modal/EditPaketCategoryModal";
import usePaketCategoryCrud from "../Hooks/usePaketCategoryCrud";
import { usePaketCategoryContext } from "../Context/PaketCategoryContext";
import { CardWithAction } from "@/App/Components/Card";

export default function PaketCategoryList() {
    const { handleDelete, handleEdit, handleAdd, contextData } = usePaketCategoryCrud();
    const columns = [
        { field: "title", headerName: "Nama Kategori", flex: 3 },
        { field: "description", headerName: "Deskripsi", flex: 3 },
        {
            field: "paket",
            headerName: "Paket",
            flex: 1,
            valueGetter: (params) => params.value?.package_name,
        },
        {
            field: "id",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => (
                <CrudButton
                    param={params}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ),
        },
    ];
    return (
        <CardWithAction
            title="List Kategori Paket"
            desc="Daftar kategori paket yang digunakan untuk mengkategorikan paket yang dibuat berdasarkan kategori"
            actionText="Tambah Kategori"
            onAction={handleAdd}
        >
            {" "}
            <TableGrid
                columns={columns}
                data={contextData.paket_category}
            />
        </CardWithAction>
    );
}
