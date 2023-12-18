import React, { useState } from "react";

export default function Tab({ tabs, currentTab }) {
    const [wichActive, setWichactive] = useState(currentTab ? currentTab : 0);
    const [comp, setComp] = useState(tabs[wichActive].component);
    return (
        <>
            <div class="setting_tabs">
                <ul class="nav nav-pills mb-4 gap-4" id="pills-tab" role="tablist">
                    {Object.values(tabs).map((e, index) => {
                        return (
                            <li class="nav-item">
                                <a
                                    class={`nav-link ${
                                        index === wichActive && "active"
                                    }`}
                                    id="pills-account-tab"
                                    data-toggle="pill"
                                    onClick={() => {
                                        setComp(e.component);
                                        setWichactive(index);
                                    }}
                                    href="#"
                                    role="tab"
                                    aria-selected="true"
                                >
                                    {e.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <TabContent>{comp}</TabContent>
        </>
    );
}

function TabContent({ children }) {
    return (
        <div class="tab-content" id="pills-tabContent">
            {children}
        </div>
    );
}
