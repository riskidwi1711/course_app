import PaketCard, { PaketCategoryCard } from "@/App/Components/Cards/PaketCard";
import Empty from "@/App/Components/Illust/Empty";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ModalKonfirmasiPembelianPaketTitle from "../Modal/ModalKonfirmasiPembelianPaketTitle";
import ModalKonfirmasiPembelianPaket from "../Modal/ModalKonfirmasiPembelianPaket";
export function SubscribePaketSKB(props) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch();
    const handleBuy = (e) => {
        dispatch(
            toggleModal({
                title: <ModalKonfirmasiPembelianPaketTitle />,
                component: <ModalKonfirmasiPembelianPaket detailPaket={e} />,
                size: "md",
                show: true,
            })
        );
    };
    return !selectedCategory ? (
        <div className="row">
            {Object.values(props.data.additional.category).map((cat) => {
                let catLength = props.data.additional.category.length <= 2;
                return (
                    <div
                        className={`${
                            catLength ? "col-lg-6" : "col-lg-3"
                        } col-md-6 col-sm-12`}
                    >
                        <PaketCategoryCard
                            data={cat}
                            onCekPaket={() => setSelectedCategory(cat.id)}
                        />
                    </div>
                );
            })}
        </div>
    ) : (
        <div>
            <div className="mb-3">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className="btn btn-link btn-lg ps-0 ms-0"
                >
                    <i className="fas fa-arrow-left me-2"></i>Kembali
                </button>
            </div>
            {props.data.paket.filter((e) => e.category_id == selectedCategory)
                .length > 0 ? (
                Object.values(
                    props.data.paket.filter(
                        (e) => e.category_id == selectedCategory
                    )
                ).map((e) => {
                    return (
                        <>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <PaketCard
                                    data={e}
                                    onBuy={() => handleBuy(e)}
                                />
                            </div>
                        </>
                    );
                })
            ) : (
                <Empty identity="paket" />
            )}
        </div>
    );
}
