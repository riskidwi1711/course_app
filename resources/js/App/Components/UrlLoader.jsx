import React from "react";

export default function UrlLoader({url}) {
    return (
        <div>
            <iframe
                title="External Content"
                src={url}
                width="100%"
                height="500px"
                allowFullScreen
            />
        </div>
    );
}
