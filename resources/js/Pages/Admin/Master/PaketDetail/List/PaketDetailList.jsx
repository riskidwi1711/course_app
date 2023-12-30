import React from "react";
import usePaketDetailController from "../Hooks/usePaketDetailController";
import Tab, { TabContent, TabItem } from "@/App/Components/Tab";

export default function PaketDetailList() {
    const { tabs, currentTab, handleChangeTab } = usePaketDetailController();
    return (
        <>
            <Tab>
                {Object.values(tabs).map((tab, index) => {
                    return (
                        <TabItem
                            onClick={() => handleChangeTab(index)}
                            active={currentTab === index}
                        >
                            {tab.title}
                        </TabItem>
                    );
                })}
            </Tab>
            <TabContent>{tabs[currentTab].component}</TabContent>
        </>
    );
}
