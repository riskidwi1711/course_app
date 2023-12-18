import React from "react";

export default function BackButton({ onBack = () => window.history.back() }) {
    return (
        <div className="mb-3">
            <button
                onClick={() => onBack()}
                className="btn btn-link btn-lg ps-0 ms-0"
            >
                <i className="fas fa-arrow-left me-2"></i>Kembali
            </button>
        </div>
    );
}
