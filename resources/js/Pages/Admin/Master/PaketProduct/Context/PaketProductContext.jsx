import { createContext, useContext } from "react";

const PaketProductContext = createContext();

export default PaketProductContext;

export const usePaketProductContext = () => {
    return useContext(PaketProductContext);
};
