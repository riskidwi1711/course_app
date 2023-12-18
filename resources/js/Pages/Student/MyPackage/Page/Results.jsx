import React, { useState } from "react";
import QuizResultDetail from "./QuizResultDetail";
import QuizResultList from "./QuizResultList";

export default function Results(props) {
    const [isDetail, setIsDetail] = useState(false);
    const [result, setResult] = useState({});
    const handleDetail = (e) => {
        const tmpResults = props.results.filter((c) => c.id == e);
        setResult(tmpResults[0]);
        setIsDetail(true);
    };
    const handleBack = (e) => {
        setIsDetail(false);
    };
    console.log(props)
    return !isDetail ? (
        <QuizResultList quizez={props.results} onDetail={handleDetail} />
    ) : (
        <QuizResultDetail result={result} onBack={handleBack} />
    );
}
