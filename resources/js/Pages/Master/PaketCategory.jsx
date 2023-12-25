import { ButtonAction } from "@/App/Components/Button";
import TableBasic, { TableWrapper } from "@/App/Components/Table/TableBasic";
import useForm from "@/App/Utils/hooks/useForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

export default function PaketCategory({
    auth,
    paket_category,
    pageIdentity,
    paket,
}) {
    const columns = [
        {
            Header: "Judul",
            accessor: "title",
        },
        {
            Header: "Deskripsi",
            accessor: "description",
        },
        {
            Header: "Action",
            accessor: "id",
            className: "hello",
            style: { width: 10 + "%" },
            Cell: (row) => {
                let package_name = row.row.original.slug;
                return (
                    <div className="d-flex gap-2">
                        <ButtonAction
                            onClick={() =>
                                handleEdit(
                                    <PaketForm data={row.row.original} />
                                )
                            }
                            action="edit"
                        />
                        <ButtonAction
                            action="delete"
                            onClick={() =>
                                handleDelete(
                                    route("master.paket.delete", row.value)
                                )
                            }
                        />
                    </div>
                );
            },
        },
    ];
    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <TableWrapper
                title="Paket Kategori"
                desc="List Paket Kategori"
                addForm={<AddPaketCategoryForm data={{}} paket={paket} />}
            >
                {paket_category ? (
                    <TableBasic
                        data={paket_category}
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

export function AddPaketCategoryForm(props) {
    const form = {
        form_obj: [
            {
                name: "title",
                placeholder: "Masukan nama kategori",
                type: "text",
            },
            {
                name: "description",
                placeholder: "Masukan deskripsi kategori",
                type: "text",
            },
            {
                name: "paket_id",
                placeholder: "Pilih salah satu",
                type: "select",
                options: Object.values(props.paket).map((e) => {
                    return {
                        title: e.package_name,
                        value: e.id,
                    };
                }),
            },
        ],
        form_identity: {
            type: "add",
            button: "Simpan data",
            url: route("master.paket_kategori.create"),
            method: "POST",
        },
    };
    const { renderedForm } = useForm(form, props.data);

    return <form>{renderedForm}</form>;
}
