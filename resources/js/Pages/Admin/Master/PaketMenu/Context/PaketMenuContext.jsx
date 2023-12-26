import { createContext, useContext } from "react";

const PaketMenuContext = createContext();

export default PaketMenuContext;

export const usePaketMenuContext = () => {
    return useContext(PaketMenuContext);
};
