import { ButtonAction } from "@/App/Components/Button";
import IconRepresentatif from "@/App/Components/IconRepresentatif";
import TableBasic, { TableWrapper } from "@/App/Components/Table/TableBasic";
import React from "react";
import { useDispatch } from "react-redux";
import { AddPaketProduct } from "../Crud/CrudPaketProduct";
import useAction from "@/App/Utils/hooks/useAction";

function SkdPage(props) {
    const dispatch = useDispatch();
    const { handleDelete, handleEdit, handleDetail } = useAction();
    const { table, additional } = props.data;
    const { paket, category } = additional;
    const columns = [
        {
            Header: "Judul",
            accessor: "title",
        },
        {
            Header: "Dibuat",
            accessor: "created_at",
        },

        {
            Header: "Harga",
            accessor: "base_price",
        },
        {
            Header: "Diskon",
            accessor: "discount_price",
        },
        {
            Header: "Active",
            accessor: "is_active",
            style: { width: 10 + "%", textAlign: "center" },
            Cell: (row) => {
                return <IconRepresentatif value={row.value} />;
            },
        },
        {
            Header: "Action",
            accessor: "id",
            className: "hello",
            style: { width: 10 + "%" },
            Cell: (row) => {
                return (
                    <div className="d-flex gap-2">
                        <ButtonAction
                            action="view"
                            onClick={() =>
                                handleDetail(
                                    route(
                                        "master.produk_paket.detail",
                                        row.value
                                    )
                                )
                            }
                        />
                        <ButtonAction
                            action="edit"
                            onClick={() =>
                                handleEdit(
                                    <AddPaketProduct
                                        {...props}
                                        data={row.row.original}
                                    />
                                )
                            }
                        />
                        <ButtonAction
                            action="delete"
                            onClick={() =>
                                handleDelete(
                                    route(
                                        "master.produk_paket.delete",
                                        row.value
                                    )
                                )
                            }
                        />
                    </div>
                );
            },
        },
    ];

    const transformedData = (data) => {
        let datatransformed = data.map((item) => {
            return {
                title: item["package_name"]
                    ? item["package_name"]
                    : item["title"],
                value: item["id"],
            };
        });

        return datatransformed;
    };

    props = {
        paket: transformedData(paket),
        kategori: transformedData(category),
        data: {},
        page: props.page,
    };

    return (
        <TableWrapper
            title="Paket SKD"
            desc="List paket SKD"
            addForm={<AddPaketProduct {...props} />}
        >
            {table ? (
                <TableBasic
                    data={table}
                    columns={columns}
                    getCellProps={(cellInfo) => ({
                        style: {
                            backgroundColor: `hsl(${
                                120 * ((120 - cellInfo.value) / 120) * -1 + 120
                            }, 100%, 67%)`,
                        },
                    })}
                />
            ) : (
                "No Data"
            )}
        </TableWrapper>
    );
}

export default SkdPage;
