import { createContext, useContext } from "react";

const TransactionContext = createContext();

export default TransactionContext;

export const useTransactionContext = () => {
    return useContext(TransactionContext);
};
