import React from "react";
import useQuizController from "../Hooks/useQuizController";

export default function QuizList() {
    const { renderPage, curentPage } = useQuizController();

    return renderPage(curentPage);
}
