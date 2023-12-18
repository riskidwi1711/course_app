import { HdDp_img } from "@/App/Theme/images";
import { calculateTimeDifference } from "@/App/Utils/helpers";
import React from "react";

export default function QuizResultList({quizez, onDetail=()=>{}}) {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="">
                    <div class="table-responsive border-0">
                        <table class="table project-list-table table-nowrap align-middle table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Soal</th>
                                    <th scope="col">Waktu Mulai</th>
                                    <th scope="col">Total Waktu Mengerjakan</th>
                                    <th scope="col">Skor</th>
                                    <th scope="col">Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(quizez).map((e) => {
                                    return (
                                        <tr>
                                            <td>
                                                <img
                                                    src={HdDp_img}
                                                    alt=""
                                                    class="avatar-sm"
                                                />
                                            </td>
                                            <td>
                                                <h5
                                                    class="text-truncate font-size-14 mb-0"
                                                    style={{
                                                        verticalAlign: "middle",
                                                    }}
                                                >
                                                    <a
                                                        href="javascript: void(0);"
                                                        class="text-dark"
                                                    >
                                                        {e.quiz.title}
                                                    </a>
                                                </h5>
                                            </td>
                                            <td>{e.created_at}</td>
                                            <td>
                                                {calculateTimeDifference(
                                                    e.created_at,
                                                    e.timestamp
                                                )}{" "}
                                                menit
                                            </td>
                                            <td>
                                                <span class="badge bg-success p-2 fs-6">
                                                    {e.score}
                                                </span>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        onDetail(e.id)
                                                    }
                                                    className="btn btn-outline-primary w-100"
                                                >
                                                    Hasil dan pembahasan
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
