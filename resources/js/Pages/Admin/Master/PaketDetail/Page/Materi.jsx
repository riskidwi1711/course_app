import { Card } from "@/App/Components/Card";
import {
    toggleModal,
    toggleToast,
} from "@/App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerSideProps } from "@/App/Components/Video/YoutubeVideoViewer";
import { DragAndDropUpload } from "@/App/Components/DragAndDropUpload";
import BookCards from "@/App/Components/Cards/BookCards";
import { AddMateriFormTitle } from "@/Pages/Master/DetailPaket/AddMateriForm";

export function Materi(props) {
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
                <div className="d-flex justify-content-between align-items-start flex-md-row flex-column align-md-items-center gap-3">
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