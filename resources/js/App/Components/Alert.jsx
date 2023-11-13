import React from "react";

export  function WarningAlert({ text }) {
    return (
        <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
        >
            <i class="uil uil-info-circle"></i> {text}
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
}
