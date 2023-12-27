import { CrudButton } from "@/App/Components/Button";
import TableGrid from "@/App/Components/Table/TableGrid";
import React from "react";
import { Card, CardWithAction } from "@/App/Components/Card";
import IconRepresentatif from "@/App/Components/IconRepresentatif";
import useTransactionCrud from "../Hooks/useTransactionCrud";
import { formatPersentase, formatRupiah } from "@/App/Utils/helpers";

export default function TransactionList() {
    const { contextData } = useTransactionCrud();
    const columns = [
        { field: "created_at", headerName: "Tgl Transaksi", flex: 3 },
        {
            field: "user",
            headerName: "Nama",
            flex: 3,
            valueGetter: (params) => params.value.name,
        },
        {
            field: "transaction_id",
            headerName: "Produk",
            flex: 3,
            valueGetter: (params) => params.row.product?.title,
        },
        {
            field: "status_id",
            headerName: "Status",
            flex: 1.5,
            renderCell: (params) => <IconRepresentatif value={params.value} />,
        },
        {
            field: "products",
            headerName: "Harga Produk",
            flex: 3,
            valueGetter: (params) =>
                formatRupiah(params.row.product?.reduced_price),
        },
        {
            field: "product_discount",
            headerName: "Diskon Produk",
            flex: 2,
            valueGetter: (params) =>
                formatPersentase(params.row.product?.discount_price),
        },
        {
            field: "voucher_price",
            headerName: "Diskon Voucher",
            flex: 2,
            valueGetter: (params) => formatPersentase(params.row.discount),
        },
        {
            field: "amount",
            headerName: "Total Bayar",
            flex: 3,
            valueGetter: (params) => formatRupiah(params.value),
        },
    ];

    console.log(contextData.transactions);
    return (
        <Card title="List Transaksi" desc="Daftar Transaksi Pengguna">
            {" "}
            <TableGrid columns={columns} data={contextData.transactions} />
        </Card>
    );
}
