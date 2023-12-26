import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PaketSKDList from "./List/PaketSKDList";
import PaketSKBList from "./List/PaketSKBList";
import PaketDefaultList from "./List/PaketDefaultList";
import PaketMenuContext from "./Context/PaketMenuContext";

export default function PaketMenu(props) {
    const TypePage = {
        paket_skd: PaketSKDList,
        paket_skb: PaketSKBList,
        default: PaketDefaultList,
    };

    const pageComponentKey = props.page in TypePage ? props.page : "default";
    const TypePageComponent = TypePage[pageComponentKey];

    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <PaketMenuContext.Provider value={props}>
                <TypePageComponent {...props} />
            </PaketMenuContext.Provider>
        </Authenticated>
    );
}
