import React, { useState } from "react";

export default function useTab() {
    const [currentTab, setCurrentTab] = useState(0);

    const handleChangeTab = (index) => {
        setCurrentTab(index);
    };

    return { currentTab, handleChangeTab };
}
