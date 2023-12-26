import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PaketProductContext from "./Context/PaketProductContext";
import PaketList from "./List/PaketList";

export default function PaketProduct(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <PaketProductContext.Provider value={props}>
                <PaketList />
            </PaketProductContext.Provider>
        </Authenticated>
    );
}
