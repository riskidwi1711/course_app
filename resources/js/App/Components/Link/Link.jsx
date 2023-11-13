import { toggleWindowLoading } from "@/App/Utils/Reducers/PageSlice";
import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function To(props) {
    const dispatch = useDispatch();
    const onBefore = () => {
        dispatch(toggleWindowLoading());
    };

    const onFinish = () => {
        setTimeout(() => {
            dispatch(toggleWindowLoading());
        }, 1000);
    };

    const onError = (e) => {
        alert(e);
    };

    return (
        <Link
            {...props}
            onBefore={onBefore}
            onFinish={onFinish}
            onError={onError}
        >
            {props.children}
        </Link>
    );
}
