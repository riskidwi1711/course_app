import { CrudButton } from "@/App/Components/Button";
import TableGrid from "@/App/Components/Table/TableGrid";
import React from "react";
import { CardWithAction } from "@/App/Components/Card";
import IconRepresentatif from "@/App/Components/IconRepresentatif";
import usePaketProductCrud from "../Hooks/usePaketProductCrud";
import { formatPersentase, formatRupiah } from "@/App/Utils/helpers";

export default function PaketList() {
    const { handleDelete, handleEdit, handleAdd, handleView, contextData } =
        usePaketProductCrud();
    const columns = [
        { field: "title", headerName: "Nama Paket", flex: 2 },
        {
            field: "base_price",
            headerName: "Harga Dasar",
            flex: 2,
            valueGetter: (params) => formatRupiah(params.value),
        },
        {
            field: "discount_price",
            headerName: "Diskon",
            flex: 1,
            valueGetter: (params) => formatPersentase(params.value),
        },
        {
            field: "reduced_price",
            headerName: "Harga Diskon",
            flex: 2,
            valueGetter: (params) => formatRupiah(params.value),
        },
        { field: "paket_name", headerName: "Paket", flex: 1 },
        { field: "kategori_name", headerName: "Kategori", flex: 2 },
        {
            field: "is_active",
            headerName: "Status",
            flex: 1,
            renderCell: (params) => <IconRepresentatif value={params.value} />,
        },
        { field: "created_at", headerName: "Tgl Dibuat", flex: 2 },
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
            title="List Produk Paket"
            desc="Daftar produk paket yang telah dibuat"
            actionText="Tambah Produk Paket"
            onAction={handleAdd}
        >
            {" "}
            <TableGrid columns={columns} data={contextData.paket_produk} />
        </CardWithAction>
    );
}
