import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { DefaultSubscribeProducts } from "./Page/DefaultSubscribeProducts";
import { CategorizedSubscribeProducts } from "./Page/CategorizedSubscribeProducts";

export default function ShowSubscribeCenter(props) {
    console.log(props)
    const TypePage = {
        F: DefaultSubscribeProducts,
        T: CategorizedSubscribeProducts,
    };

    const isCategorized = props.data.additional.is_categorized
    const pageComponentKey = isCategorized in TypePage ? isCategorized : "F";
    const TypePageComponent = TypePage[pageComponentKey];

    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <TypePageComponent {...props} />
        </Authenticated>
    );
}
