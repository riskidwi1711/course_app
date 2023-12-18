import { Card, CardHeader } from "@/App/Components/Card";
import SoalCard from "@/App/Components/Cards/SoalCard";
import VideoCard from "@/App/Components/Cards/VideoCard";
import Tab, { TabContent, TabItem } from "@/App/Components/Tab";
import {
    setPageTitleIcon,
    toggleModal,
    toggleToast,
} from "@/App/Utils/Reducers/PageSlice";
import useTab from "@/App/Utils/hooks/useTab";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DragAndDrop, ModalImportSoalTitle } from "../Soal/SoalCreate";
import AddVideoForm, { AddVideoFormTitle } from "./DetailPaket/AddVideoForm";
import { getServerSideProps } from "@/App/Components/Video/YoutubeVideoViewer";
import { AddMateriFormTitle } from "./DetailPaket/AddMateriForm";
import { DragAndDropUpload } from "@/App/Components/DragAndDropUpload";
import BookCards from "@/App/Components/Cards/BookCards";

export default function DetailPaket(props) {
    const { currentTab, handleChangeTab } = useTab();
    const dispacth = useDispatch();
    const detailPaket = props.detail;
    const tabs = [
        { title: "Soal", component: <Soal {...props} /> },
        { title: "Tryout", component: <Tryout {...props} /> },
        { title: "Video", component: <Video {...props} /> },
        { title: "Materi", component: <Materi {...props} /> },
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

function Soal(props) {
    const dispatch = useDispatch();

    const handleRoute = () => {
        router.visit(route("soal"));
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

    const handleAction = (actionId, id) => {
        if (actionId === "view") {
            router.visit(route("soal.detail_quiz", id));
        } else if (actionId === "delete") {
            router.post(route("soal.delete_quiz", id), {
                paket_id: props.detail.id,
            });
        }
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
                    {Object.values(props.quizez).map((e) => {
                        return (
                            <SoalCard
                                hanldeAction={handleAction}
                                title={e.title}
                                type={e.quiz_type}
                                created_by={e.user}
                                created_at={e.created_at}
                                id={e.id}
                                edit={false}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function Tryout(props) {
    const dispatch = useDispatch();

    const handleRoute = () => {
        router.visit(route("soal"));
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
                                    soal try out atau import dari file excel
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
                    {Object.values(props.tryouts).map((e) => {
                        return (
                            <SoalCard
                                title={e.title}
                                type={e.quiz_type}
                                created_by={e.user}
                                created_at={e.created_at}
                                id={e.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function Video(props) {
    const dispacth = useDispatch();
    const handleAddVideo = () => {
        dispacth(
            toggleModal({
                show: true,
                size: "lg",
                component: <AddVideoForm {...props} />,
                title: <AddVideoFormTitle />,
            })
        );
    };
    useEffect(() => {
        getServerSideProps()
            .then((e) => console.log(e))
            .catch((err) => console.log(err));
    }, []);
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
                        <button
                            className="btn btn-success"
                            onClick={handleAddVideo}
                        >
                            <i className="fas fa-video me-2"></i>
                            Tambah video
                        </button>
                    </div>
                </div>
            </Card>

            <div className="row">
                {Object.values(props.videos).map((e) => {
                    return (
                        <div className="col-3">
                            <VideoCard url={e.url_video} id={e.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function Materi(props) {
    const [showDetail, setShowDetail] = useState(false);
    const dispacth = useDispatch();
    const handleAddMateri = () => {
        dispacth(
            toggleModal({
                show: true,
                component: (
                    <DragAndDropUpload
                        {...props}
                        formattedFile={false}
                        desc="file"
                        params={{ paket_id: props.detail.id }}
                    />
                ),
                title: <AddMateriFormTitle />,
            })
        );
    };

    useEffect(() => {
        getServerSideProps()
            .then((e) => console.log(e))
            .catch((err) => console.log(err));
    }, []);

    const bookDetail = (id) => {
        router.visit(route("materi.detail", id));
    };

    const bookRemove = (id) => {
        router.delete(route("materi.delete_materi", id), {
            onSuccess: () =>
                dispacth(
                    toggleToast({
                        show: true,
                        text: "Berhasil menghapus materi",
                    })
                ),
        });
    };

    return (
        <div>
            <Card>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="fw-bold">
                            <i className="uil uil-book"></i> Tambahkan materi ke
                            dalam paket
                        </h4>
                    </div>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-success"
                            onClick={handleAddMateri}
                        >
                            <i className="fas fa-book me-2"></i>
                            Upload materi
                        </button>
                    </div>
                </div>
            </Card>

            <div className="row">
                {Object.values(props.materies).map((e) => {
                    console.log(e);
                    return (
                        <div className="col-3">
                            <BookCards
                                title={e.title}
                                bookDetail={() => bookDetail(e.id)}
                                bookRemove={() => bookRemove(e.id)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export function MateriDetail() {
    return <div>DetailPaket</div>;
}
