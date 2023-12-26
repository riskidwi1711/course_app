import { createContext, useContext } from 'react';

const PaketCategoryContext = createContext();

export default PaketCategoryContext;

export const usePaketCategoryContext = () =>{
    return useContext(PaketCategoryContext);
}