import React, { useEffect, useState } from "react";

export default function ProgressBar({hide}) {
    const [initialPercentage, setPercentage] = useState(0);

    useEffect(() => {
        let val = initialPercentage;

        const increment = () => {
            if (val <= 100) {
                let now = val + 20;
                setPercentage(now);
                val = now; // Update the value
                setTimeout(increment, 1000);
            }
        };

        setTimeout(increment, 1000);
    }, [hide]);

    return (
        <div class="progress" style={{ borderRadius: 0 }}>
            <div
                style={{ width: initialPercentage + "%" }}
                class="progress-bar progress-bar-striped progress-bar-animated"
            ></div>
        </div>
    );
}
