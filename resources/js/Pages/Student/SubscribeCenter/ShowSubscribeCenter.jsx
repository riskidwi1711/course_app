import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { SubscribePaketSKD } from "./Page/PageSubscribePaketSKD";
import { SubscribePaketSKB } from "./Page/PageSubscribePaketSKB";
import { SubscribePaketEmpty } from "./Page/PageSubscribePaketEmpty";

export default function ShowSubscribeCenter(props) {
    const TypePage = {
        paket_skd: SubscribePaketSKD,
        paket_skb: SubscribePaketSKB,
        default: SubscribePaketEmpty,
    };

    const pageComponentKey = props.page in TypePage ? props.page : "default";
    const TypePageComponent = TypePage[pageComponentKey];

    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <TypePageComponent {...props} />
        </Authenticated>
    );
}
