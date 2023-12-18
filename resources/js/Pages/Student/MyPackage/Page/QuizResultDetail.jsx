import BackButton from "@/App/Components/BackButton";
import { ResultQuestionExplanation, ResultQuizHeader } from "@/App/Components/Cards/SoalCard";
import React from "react";

export default function QuizResultDetail({ onBack = () => {}, result }) {
    console.log(result);
    return (
        <div>
            <BackButton onBack={onBack} />
            <div className="row">
                <div className="col-lg-12">
                    <ResultQuizHeader result={result}/>
                    <ResultQuestionExplanation userAnswer={result.user_answers}/>
                </div>
            </div>
        </div>
    );
}
