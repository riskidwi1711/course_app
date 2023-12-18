import PaketCard from "@/App/Components/Cards/PaketCard";
import Empty from "@/App/Components/Illust/Empty";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import React from "react";
import { useDispatch } from "react-redux";
import ModalKonfirmasiPembelianPaketTitle from "../Modal/ModalKonfirmasiPembelianPaketTitle";
import ModalKonfirmasiPembelianPaket from "../Modal/ModalKonfirmasiPembelianPaket";

export function SubscribePaketSKD(props) {
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
    return props.data.paket.length > 0 ? (
        Object.values(props.data.paket).map((e) => {
            return (
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <PaketCard data={e} onBuy={() => handleBuy(e)} />
                </div>
            );
        })
    ) : (
        <Empty identity="paket" />
    );
}
