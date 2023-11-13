import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import SkdPage from "./PaketPage/SKD";
import SkbPage from "./PaketPage/SKB";
import DefaultPage from "./PaketPage/Default";

export default function PaketPage(props) {
    const TypePage = {
        paket_skd: SkdPage,
        paket_skb: SkbPage,
        default: DefaultPage,
    };

    const pageComponentKey = props.page in TypePage ? props.page : "default";
    const TypePageComponent = TypePage[pageComponentKey];

    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <TypePageComponent {...props} />
        </Authenticated>
    );
}
