import React from "react";

export default function BaseModalTitle({
    title,
    description,
    icon = "fas fa-upload",
}) {
    return (
        <div className="fw-normal d-flex gap-3 align-items-center">
            <button className="btn btn-outline-primary m-0">
                <i className={icon}></i>
            </button>
            <div>
                <h4 className="fw-bold mb-1 m-0">{title}</h4>
                <p
                    className="fw-normal p-0 m-0"
                    style={{ fontSize: 13 + "px" }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
