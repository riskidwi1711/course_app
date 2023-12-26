import BaseModalTitle from "@/App/Components/Base/Modal/BaseModalTitle";
import React from "react";
import { useSelector } from "react-redux";
import usePaketCrud from "../Hooks/usePaketCrud";
import { Spinner } from "@/App/Components/Indicators";

export function AddPaketModalTitle() {
    return (
        <BaseModalTitle
            icon="uil uil-plus fs-4"
            title="Tambah Paket baru"
            description="Tambahkan paket baru"
        />
    );
}

export default function AddPaketModal(props) {
    const loading = useSelector((state) => state.page.showMiniLoading);
    const { handleDataChange, handleSubmit } = usePaketCrud();
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="text"
                    name="package_name"
                    required
                />
                <label className="">Masukan Nama Paket</label>
            </div>
            <div className="form-floating">
                <select
                    onChange={handleDataChange}
                    className="form-select fs-5 mb-2"
                    name="is_categorized"
                    id=""
                    required
                >
                    <option value="">Pilih salah satu</option>
                    <option value="T">Terkategori</option>
                    <option value="F">Tidak terkategori</option>
                </select>
                <label>Terkategori ?</label>
            </div>
            <div className="form-floating">
                <select
                    onChange={handleDataChange}
                    className="form-select fs-5 mb-2"
                    name="is_active"
                    id=""
                    required
                >
                    <option value="">Pilih salah satu</option>
                    <option value="T">Aktif</option>
                    <option value="F">Tidak aktif</option>
                </select>
                <label>Status Paket</label>
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
