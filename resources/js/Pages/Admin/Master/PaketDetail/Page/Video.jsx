import { Card } from "@/App/Components/Card";
import VideoCard from "@/App/Components/Cards/VideoCard";
import {
    toggleModal,
} from "@/App/Utils/Reducers/PageSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getServerSideProps } from "@/App/Components/Video/YoutubeVideoViewer";
import AddVideoForm, { AddVideoFormTitle } from "@/Pages/Master/DetailPaket/AddVideoForm";

export function Video(props) {
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
                <div className="d-flex justify-content-between align-items-start flex-md-row flex-column align-md-items-center gap-3">
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