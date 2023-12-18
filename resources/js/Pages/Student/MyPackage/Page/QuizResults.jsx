import ProgressBar from "@/App/Components/CircularProgressBar";
import { HdDp_img } from "@/App/Theme/images";
import { calculateTimeDifference } from "@/App/Utils/helpers";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import QuizResultDetail from "./QuizResultDetail";
import QuizResultList from "./QuizResultList";

export default function QuizResults({ auth, pageIdentity, results }) {
    const [isDetail, setIsDetail] = useState(false);
    const [result, setResult] = useState({})
    const handleDetail = (e) =>{
        const tmpResults = results.filter((c)=>c.id == e)
        setResult(tmpResults[0])
        setIsDetail(true)
    }
    const handleBack = (e) =>{
        setIsDetail(false)
    }
    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            {!isDetail ? (
                <QuizResultList quizez={results} onDetail={handleDetail}/>
            ) : (
                <QuizResultDetail result={result} onBack={handleBack}/>
            )}
        </Authenticated>
    );
}
