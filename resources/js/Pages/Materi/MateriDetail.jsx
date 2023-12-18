import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import ViewerPdf from "@/App/Components/Pdf/ViewerPdf";
import BackButton from "@/App/Components/BackButton";

export default function MateriDetail(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <BackButton/>
            <ViewerPdf>
                <Viewer fileUrl={"/" + props.detail.file.path} />
            </ViewerPdf>
        </Authenticated>
    );
}
