import { ButtonAction } from "@/App/Components/Button";
import IconRepresentatif from "@/App/Components/IconRepresentatif";
import TableBasic, { TableWrapper } from "@/App/Components/Table/TableBasic";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import useAction from "@/App/Utils/hooks/useAction";
import useForm from "@/App/Utils/hooks/useForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function PaketProduk({
    auth,
    paket_produk,
    paket,
    kategori,
    pageIdentity,
}) {
    const dispatch = useDispatch();
    const { handleDelete, handleEdit } = useAction();
    const columns = [
        {
            Header: "Judul",
            accessor: "title",
        },
        {
            Header: "Paket",
            accessor: "paket_name",
        },
        {
            Header: "Kategori",
            accessor: "kategori_name",
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
                                dispatch(
                                    toggleModal({
                                        show: true,
                                        component: (
                                            <ViewPaketProduct detail={row} />
                                        ),
                                        title: `Detail Paket Produk`,
                                    })
                                )
                            }
                        />
                        <ButtonAction
                            action="edit"
                            onClick={() => handleEdit(row.value)}
                        />
                        <ButtonAction
                            action="delete"
                            onClick={() =>
                                handleDelete(
                                    "/dashboard/master/produk_paket/delete",
                                    row.value
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

    const props = {
        paket: transformedData(paket),
        kategori: transformedData(kategori),
        data: {},
    };

    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <TableWrapper
                title="Paket Produk"
                desc="List Paket Produk"
                addForm={<AddPaketProdukForm {...props} />}
            >
                {paket_produk ? (
                    <TableBasic
                        data={paket_produk}
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

export function AddPaketProdukForm(props) {
    const form = {
        form_obj: [
            {
                name: "title",
                placeholder: "Masukan nama produk",
                type: "text",
                size: "half",
            },
            {
                name: "price",
                placeholder: "Masukan harga",
                type: "number",
                size: "half",
            },
            {
                name: "discount",
                placeholder: "Masukan diskon",
                type: "number",
                size: "full",
            },
            {
                name: "paket_id",
                placeholder: "Pilih paket",
                type: "select",
                options: props.paket,
                size: "half",
            },
            {
                name: "kategori_id",
                placeholder: "Pilih kategori",
                type: "select",
                options: props.kategori,
                size: "half",
            },
            {
                name: "is_active",
                placeholder: "Pilih status",
                type: "select",
                size: "full",
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
            url: "produk_paket/create",
            onSuccessMessage: "Berhasil menambah produk",
            method: "POST",
        },
    };
    const { renderedForm } = useForm(form, props.data);

    return renderedForm;
}

function AdditionalForm({ onChange }) {
    const [inputs, setInputs] = useState([""]); // Initial input field

    const addInput = () => {
        setInputs([...inputs, ""]); // Add a new input field
    };

    const removeInput = (e, index) => {
        e.preventDefault();
        const updatedInputs = [...inputs];
        updatedInputs.splice(index, 1);
        setInputs(updatedInputs);
    };

    return (
        <div className="d-flex justify-content-between col-12">
            <div className="col-11">
                {inputs.map((e, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col-10">
                                <input
                                    className="form-control mb-2"
                                    type="text"
                                    name={index}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="col-2">
                                <div className="d-flex gap-2">
                                    <div
                                        className="btn btn-primary"
                                        onClick={(e) => removeInput(e, index)}
                                    >
                                        Remove
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="col-1">
                <div className="btn btn-primary" onClick={addInput}>
                    Add
                </div>
            </div>
        </div>
    );
}

export function ViewPaketProduct({ detail }) {
    const [currentTab, setCurrentTab] = useState("detail");
    console.log(detail);
    const data = detail;
    return (
        <div>
            <div class="card-body">
                <ul class="nav nav-pills nav-justified" role="tablist">
                    <li
                        class="nav-item waves-effect waves-light"
                        role="presentation"
                    >
                        <a
                            class={`nav-link ${
                                currentTab === "detail" && "active"
                            }`}
                            data-bs-toggle="tab"
                            href="#home-1"
                            onClick={() => setCurrentTab("detail")}
                            role="tab"
                            aria-selected="true"
                        >
                            <span class="d-block d-sm-none">
                                <i class="fas fa-home"></i>
                            </span>
                            <span class="d-none d-sm-block">Detail</span>
                        </a>
                    </li>
                    <li
                        class="nav-item waves-effect waves-light"
                        role="presentation"
                    >
                        <a
                            class={`nav-link ${
                                currentTab === "features" && "active"
                            }`}
                            data-bs-toggle="tab"
                            href="#profile-1"
                            onClick={() => setCurrentTab("features")}
                            role="tab"
                            aria-selected="false"
                            tabindex="-1"
                        >
                            <span class="d-block d-sm-none">
                                <i class="far fa-user"></i>
                            </span>
                            <span class="d-none d-sm-block">Features</span>
                        </a>
                    </li>
                </ul>

                <div class="tab-content p-3 text-muted mt-4">
                    <div class="tab-pane active show">
                        {currentTab === "detail" ? (
                            Object.keys(data).map((key) => {
                                if (
                                    ![
                                        "paket",
                                        "kategori",
                                        "category_id",
                                        "paket_id",
                                        "created_at",
                                        "updated_at",
                                        "id",
                                        "features",
                                    ].includes(key)
                                ) {
                                    return (
                                        <div class="row mb-4">
                                            <label
                                                for="horizontal-firstname-input "
                                                class="col-sm-3 col-form-label text-capitalize"
                                            >
                                                {key.replace("_", " ")}
                                            </label>
                                            <div class="col-sm-9">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    disabled
                                                    value={data[key]}
                                                />
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        ) : (
                            <div>
                                <ul className="p-0">
                                    {Object.values(data["features"]).map(
                                        (item) => {
                                            return (
                                                <li>
                                                    {" "}
                                                    <i class="uil uil-check-circle text-success"></i>{" "}
                                                    {item.title}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
