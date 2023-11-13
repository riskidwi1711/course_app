import React from "react";

export default function SelectInput({
    name,
    placeholder,
    title,
    options = [{ text: "", value: "" }],
}) {
    return (
        <div className="form-floating mb-3">
            <select className="form-select fs-5 mb-2" name={name}>
                <option selected className="fs-5 my-2">
                    {placeholder}
                </option>
                {Object.values(options).map((option) => {
                    return (
                        <option value={option.value} className="fs-5 my-2">
                            {option.text}
                        </option>
                    );
                })}
            </select>
            <label>{title}</label>
        </div>
    );
}
