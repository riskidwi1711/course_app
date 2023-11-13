import React, { useRef, useState } from "react";
import MyCk from "../Editor/CkEditor";


export default function ChoiceCard() {
    const [optionValue, setOptionValue] = useState(
        "Ketik opsi jawaban anda disini"
    );
    const [isEditable, setIsEditable] = useState(false);
    const contentRef = useRef(null);

    const handleValue = () => {
        setContent(contentRef.current.textContent);
    };

    const handleContentClick = () => {
        setIsEditable(true);
        contentRef.current.focus();
    };

    const handleBlur = () => {
        setIsEditing(false);
    };
    return (
        <div className="bg-white rounded">
            <div style={{ padding: 5 + "px", paddingTop: 10 + "px" }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex gap-2">
                        <button
                            href=""
                            className="btn btn-outline-danger p-2"
                        >
                            <i className="uil uil-trash"></i>
                        </button>
                    </div>
                    <div>
                        <button
                            className="btn rounded btn-outline-secondary p-2"
                            href=""
                        >
                            <i className="uil uil-check"></i>
                        </button>
                    </div>
                </div>
                <div className="bg-light rounded">
                    <MyCk initial="Ketikan pilihan jawaban"/>
                </div>
            </div>
        </div>
    );
}
