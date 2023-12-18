import React from "react";
import ReactPlayer from "react-player";

const YoutubePlayer = ({ videoId }) => {
    return (
        <div>
            <ReactPlayer
                config={{
                    youtube: {
                        playerVars: {
                            showInfo: 0,
                        },
                    },
                }}
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width="800"
                controls={true}
            />
        </div>
    );
};

export default YoutubePlayer;
