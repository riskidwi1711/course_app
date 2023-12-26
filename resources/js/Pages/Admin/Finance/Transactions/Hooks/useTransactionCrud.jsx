import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "@/App/Utils/hooks/useRouter";
import { useTransactionContext } from "../Context/TransactionContext";

export default function useTransactionCrud() {
    const prefix = "admin.finance.transaction";
    const context = useTransactionContext();
    const {visit} = useRouter()
    const [formData, setFormData] = useState({});
    const [contextData, setContextData] = useState(
        context ? context : {}
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setContextData(context);
    }, [context]);

    

    return {
        contextData
    };
}
