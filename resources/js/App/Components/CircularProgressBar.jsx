import React from "react";

export default function ProgressBar({progress}) {
    console.log(progress)
    return (
        <div class="progress progress-xl" style={{maxWidth: 100+'px', height: 28+'px'}}>
            <div
                class="progress-bar"
                role="progressbar"
                style={{width: progress}}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {progress} %
            </div>
        </div>
    );
}
