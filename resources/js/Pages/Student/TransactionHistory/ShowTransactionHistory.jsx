import TableBasic, { TableWrapper } from "@/App/Components/Table/TableBasic";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

export default function ShowTransactionHistory({
    auth,
    pageIdentity,
    user_transactions,
}) {
    const columns = [
        {
            Header: "Tanggal Transaksi",
            accessor: "transaction_date",
        },
        {
            Header: "Produk",
            accessor: "product",
        },
        {
            Header: "Invoice",
            accessor: "invoice_no",
        },
        {
            Header: "Promo",
            accessor: "voucher_code",
        },
        {
            Header: "Total",
            accessor: "total_amount",
        },
    ];
    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <TableWrapper
                title="Riwayat Transaksi Saya"
                desc="List Riwayat Transaksi"
                canAdd={false}
                addForm={<div></div>}
            >
                {user_transactions ? (
                    <TableBasic
                        
                        data={user_transactions}
                        columns={columns}
                        getCellProps={(cellInfo) => ({
                            style: {
                                backgroundColor: `hsl(${
                                    120 * ((120 - cellInfo.value) / 120) * -1 +
                                    120
                                }, 100%, 67%)`,
                            },
                        })}
                    />
                ) : (
                    "No Data"
                )}
            </TableWrapper>
        </Authenticated>
    );
}
