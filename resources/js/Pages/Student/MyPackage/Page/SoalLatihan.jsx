import { StudentSoalCard } from "@/App/Components/Cards/SoalCard";
import { generateRandomString } from "@/App/Utils/helpers";
import { router } from "@inertiajs/react";
import React from "react";

export default function SoalLatihan(props) {
    const handleAction = (id) => {
        router.visit(
            route("student.show_my_pake_detail.start_quiz", {
                quiz_id: id,
            })
        );
    };
    const quiz = props.paket.quiz.filter((e) => e.quiz_type == "soal latihan");
    return (
        <div className="row">
            {Object.values(quiz).map((e) => {
                return (
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <StudentSoalCard
                            title={e.title}
                            type={e.quiz_type}
                            handleAction={() => handleAction(e.id)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
