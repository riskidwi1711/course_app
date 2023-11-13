import { ButtonAction } from "@/App/Components/Button";
import IconRepresentatif from "@/App/Components/IconRepresentatif";
import TableBasic, { TableWrapper } from "@/App/Components/Table/TableBasic";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import useAction from "@/App/Utils/hooks/useAction";
import useForm from "@/App/Utils/hooks/useForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";

import React from "react";
import { useDispatch } from "react-redux";

export default function Paket({ auth, paket, pageIdentity }) {
    const { handleDelete, handleEdit } = useAction(route("dashboard"));
    const columns = [
        {
            Header: "Nama Paket",
            accessor: "package_name",
        },
        {
            Header: "Status",
            accessor: "is_active",
            style: { width: 10 + "%", textAlign: "center" },
            Cell: (row) => {
                return <IconRepresentatif value={row.value} />;
            },
        },
        {
            Header: "Url",
            accessor: "url",
        },
        {
            Header: "Tanggal dibuat",
            accessor: "created_at",
            style: { width: 15 + "%", textAlign: "center" },
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
                            action="view"
                            onClick={() =>
                                router.visit(
                                    route("master.menu_paket", package_name)
                                )
                            }
                        />
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
                                    "/dashboard/master/paket/delete",
                                    row.value
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
                title="Menu Paket"
                desc="List Menu Paket"
                addForm={<PaketForm data={{}} />}
            >
                {paket ? (
                    <TableBasic
                        data={paket}
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

export function PaketForm(props) {
    const form = {
        form_obj: [
            {
                name: "package_name",
                placeholder: "Masukan nama paket",
                type: "text",
            },
            {
                name: "is_categorized",
                placeholder: "Pilih salah satu",
                type: "select",
                options: [
                    {
                        title: "Terkategori",
                        value: "T",
                    },
                    {
                        title: "Tidak terkategori",
                        value: "F",
                    },
                ],
            },
            {
                name: "is_active",
                placeholder: "Pilih salah satu",
                type: "select",
                options: [
                    {
                        title: "Active",
                        value: "T",
                    },
                    {
                        title: "Inactive",
                        value: "F",
                    },
                ],
            },
        ],
        form_identity: {
            type: "add",
            button: "Simpan data",
            url: "paket/create",
            method: "POST",
        },
    };

    const { renderedForm } = useForm(form, props.data);

    return renderedForm;
}
