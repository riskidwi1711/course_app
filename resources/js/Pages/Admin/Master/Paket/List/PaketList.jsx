import { CrudButton } from "@/App/Components/Button";
import TableGrid from "@/App/Components/Table/TableGrid";
import React from "react";
import { CardWithAction } from "@/App/Components/Card";
import usePaketCrud from "../Hooks/usePaketCrud";
import IconRepresentatif from "@/App/Components/IconRepresentatif";

export default function PaketList() {
    const { handleDelete, handleEdit, handleAdd,handleView, contextData } = usePaketCrud();
    const columns = [
        { field: "package_name", headerName: "Nama Paket", flex: 3 },
        {
            field: "is_active",
            headerName: "Status",
            flex: 1,
            renderCell: (params) => (
                <IconRepresentatif
                    value={params.value}
                />
            ),
        },
        { field: "url", headerName: "Link", flex: 2 },
        { field: "created_at", headerName: "Tgl Dibuat", flex: 1 },
        {
            field: "id",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => (
                <CrudButton
                    param={params}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onView={handleView}
                />
            ),
        },
    ];
    return (
        <CardWithAction
            title="List Paket"
            desc="Daftar paket yang telah dibuat"
            actionText="Tambah Paket"
            onAction={handleAdd}
        >
            {" "}
            <TableGrid columns={columns} data={contextData.paket} />
        </CardWithAction>
    );
}
