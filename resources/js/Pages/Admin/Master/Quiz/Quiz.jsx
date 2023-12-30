import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import QuizContext from "./Context/QuizContext";
import QuizList from "./List/QuizList";

export default function Quiz(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <QuizContext.Provider value={props}>
                <QuizList/>
            </QuizContext.Provider>
        </Authenticated>
    );
}
