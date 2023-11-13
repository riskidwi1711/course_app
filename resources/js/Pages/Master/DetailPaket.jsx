import { Card, CardHeader } from "@/App/Components/Card";
import SoalCard from "@/App/Components/Cards/SoalCard";
import VideoCard from "@/App/Components/Cards/VideoCard";
import Tab, { TabContent, TabItem } from "@/App/Components/Tab";
import { setPageTitleIcon, toggleModal } from "@/App/Utils/Reducers/PageSlice";
import useTab from "@/App/Utils/hooks/useTab";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DragAndDrop, ModalImportSoalTitle } from "../Soal/SoalCreate";
import AddVideoForm, { AddVideoFormTitle } from "./DetailPaket/AddVideoForm";

export default function DetailPaket(props) {
    const { currentTab, handleChangeTab } = useTab();
    const dispacth = useDispatch();
    const detailPaket = props.detail;
    const tabs = [
        { title: "Soal", component: <Soal /> },
        { title: "Tryout", component: <Tryout /> },
        { title: "Video", component: <Video /> },
        { title: "Materi", component: <Video /> },
    ];

    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <Tab>
                {Object.values(tabs).map((tab, index) => {
                    return (
                        <TabItem
                            onClick={() => handleChangeTab(index)}
                            active={currentTab === index}
                        >
                            {tab.title}
                        </TabItem>
                    );
                })}
            </Tab>
            <TabContent>{tabs[currentTab].component}</TabContent>
        </Authenticated>
    );
}

function Soal() {
    const dispatch = useDispatch();

    const handleRoute = () => {
        router.visit(route("soal.create"));
    };

    const handleImport = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <DragAndDrop />,
                title: <ModalImportSoalTitle />,
            })
        );
    };
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Card>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="fw-bold">
                                    <i className="uil uil-book-alt"></i> Buat
                                    soal atau import dari file excel
                                </h4>
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    onClick={handleRoute}
                                    className="btn btn-primary"
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Buat Soal
                                </button>
                                <button
                                    onClick={handleImport}
                                    className="btn btn-success"
                                >
                                    <i className="fas fa-file-excel me-2"></i>
                                    Import Soal
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SoalCard />
                    <SoalCard />
                    <SoalCard />
                </div>
            </div>
        </div>
    );
}

function Tryout() {
    const dispatch = useDispatch();

    const handleRoute = () => {
        router.visit(route("soal.create"));
    };

    const handleImport = () => {
        dispatch(
            toggleModal({
                show: true,
                component: <DragAndDrop />,
                title: <ModalImportSoalTitle />,
            })
        );
    };
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Card>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="fw-bold">
                                    <i className="uil uil-book-alt"></i> Buat
                                    soal atau import dari file excel
                                </h4>
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    onClick={handleRoute}
                                    className="btn btn-primary"
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Buat Soal
                                </button>
                                <button
                                    onClick={handleImport}
                                    className="btn btn-success"
                                >
                                    <i className="fas fa-file-excel me-2"></i>
                                    Import Soal
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SoalCard />
                    <SoalCard />
                    <SoalCard />
                </div>
            </div>
        </div>
    );
}

function Video() {
    const dispacth = useDispatch()
    const handleAddVideo = () => {
        dispacth(
            toggleModal({
                show: true,
                component: <AddVideoForm />,
                title: <AddVideoFormTitle />,
            })
        );
    };
    return (
        <div>
            <Card>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="fw-bold">
                            <i className="uil uil-video"></i> Tambahkan video ke
                            dalam paket
                        </h4>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-success" onClick={handleAddVideo}>
                            <i className="fas fa-video me-2"></i>
                            Tambah video
                        </button>
                    </div>
                </div>
            </Card>

            <div className="row">
                <div className="col-3">
                    <VideoCard />
                </div>
                <div className="col-3">
                    <VideoCard />
                </div>
                <div className="col-3">
                    <VideoCard />
                </div>
                <div className="col-3">
                    <VideoCard />
                </div>
            </div>
        </div>
    );
}
