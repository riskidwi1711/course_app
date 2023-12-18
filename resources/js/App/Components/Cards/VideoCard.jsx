import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import YoutubePlayer from "../Video/YoutubePlayer";
import { getYouTubeVideoId } from "@/App/Utils/helpers";
import { toggleModal, toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { AddVideoFormTitle } from "@/Pages/Master/DetailPaket/AddVideoForm";
import { getServerSideProps } from "../Video/YoutubeVideoViewer";
import { router } from "@inertiajs/react";

export default function VideoCard(props) {
    const dispacth = useDispatch();
    const [videoData, setVideoData] = useState({});
    const handlePlayVideo = () => {
        let videoId = getYouTubeVideoId(props.url);
        if (videoId === null) {
            dispacth(
                toggleToast({
                    show: true,
                    text: "Video tidak ditemukan",
                })
            );
        } else {
            dispacth(
                toggleModal({
                    show: true,
                    size: "xl",
                    component: <YoutubePlayer videoId={videoId} />,
                    title: <div>Memutar video</div>,
                })
            );
        }
    };

    const handleDeleteVideo = () => {
        router.delete(route("video.delete_video", { id: props.id }), {
            onSuccess: () =>
                dispacth(
                    toggleToast({
                        show: true,
                        text: "Video berhasil di hapus",
                    })
                ),
        });
    };

    useEffect(() => {
        let vId = getYouTubeVideoId(props.url);
        getServerSideProps(vId)
            .then((e) => setVideoData(e))
            .catch((err) => console.log(err));
    }, []);

    const videoExists = videoData.items?.length > 0 ? true : false;
    const thumbnail =
        videoExists && videoData.items[0]?.snippet.thumbnails.default.url;
    const description = videoExists && videoData.items[0]?.snippet.description;
    const title = videoExists && videoData.items[0]?.snippet.title;

    return (
        <div
            class="owl-item active"
            style={{ display: !videoExists && "none" }}
        >
            <div class="item">
                <div class="fcrse_1 mb-20">
                    <a onClick={handlePlayVideo} href="#" class="fcrse_img">
                        <img src={thumbnail} alt="" />
                    </a>
                    <div class="fcrse_content">
                        <a href="course_detail_view.html" class="crse14s">
                            {title}
                        </a>

                        <div className="d-flex gap-1 justify-content-end">
                            <button
                                onClick={handleDeleteVideo}
                                className="btn btn-outline-danger"
                            >
                                <i className="fas fa-trash me-2"></i>Hapus
                            </button>
                            <button
                                className="btn btn-outline-primary"
                                onClick={handlePlayVideo}
                            >
                                <i className="fas fa-play me-2"></i>Putar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function StudentVideoCard(props) {
    const dispacth = useDispatch();
    const [videoData, setVideoData] = useState({});
    const handlePlayVideo = () => {
        let videoId = getYouTubeVideoId(props.url);
        if (videoId === null) {
            dispacth(
                toggleToast({
                    show: true,
                    text: "Video tidak ditemukan",
                })
            );
        } else {
            dispacth(
                toggleModal({
                    show: true,
                    size: "xl",
                    component: <YoutubePlayer videoId={videoId} />,
                    title: <div>{videoData.items[0]?.snippet.title}</div>,
                })
            );
        }
    };

    useEffect(() => {
        let vId = getYouTubeVideoId(props.url);
        getServerSideProps(vId)
            .then((e) => setVideoData(e))
            .catch((err) => console.log(err));
    }, []);

    const videoExists = videoData.items?.length > 0 ? true : false;
    const thumbnail =
        videoExists && videoData.items[0]?.snippet.thumbnails.default.url;
    const description = videoExists && videoData.items[0]?.snippet.description;
    const title = videoExists && videoData.items[0]?.snippet.title;

    return (
        <div
            class="owl-item active"
            style={{ display: !videoExists && "none" }}
        >
            <div class="item">
                <div class="fcrse_1 mb-20  shadow">
                    <div class="fcrse_img">
                        <div
                            style={{ position: "absolute", zIndex: 100 }}
                            className="w-100 h-100 d-flex justify-content-center align-items-center"
                        >
                            <div
                                onClick={handlePlayVideo}
                                className="btn btn-danger shadow-lg  fs-3 text-white p-4 d-flex justify-content-center align-items-center rounded-circle"
                                style={{
                                    width: 70 + "px",
                                    height: 70 + "px",
                                    cursor: "pointer",
                                }}
                            >
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <img
                            src={thumbnail}
                            alt=""
                            style={{ position: "relative" }}
                        />
                    </div>
                    <div class="fcrse_content">
                        <a href="course_detail_view.html" class="crse14s mb-0">
                            {title}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
