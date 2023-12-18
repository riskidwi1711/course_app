import { bookIll_img } from "@/App/Theme/images";
import React from "react";

export default function BookCards({ desc, title, bookDetail, bookRemove }) {
    return (
        <div
            class="card rounded-lg bg-primary"
            style={{
                minHeight: 380 + "px",
                maxWidth: 270 + "px",
                cursor: "pointer",
            }}
        >
            <div
                onClick={bookDetail}
                className="card-body d-flex flex-column justify-content-between align-items-start"
            >
                <div className="w-100">
                    <img
                        src={bookIll_img}
                        alt=""
                        className="mt-4"
                        style={{ maxWidth: 200 + "px" }}
                    />
                </div>
                <div style={{ maxWidth: 100 + "%" }} className="">
                    <p className="fs-4 fw-bold text-white mb-1 text-align-left">
                        {title}.
                    </p>
                    <p className="text-light" style={{ fontSize: 11 + "px" }}>
                        Materi {desc}
                    </p>
                </div>
            </div>

            <div className="card-footer bg-white">
                <div className="w-100 d-flex justify-content-end gap-2">
                    <button
                        onClick={bookRemove}
                        className="btn btn-outline-danger"
                    >
                        <i className="fas fa-trash"></i> Hapus
                    </button>
                    <button
                        onClick={bookDetail}
                        className="btn btn-outline-primary"
                    >
                        <i className="fas fa-eye"></i> Lihat
                    </button>
                </div>
            </div>
        </div>
    );
}
export function StudentBookCards({ desc, title, bookDetail }) {
  return (
    <div
            onClick={bookDetail}
            class="card rounded-lg bg-primary shadow"
            style={{
                minHeight: 350 + "px",
                maxWidth: 270 + "px",
                cursor: "pointer",
            }}
        >
            <div
                onClick={bookDetail}
                className="card-body d-flex flex-column justify-content-between align-items-start"
            >
                <div className="w-100">
                    <img
                        src={bookIll_img}
                        alt=""
                        className="mt-4"
                        style={{ maxWidth: 200 + "px" }}
                    />
                </div>
                <div style={{ maxWidth: 100 + "%" }} className="">
                    <p className="fs-4 fw-bold text-white mb-1 text-align-left">
                        {title}.
                    </p>
                    <p className="text-light" style={{ fontSize: 11 + "px" }}>
                        Materi {desc}
                    </p>
                </div>
            </div>
        </div>
  )
}
