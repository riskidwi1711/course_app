import { Spinner } from "@/App/Components/Indicators";
import useCrud from "@/App/Utils/hooks/useCrud";
import React from "react";
import { useSelector } from "react-redux";
import usePaketCategoryCrud from "../Hooks/usePaketCategoryCrud";
import { usePaketCategoryContext } from "../Context/PaketCategoryContext";

export default function AddPaketCategoryModal(props) {
    const loading = useSelector((state) => state.page.showMiniLoading);
    const { handleDataChange, handleSubmit } = usePaketCategoryCrud();

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="text"
                    name="title"
                />
                <label className="">Masukan judul kategori</label>
            </div>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="text"
                    name="description"
                />
                <label className="">Masukan deskripsi kategori</label>
            </div>
            <div className="form-floating">
                <select
                    onChange={handleDataChange}
                    className="form-select fs-5 mb-2"
                    name="paket_id"
                    id=""
                >
                    <option value="">Pilih salah satu paket</option>
                    {Object.values(props.paket).map((e) => {
                        return <option value={e.id}>{e.package_name}</option>;
                    })}
                </select>
                <label>Paket</label>
            </div>
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
