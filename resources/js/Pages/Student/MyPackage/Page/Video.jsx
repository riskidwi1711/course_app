import VideoCard, { StudentVideoCard } from "@/App/Components/Cards/VideoCard";
import React from "react";

export default function Video(props) {
    return (
        <div className="row">
            {Object.values(props.paket?.videos).map((e) => {
                return (
                    <div className="col-lg-4">
                        <StudentVideoCard url={e.url_video} id={e.id} />
                    </div>
                );
            })}
        </div>
    );
}
