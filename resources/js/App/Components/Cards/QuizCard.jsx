import React from "react";
import MyCk from "../Editor/CkEditor";

export default function RichInput({ handleChange, initial,name }) {
    return (
        <div className="mb-4">
            <div className="mb-3">{name}</div>
            <div className="bg-light">
                <MyCk initial={initial} onDataChange={handleChange} />
            </div>
        </div>
    );
}
