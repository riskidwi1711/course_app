import React from "react";

export default function TextInput({ placeholder, title, name, controller, value }) {
    return (
        <div className={`form-floating mb-3`}>
            <input
                className="form-control fs-5"
                type="text"
                name={name}
                placeholder={placeholder}
                value={value[name]}
                onChange={(e) => controller(e.target.name, e.target.value)}
            />
            <label htmlFor="nilai">{title}</label>
        </div>
    );
}
