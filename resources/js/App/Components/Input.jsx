import React from "react";

export function InputDefault({
    name,
    errors,
    type,
    placeholder,
    onChange,
    icon,
    required= true
}) {
    return (
        <div class="ui search focus mt-15">
            <div class="ui left icon input swdh95">
                <input
                    class="prompt srch_explore"
                    type={type}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <i class={icon}></i>
            </div>
            {errors[name] && (
                <div class="alert alert-danger mt-2" role="alert">
                    {errors[name]}
                </div>
            )}
        </div>
    );
}
