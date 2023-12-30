import { createContext, useContext } from "react";

const PaketDetailContext = createContext();

export default PaketDetailContext;

export const usePaketDetailContext = () => {
    return useContext(PaketDetailContext);
};
