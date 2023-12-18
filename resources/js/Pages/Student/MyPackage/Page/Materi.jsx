import { StudentBookCards } from "@/App/Components/Cards/BookCards";
import { router } from "@inertiajs/react";
import React from "react";

export default function Materi(props) {
    const bookDetail = (id) => {
        router.visit(route("materi.detail", id));
    };
    return (
        <div className="row">
            {Object.values(props.paket.materis).map((e) => {
                return (
                    <div className="col-lg-4">
                        <StudentBookCards
                            title={e.title}
                            bookDetail={() => bookDetail(e.id)}
                        />
                    </div>
                );
            })}
        </div>
    );
}
