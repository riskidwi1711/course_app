import React, { useState } from "react";
import { Card } from "../Card";
import { Input } from "postcss";
import { useDispatch } from "react-redux";
import { toggleToast } from "@/App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";
import { calculateTimeDifference, literals } from "@/App/Utils/helpers";
import { LogoNip_img, Pre_img } from "@/App/Theme/images";

export default function SoalCard({
    title,
    type,
    created_by,
    created_at,
    id,
    view = true,
    edit = true,
    hanldeAction,
    point,
    time
}) {
    const [titleEdit, setEditTitle] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const dispacth = useDispatch();
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Handle the Enter key press here
            console.log("Enter key pressed");
            setEditTitle(false);
            // You can perform your desired action here.
        }
    };
    const handleEditTitle = (event) => {
        if (titleValue.length <= 0) {
            dispacth(
                toggleToast({
                    show: true,
                    text: "Tidak boleh kosong",
                })
            );
        } else {
            setEditTitle(!titleEdit);
        }
    };
    return (
        <Card>
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex gap-3 ">
                    <div>
                        <img
                            className="bg-light"
                            style={{ maxWidth: 90 + "px" }}
                            src={LogoNip_img}
                            alt=""
                        />
                    </div>

                    <div>
                        <div>
                            <div className="d-flex gap-2 align-items-center">
                                <p
                                    className="p-0 m-0"
                                    style={{ fontSize: 14 + "px" }}
                                >
                                    {type}
                                </p>
                            </div>
                            <div className="d-flex gap-2 align-items-center mt-2 ">
                                {!titleEdit ? (
                                    <div className="d-flex flex-column gap-2">
                                        <h3 className="mb-0 text-capitalize">
                                            {titleValue}
                                        </h3>
                                        <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            style={{ fontSize: 12 + "px" }}
                                        >
                                            Poin setiap soal : {point} poin
                                        </button>
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            style={{ fontSize: 12 + "px" }}
                                        >
                                            Waktu mengerjakan : {time} menit
                                        </button>
                                        </div>
                                    </div>
                                ) : (
                                    <input
                                        className="form-control text-capitalize fs-4"
                                        name="title"
                                        type="text"
                                        value={titleValue}
                                        onChange={(e) =>
                                            setTitleValue(e.target.value)
                                        }
                                        onKeyDown={handleKeyPress}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    {edit && (
                        <a
                            className="fs-5 p-1 btn btn-outline-primary"
                            onClick={handleEditTitle}
                        >
                            {titleEdit ? (
                                <i className="uil uil-check"></i>
                            ) : (
                                <i className="uil uil-pen"></i>
                            )}
                        </a>
                    )}
                    {edit && (
                        <a
                            onClick={() => hanldeAction("delete", id)}
                            className="p-1 fs-5 btn btn-outline-danger"
                        >
                            <i className="uil uil-trash"></i>
                        </a>
                    )}
                    {edit && (
                        <a
                            onClick={() => hanldeAction("edit", id)}
                            className="p-1 fs-5 btn btn-outline-primary"
                        >
                            <i className="uil uil-cog"></i>
                        </a>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <div className="gap-2 d-flex align-items-center">
                        <div>
                            <img
                                className="rounded-circle"
                                style={{ maxWidth: 20 + "px" }}
                                src="https://lh3.googleusercontent.com/a/ACg8ocKIVDlpHFACIFL9Ee9L3QIY9hiMcvPGX5lmClQebpw0_xE=s96-c"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="m-0" style={{ fontSize: 12 + "px" }}>
                                {created_by.name}
                            </p>
                            <p
                                style={{ fontSize: 12 + "px" }}
                                className="fw-light"
                            >
                                {created_at}
                            </p>
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        {edit && (
                            <div>
                                <button
                                    onClick={() => hanldeAction("edit", id)}
                                    className="btn btn-outline-primary"
                                >
                                    <i className="uil uil-edit me-1"></i> Edit
                                </button>
                            </div>
                        )}
                        {view && (
                            <div>
                                <button
                                    onClick={() => hanldeAction("view", id)}
                                    className="btn btn-outline-primary"
                                >
                                    <i className="uil uil-eye me-1"></i> Lihat
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export function PreviewSoalCard({ title, id, handleAction, type }) {
    const [titleEdit, setEditTitle] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const dispacth = useDispatch();
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Handle the Enter key press here
            console.log("Enter key pressed");
            setEditTitle(false);
            // You can perform your desired action here.
        }
    };
    const handleEditTitle = (event) => {
        if (titleValue.length <= 0) {
            dispacth(
                toggleToast({
                    show: true,
                    text: "Tidak boleh kosong",
                })
            );
        } else {
            setEditTitle(!titleEdit);
        }
    };
    return (
        <div className="border border-2 p-3 mb-3 bg-white rounded-lg">
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex gap-3 ">
                    <div>
                        <img
                            className="bg-light"
                            style={{ maxWidth: 70 + "px" }}
                            src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&h=200"
                            alt=""
                        />
                    </div>

                    <div>
                        <div>
                            <p
                                className="p-0 m-0"
                                style={{ fontSize: 14 + "px" }}
                            >
                                {type}
                            </p>
                            <div className="d-flex gap-2 align-items-center mt-2">
                                {!titleEdit ? (
                                    <h4
                                        className="mb-0 text-capitalize"
                                        dangerouslySetInnerHTML={{
                                            __html: titleValue,
                                        }}
                                    ></h4>
                                ) : (
                                    <input
                                        className="form-control text-capitalize"
                                        name="title"
                                        type="text"
                                        value={titleValue}
                                        onChange={(e) =>
                                            setTitleValue(e.target.value)
                                        }
                                        onKeyDown={handleKeyPress}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <a className="p-1 rounded bg-light" hidden>
                        <i className="uil uil-trash"></i>
                    </a>
                </div>
            </div>
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <div className="gap-2 d-flex align-items-center">
                        <div>
                            <img
                                className="rounded-circle"
                                style={{ maxWidth: 20 + "px" }}
                                src="https://lh3.googleusercontent.com/a/ACg8ocKIVDlpHFACIFL9Ee9L3QIY9hiMcvPGX5lmClQebpw0_xE=s96-c"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="m-0" style={{ fontSize: 12 + "px" }}>
                                Riski Dwi Patrio
                            </p>
                            <p
                                style={{ fontSize: 12 + "px" }}
                                className="fw-light"
                            >
                                8 Jam
                            </p>
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        <div>
                            <button
                                onClick={() => handleAction("view", id)}
                                className="btn btn-outline-primary"
                            >
                                <i className="uil uil-eye me-1"></i> Lihat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function StudentSoalCard({ title, id, handleAction, type }) {
    const [titleEdit, setEditTitle] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const dispacth = useDispatch();
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Handle the Enter key press here
            console.log("Enter key pressed");
            setEditTitle(false);
            // You can perform your desired action here.
        }
    };
    const handleEditTitle = (event) => {
        if (titleValue.length <= 0) {
            dispacth(
                toggleToast({
                    show: true,
                    text: "Tidak boleh kosong",
                })
            );
        } else {
            setEditTitle(!titleEdit);
        }
    };
    return (
        <div className="border border-2 p-3 mb-3 bg-white rounded-lg">
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex gap-3 ">
                    <div>
                        <img
                            className="bg-light"
                            style={{ maxWidth: 70 + "px" }}
                            src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&h=200"
                            alt=""
                        />
                    </div>

                    <div>
                        <div>
                            <p
                                className="p-0 m-0 text-capitalize"
                                style={{ fontSize: 14 + "px" }}
                            >
                                {type}
                            </p>
                            <div className="d-flex gap-2 align-items-center mt-2">
                                {!titleEdit ? (
                                    <h3
                                        className="mb-0 text-capitalize"
                                        dangerouslySetInnerHTML={{
                                            __html: titleValue,
                                        }}
                                    ></h3>
                                ) : (
                                    <input
                                        className="form-control text-capitalize"
                                        name="title"
                                        type="text"
                                        value={titleValue}
                                        onChange={(e) =>
                                            setTitleValue(e.target.value)
                                        }
                                        onKeyDown={handleKeyPress}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <a className="p-1 rounded bg-light" hidden>
                        <i className="uil uil-trash"></i>
                    </a>
                </div>
            </div>
            <div className="mt-4">
                <div className="d-flex justify-content-between">
                    <div className="gap-2 d-flex align-items-center">
                        <div>
                            <p className="m-0" style={{ fontSize: 14 + "px" }}>
                                Jumlah Soal : 10 Soal
                            </p>
                            <p
                                style={{ fontSize: 14 + "px" }}
                                className="fw-light"
                            >
                                Waktu : 8 Jam
                            </p>
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        <div>
                            <button
                                onClick={() => handleAction("view", id)}
                                className="btn btn-outline-primary"
                            >
                                <i className="uil uil-edit me-1"></i> Kerjakan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function QuizHeader(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <h3 className="mb-2 text-capitalize">{props.quiz.title}</h3>
                    <p>{props.quiz.description}</p>
                </div>
                <div className="mt-4">
                    <hr className="border" />
                    <h4 className="p-0 m-0 fw-normal">
                        <i className="fas fa-clock me-2 text-primary"></i>Waktu
                        Mengerjakan 10 Menit
                    </h4>
                    <hr className="border" />
                    <div className="d-flex">
                        <h4 className="p-0 m-0 fw-normal">
                            <i className="fas fa-list-alt me-2 text-primary"></i>
                            Total 40 Soal
                        </h4>
                    </div>
                    <hr className="border" />
                </div>
                <div class="w-full p-4 text-white bg-primary opacity rounded">
                    <div class="items-center">
                        <p class="ms-3 fs-4 mb-2 text-white">
                            <b>Perhatian!</b>
                        </p>
                        <ol class="mt-0" style={{ listStyleType: "decimal" }}>
                            <li>
                                Pastikan anda menggunakan google chrome terbaru
                                agar tidak terjadi kendala dalam pengerjaan soal
                                tryout ini.{" "}
                            </li>
                            <li>
                                Pastikan tidak ada aktivitas login ke akun anda
                                (pada perangkat lain) saat sedang mengerjakan
                                tryout.{" "}
                            </li>
                            <li>
                                Mohon pastikan bahwa jaringan internet di tempat
                                anda mengerjakan soal ini lancar agar tidak
                                terjadi hal-al yang tidak diinginkan.
                            </li>
                            <li>
                                Jangan lupa berdoa ya. Biar semuanya
                                dilancarkan!
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="mt-4 gap-2 d-flex justify-content-end">
                    <button className="btn btn-outline-primary">
                        Mulai mengerjakan
                    </button>
                    <button className="btn btn-outline-danger">Batalkan</button>
                </div>
            </div>
        </div>
    );
}

export function ResultQuizHeader({ result }) {
    const quiz = result.quiz;
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex gap-3">
                    <div>
                        <img
                            className="bg-light img-fluid"
                            style={{ maxHeight: 200 + "px" }}
                            src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&h=200"
                            alt=""
                        />
                    </div>
                    <div>
                        <p
                            style={{ fontSize: 14 + "px" }}
                            className="mb-1 text-capitalize"
                        >
                            {quiz.quiz_type}
                        </p>
                        <h3 className="mt-2 mb-1">{quiz.title}</h3>
                        <p>{quiz.description}</p>
                        <div className="d-flex gap-2">
                            <button className="py-1 btn btn-outline-success">
                                <i class="fas fa-star me-2"></i>
                                {result.score} Poin
                            </button>
                            <button className="py-1 btn btn-outline-success">
                                <i class="fas fa-hourglass-end me-2"></i>
                                {calculateTimeDifference(
                                    result.created_at,
                                    result.timestamp
                                )}{" "}
                                Menit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ResultQuestionExplanation({ userAnswer }) {
    console.log(userAnswer);

    return (
        <div className="row">
            {Object.values(userAnswer).map((e, index) => {
                return (
                    <div key={e.id} className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4>Soal No. {index + 1}</h4>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: e.question?.question_text,
                                    }}
                                ></p>
                                <div
                                    className={`border p-2 ${
                                        e.is_correct
                                            ? "border-success"
                                            : "border-danger"
                                    } rounded-lg mb-2`}
                                >
                                    <h5 className="text-success mb-3">
                                        Kunci Jawaban :{" "}
                                        {literals[e.question.correct_answer]}
                                    </h5>
                                    <p className="mb-2">Penjelasan :</p>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: e.question.explanation
                                                ?.explanation_text,
                                        }}
                                    ></p>
                                </div>
                                <div
                                    className={`border p-2 ${
                                        e.is_correct
                                            ? "border-success"
                                            : "border-danger"
                                    } rounded-lg`}
                                >
                                    <h5
                                        className={`${
                                            e.is_correct
                                                ? "text-success"
                                                : "text-danger"
                                        }`}
                                    >
                                        Jawaban kamu :{" "}
                                        {literals[e.selected_answer]}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
