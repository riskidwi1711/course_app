import React from "react";

export default function Tab({ children }) {
    return (
        <div class="setting_tabs">
            <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                {children}
            </ul>
        </div>
    );
}

export function TabItem({ children, onClick, active }) {
    return (
        <li class="nav-item">
            <a
                class={`nav-link ${active && "active"} text-capitalize`}
                id="pills-account-tab"
                data-toggle="pill"
                onClick={onClick}
                href="#"
                role="tab"
                aria-selected="true"
            >
                {children}
            </a>
        </li>
    );
}

export function TabContent({ children }) {
    return (
        <div class="tab-content" id="pills-tabContent">
            {children}
        </div>
    );
}
