import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PaketContext from "./Context/PaketContext";
import PaketList from "./List/PaketList";

export default function Paket(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <PaketContext.Provider value={props}>
                <PaketList />
            </PaketContext.Provider>
        </Authenticated>
    );
}
