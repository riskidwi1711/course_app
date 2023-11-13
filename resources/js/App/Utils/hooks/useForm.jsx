import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleModal, toggleToast } from "../Reducers/PageSlice";

export default function useForm(formObject, initialData) {
    const [formData, setFormData] = useState({});
    const [form, setForm] = useState([]);
    const [processing, setProcessing] = useState(false);
    const dispatch = useDispatch();

    const formObj = formObject.form_obj;
    const {
        button,
        url,
        type,
        method,
        onSuccessMessage,
        AdditionalForm,
        step,
        static_param,
    } = formObject.form_identity;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (step) {
            localStorage.setItem("stepForm", formData);
        } else {
            console.log(formData)
            let data = formData
            data.page_type = static_param;
            console.log(data)
            router.post(url, data, {
                onBefore: (e) => {
                    setProcessing(true);
                },
                onError: (e) => {
                    setProcessing(false);
                },
                onSuccess: (e) => {
                    setProcessing(false);
                    setFormData({});
                    dispatch(
                        toggleModal({
                            show: false,
                            component: "",
                            title: "",
                        })
                    );
                    dispatch(
                        toggleToast({
                            show: true,
                            text: onSuccessMessage
                                ? onSuccessMessage
                                : "Berhasil menambah paket",
                        })
                    );
                },
            });
        }
    };

    useEffect(() => {
        setForm(formObj);
        return () => setForm([]);
    }, []);

    useEffect(() => {
        setFormData(initialData);
        return () => setFormData({});
    }, []);

    console.log();

    const renderedForm = (
        <form onSubmit={handleSubmit} className="row">
            {Object.values(form).map((form, index) => {
                let inputSize = {
                    full: "col-12",
                    half: "col-6",
                };

                return ["text", "number"].includes(form.type) ? (
                    <div
                       key={index} className={`${inputSize[form.size]} form-floating mb-3`}
                    >
                        <input
                            className="form-control fs-5"
                            type={form.type}
                            name={form.name}
                            value={formData[form.name]}
                            placeholder={form.placeholder}
                            onChange={handleChange}
                        />
                        <label htmlFor={form.name} className="ps-4">
                            {form.placeholder}
                        </label>
                    </div>
                ) : form.type === "text-area" ? (
                    <div key={index} className={`${inputSize[form.size]}`}>
                        <textarea
                            className="form-control mb-2"
                            name={form.name}
                            cols="30"
                            rows="10"
                            placeholder={form.placeholder}
                            onChange={handleChange}
                        />
                    </div>
                ) : form.type === "checkbox" ? (
                    <div key={index} className={`${inputSize[form.size]}`}>
                        <input
                            className="form-check-input mb-2"
                            type="checkbox"
                            name={form.name}
                            id={`checkbox-${form.name}`}
                            onChange={handleChange}
                        />
                    </div>
                ) : form.type === "select" ? (
                    <div key={index}
                        className={`${inputSize[form.size]} form-floating mb-3`}
                    >
                        <select
                            className="form-select fs-5 mb-2"
                            name={form.name}
                            onChange={handleChange}
                        >
                            <option selected className="fs-5 my-2">
                                {form.placeholder}
                            </option>
                            {Object.values(form.options).map((option) => (
                                <option
                                    className="fs-5"
                                    value={
                                        option.value ? option.value : option.id
                                    }
                                    key={
                                        option.value ? option.value : option.id
                                    }
                                    selected={
                                        formData[form.name] &&
                                        option.value === formData[form.name]
                                    }
                                >
                                    {option.title
                                        ? option.title
                                        : option.package_name}
                                </option>
                            ))}
                        </select>
                        <label className="ps-4">{form.placeholder}</label>
                    </div>
                ) : null;
            })}
            {AdditionalForm && <AdditionalForm onChange={handleChange} />}
            <div className="d-flex justify-content-end mt-4">
                <button
                    className="btn btn-default steps_btn"
                    type="submit"
                    disabled={processing}
                >
                    {button}
                </button>
            </div>
        </form>
    );

    return {
        handleChange,
        renderedForm,
        handleSubmit,
    };
}
