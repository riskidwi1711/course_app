import Tab from "@/App/Components/Tab/Tab";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import SoalLatihan from "./Page/SoalLatihan";
import SoalTryOut from "./Page/SoalTryOut";
import Video from "./Page/Video";
import Materi from "./Page/Materi";
import QuizResults from "./Page/QuizResults";
import Results from "./Page/Results";

export default function ShowMyPackage(props) {
    const tabs = [
        {
            title: "Soal Latihan",
            component: <SoalLatihan {...props} />
        },
        {
            title: "Soal Try Out",
            component: <SoalTryOut {...props} />
        },
        {
            title: "Video",
            component: <Video {...props} />
        },
        {
            title: "Materi",
            component: <Materi {...props} />
        },
        {
            title: "Hasil Latihan & Pembahasan",
            component: <Results {...props} />
        },
    ];

    console.log(props)
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <Tab tabs={tabs} currentTab={props.page_state?.current_tab} />
        </Authenticated>
    );
}
