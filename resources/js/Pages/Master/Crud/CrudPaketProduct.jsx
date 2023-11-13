import Step from "@/App/Components/Step/Step";
import useForm from "@/App/Utils/hooks/useForm";
import React from "react";

export function AddPaketProduct(props) {
    const form = {
        form_obj: [
            {
                name: "title",
                placeholder: "Masukan nama paket",
                type: "text",
                size: "full",
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
            props.page !== 'paket_skd' && {
                name: "kategori_id",
                placeholder: "Pilih kategori",
                type: "select",
                size: "full",
                options: props.kategori
            },
            {
                name: "base_price",
                placeholder: "Masukan harga",
                type: "number",
                size: "half",
            },
            {
                name: "discount_price",
                placeholder: "Masukan diskon",
                type: "number",
                size: "half",
            },
        ],
        form_identity: {
            type: "add",
            step: false,
            button: "Simpan data",
            url: route('master.produk_paket.create'),
            onSuccessMessage: "Berhasil menambah produk",
            static_param: props.page ? props.page : null,
            method: "POST",
        },
    };
    const { renderedForm } = useForm(form, props.data);

    return renderedForm;
}
