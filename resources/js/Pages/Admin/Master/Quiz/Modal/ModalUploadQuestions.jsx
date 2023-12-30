import BaseModalTitle from "@/App/Components/Base/Modal/BaseModalTitle";
import { DragAndDropUpload } from "@/App/Components/DragAndDropUpload";
import React from "react";

export default function ModalUploadQuestions(props) {
    return (
        <DragAndDropUpload
            {...props}
            formattedFIle={true}
            desc="file"
            params={{ quiz_id: props.detail.id, route:"soal.upload_question" }}
        />
    );
}

export function ModalUploadQuestionsTitle() {
    return (
        <BaseModalTitle
            icon="uil uil-plus fs-4"
            title="Upload Pertanyaan"
            description="upload pertanyaan dari excel"
        />
    );
}
