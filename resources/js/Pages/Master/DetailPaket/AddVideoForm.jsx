import BaseForm from "@/App/Components/Base/Form/BaseForm";
import SelectInput from "@/App/Components/Base/Form/SelectInput";
import TextInput from "@/App/Components/Base/Form/TextInput";
import BaseModalTitle from "@/App/Components/Base/Modal/BaseModalTitle";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function AddVideoForm(props) {
    return (
        <BaseForm
            url="video.add_video"
            param={{ paket_id: props.detail.id }}
            onSuccessText="Berhasil menambahkan video"
        >
            <TextInput
                title="Url video"
                placeholder="Masukan url video dari youtube"
                name="url_video"
            />
        </BaseForm>
    );
}

export function AddVideoFormTitle() {
    return (
        <BaseModalTitle
            icon="fas fa-video"
            title="Tambah video"
            description="Tambahkan video ke dalam paket dengan mengisikan url video yang di dapatkan dari youtube"
        />
    );
}
