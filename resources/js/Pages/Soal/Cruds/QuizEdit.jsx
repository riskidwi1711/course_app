import BaseForm from "@/App/Components/Base/Form/BaseForm";
import TextInput from "@/App/Components/Base/Form/TextInput";
import { router } from "@inertiajs/react";
import React from "react";

export default function QuizEdit({ quizDetail }) {
    return (
        <BaseForm
            incomingData={quizDetail}
            url={"soal.edit_quiz"}
            param={{ quiz_id: quizDetail.id }}
            onSuccess={() => router.visit(route("soal.detail_quiz", quizDetail.id))}
        >
            <TextInput
                title="Judul Soal"
                placeholder="Masukan url video dari youtube"
                name="title"
            />
        </BaseForm>
    );
}
