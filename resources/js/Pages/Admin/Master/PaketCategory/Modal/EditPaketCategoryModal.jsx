import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import usePaketCategoryCrud from "../Hooks/usePaketCategoryCrud";
import { Spinner } from "@/App/Components/Indicators";

export default function EditPaketCategoryModal(props) {
    const loading = useSelector((state) => state.page.showMiniLoading);
    const { handleDataChange, handleSubmit, formData, setFormData } =
        usePaketCategoryCrud();
    useEffect(() => {
        setFormData(props.row);
    }, [props.row]);
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="text"
                    name="title"
                    value={formData.title}
                />
                <label className="">Masukan judul kategori</label>
            </div>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="text"
                    name="description"
                    value={formData.description}
                />
                <label className="">Masukan deskripsi kategori</label>
            </div>
            <select
                onChange={handleDataChange}
                className="form-select fs-5 mb-2"
                name="paket_id"
                id=""
            >
                <option value="">Pilih salah satu paket</option>
                {Object.values(props.paket).map((e) => {
                    if (e.id === formData.paket_id) {
                        return (
                            <option selected value={e.id}>
                                {e.package_name}
                            </option>
                        );
                    } else {
                        return <option value={e.id}>{e.package_name}</option>;
                    }
                })}
            </select>
            <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-primary">
                    {loading ? (
                        <Spinner />
                    ) : (
                        <i className="fas fa-save me-2"></i>
                    )}{" "}
                    Simpan
                </button>
            </div>
        </form>
    );
}
