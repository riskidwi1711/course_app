import useTab from "@/App/Utils/hooks/useTab";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Soal from "../Page/Soal";
import { usePaketDetailContext } from "../Context/PaketDetailContext";
import { Materi } from "../Page/Materi";
import { Tryout } from "../Page/TryOut";
import { Video } from "../Page/Video";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import ModalImportSoal, {
    ModalImportSoalTitle,
} from "../Modal/ModalImportSoal";
import { useRouter } from "@/App/Utils/hooks/useRouter";
import { router } from "@inertiajs/react";

export default function usePaketDetailController() {
    const context = usePaketDetailContext();
    const dispatch = useDispatch();
    const [contextData, setContextData] = useState(context ? context : {});
    const { currentTab, handleChangeTab } = useTab();
    const { visit, post } = useRouter();
    const detailPaket = contextData?.detail;

    const tabs = [
        { title: "Soal Latihan", component: <Soal {...contextData} /> },
        { title: "Materi", component: <Materi {...contextData} /> },
        { title: "Try Out", component: <Tryout {...contextData} /> },
        { title: "Video", component: <Video {...contextData} /> },
    ];

    const handleImportSoal = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <ModalImportSoal />,
                title: <ModalImportSoalTitle />,
            })
        );
    };

    const handleCreateSoal = () => {
        visit(
            route("soal", {
                paket_id: detailPaket.id,
                type: tabs[currentTab].title.toLowerCase(),
            })
        );
    };

    const handleSoalAction = (actionId, id) => {
        if (actionId === "view") {
            visit(route("soal.detail_quiz", id));
        } else if (actionId === "delete") {
            post(route("soal.delete_quiz", id), {
                paket_id: detailPaket.id,
            });
        }
    };

    return {
        context,
        tabs,
        detailPaket,
        currentTab,
        handleChangeTab,
        handleImportSoal,
        handleCreateSoal,
        handleSoalAction,
    };
}
