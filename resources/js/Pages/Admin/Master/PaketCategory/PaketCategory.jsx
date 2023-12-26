import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PaketCategoryContext from "./Context/PaketCategoryContext";
import PaketCategoryList from "./List/PaketCategoryList";

export default function PaketCategory(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <PaketCategoryContext.Provider value={props}>
                <PaketCategoryList />
            </PaketCategoryContext.Provider>
        </Authenticated>
    );
}
