import React from "react";
import { useSelector } from "react-redux";

export default function PageTitle({pageIdentity}) {
    const { currentPageIcon, currentPage } = useSelector((state) => state.page);
    console.log(pageIdentity)
    return (
        <h2 class="st_title fw-bold mb-5 text-capitalize">
            <i class={`${pageIdentity ? pageIdentity.icon : currentPageIcon} fw-bold`}></i> {pageIdentity ? pageIdentity.title : currentPage }
        </h2>
    );
}
