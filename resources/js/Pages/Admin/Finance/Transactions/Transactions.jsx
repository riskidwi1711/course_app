import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import TransactionList from "./List/TransactionList";
import TransactionContext from "./Context/TransactionContext";

export default function Paket(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <TransactionContext.Provider value={props}>
                <TransactionList />
            </TransactionContext.Provider>
        </Authenticated>
    );
}
