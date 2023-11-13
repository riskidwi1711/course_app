import React from "react";

export function ButtonDefault() {
    return <div>Button</div>;
}

export function ButtonAction({ action, showText = false, onClick }) {
    const type = {
        delete: {
            class: "btn btn-danger",
            icon: "uil uil-trash-alt",
        },
        edit: {
            class: "btn btn-primary",
            icon: "uil uil-edit",
        },
        view: {
            class: "btn btn-success",
            icon: "uil uil-eye",
        },
    };

    return (
        <button className={type[action].class} onClick={onClick}>
            <i className={type[action].icon}></i> {showText && action}
        </button>
    );
}
