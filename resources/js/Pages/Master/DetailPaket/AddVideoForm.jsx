import BaseForm from "@/App/Components/Base/Form/BaseForm";
import SelectInput from "@/App/Components/Base/Form/SelectInput";
import TextInput from "@/App/Components/Base/Form/TextInput";
import BaseModalTitle from "@/App/Components/Base/Modal/BaseModalTitle";
import React from "react";

export default function AddVideoForm() {
    return (
        <BaseForm url="test.post" onSuccess={(msg)=>{}}>
            <TextInput
                title="Url video"
                placeholder="Masukan url video dari youtube"
                name="url"
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
