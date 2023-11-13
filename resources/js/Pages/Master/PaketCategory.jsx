import TableBasic, { TableWrapper } from "@/App/Components/Table/TableBasic";
import useForm from "@/App/Utils/hooks/useForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";


export default function PaketCategory({auth, paket_category, pageIdentity}) {
    const columns = [
        {
            Header: "Judul",
            accessor: "title",
        },
        {
            Header: "Deskripsi",
            accessor: "description",
        },
    ];
  return (
    <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <TableWrapper
                title="Paket Kategori"
                desc="List Paket Kategori"
                addForm={<AddPaketCategoryForm/>}
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
  )
}


export function AddPaketCategoryForm() {
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
        ],
        form_identity: {
            type: "add",
            button: "Simpan data",
            url: "paket_kategori/create",
            method: "POST",
        },
    };
    const { renderedForm } = useForm(form);

    return <form>{renderedForm}</form>;
}
