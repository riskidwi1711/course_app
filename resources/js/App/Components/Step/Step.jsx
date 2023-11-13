import React, { useEffect, useState } from "react";

export default function Step(props) {
    const [currentTab, setCurrentTab] = useState(0);
    const [currentContent, setCurrentContent] = useState(null);
    const { content } = props;

    useEffect(() => {
        if (content) {
            setCurrentContent(content[currentTab].component);
        }
    }, [content, currentTab]);

    return (
        <div id="add-course-tab" class="step-app">
            <StepHeader
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                content={content}
            />
            <StepContent renderContent={currentContent} />
            <StepFooter
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                contentLength={content.length}
            />
        </div>
    );
}

function StepContent({ renderContent }) {
    console.log(renderContent);
    return <div class="step-content">{renderContent}</div>;
}

function StepHeader({ content, currentTab, setCurrentTab }) {
    return (
        <ul class="step-steps">
            {Object.values(content).map((step, index) => {
                const active = currentTab === index;
                const done = currentTab > index;
                return (
                    <li
                        class={`${active && "active"} ${done && "done"}`}
                        style={{ minWidth: 100 / content.length + "%" }}
                    >
                        <a
                            href="#tab_step1"
                            onClick={() => setCurrentTab(index)}
                        >
                            <span class="number"></span>
                            <span class="step-name">{step.title}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

function StepFooter({ currentTab, contentLength, setCurrentTab }) {
    const disablePrev = currentTab < 1;
    const disableNext = currentTab + 1 >= contentLength;
    console.log(contentLength);
    return (
        <div class="step-footer step-tab-pager">
            <button
                onClick={() => setCurrentTab(currentTab - 1)}
                data-direction="prev"
                class={`btn btn-default steps_btn ${disablePrev && "disabled"}`}
            >
                Previous
            </button>
            <button
                onClick={() => setCurrentTab(currentTab + 1)}
                data-direction="next"
                class={`btn btn-default steps_btn ${disableNext && "disabled"}`}
                fdprocessedid="rvrqhs"
            >
                Next
            </button>
        </div>
    );
}
