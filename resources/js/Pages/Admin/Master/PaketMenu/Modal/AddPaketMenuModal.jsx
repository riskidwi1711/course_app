import React, { useEffect } from "react";
import usePaketMenuCrud from "../Hooks/usePaketMenuCrud";
import { useSelector } from "react-redux";
import BaseModalTitle from "@/App/Components/Base/Modal/BaseModalTitle";
import { Spinner } from "@/App/Components/Indicators";

export function AddPaketMenuModalTitle() {
    return (
        <BaseModalTitle
            icon="uil uil-plus fs-4"
            title="Tambah Paket Baru"
            description="Tambahkan paket baru"
        />
    );
}
export default function AddPaketMenuModal(props) {
    const loading = useSelector((state) => state.page.showMiniLoading);
    const { handleDataChange, handleSubmit, setFormData, formData } =
        usePaketMenuCrud();
    useEffect(() => {
        setFormData({ ...formData, paket_id: props.data.additional.paket_id });
    }, [props.data.additional.paket_id]);
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="text"
                    name="title"
                    required
                />
                <label className="">Masukan Nama Paket Produk</label>
            </div>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="number"
                    name="base_price"
                    required
                />
                <label className="">Masukan Harga Dasar</label>
            </div>
            <div className="form-floating mb-2">
                <input
                    onChange={handleDataChange}
                    className="form-control fs-5"
                    type="number"
                    name="discount_price"
                    required
                />
                <label className="">Masukan Diskon</label>
            </div>
            <div className="form-floating">
                <select
                    onChange={handleDataChange}
                    className="form-select fs-5 mb-2"
                    name="category_id"
                    required
                >
                    <option value="">Pilih salah satu</option>
                    {Object.values(props.data.additional.category).map((e) => {
                        return <option value={e.id}>{e.title}</option>;
                    })}
                </select>
                <label>Pilih Kategori</label>
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
                    <option value="F">Tidak Aktif</option>
                </select>
                <label>Status</label>
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
