import React from "react";

export default function UrlLoader({url}) {
    return (
        <div>
            <iframe
                style={{
                    minHeight:86+'vh'
                }}
                title="External Content"
                src={url}
                width="100%"
                allowFullScreen
            />
        </div>
    );
}
