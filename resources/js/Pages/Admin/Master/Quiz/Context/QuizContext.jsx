import { createContext, useContext } from "react";

const QuizContext = createContext();

export default QuizContext;

export const useQuizContext = () => {
    return useContext(QuizContext);
};
