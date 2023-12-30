import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PaketDetailContext from "./Context/PaketDetailContext";
import PaketDetailList from "./List/PaketDetailList";

export default function PaketDetail(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <PaketDetailContext.Provider value={props}>
                <PaketDetailList/>
            </PaketDetailContext.Provider>
        </Authenticated>
    );
}
