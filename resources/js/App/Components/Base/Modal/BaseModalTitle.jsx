import React from "react";

export default function BaseModalTitle({
    title,
    description,
    icon = "fas fa-upload",
}) {
    return (
        <div className="fw-normal d-flex gap-2 align-items-center">
            <button className="btn btn-outline-success m-0">
                <i className={icon}></i>
            </button>
            <div>
                <h5 className="fw-bold mb-1 m-0">{title}</h5>
                <p
                    className="fw-normal p-0 m-0"
                    style={{ fontSize: 12 + "px" }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
