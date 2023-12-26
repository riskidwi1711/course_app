import { createContext, useContext } from "react";

const PaketContext = createContext();

export default PaketContext;

export const usePaketContext = () => {
    return useContext(PaketContext);
};
