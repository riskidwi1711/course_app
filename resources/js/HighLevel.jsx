import React from "react";
import useToast from "./App/Utils/hooks/useToast";

export default function HighLevel(props) {
    const { toast } = useToast();
    return (
        <>
            {toast}
            {props.children}
        </>
    );
}
