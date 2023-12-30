import { Card } from "@/App/Components/Card";
import SoalCard from "@/App/Components/Cards/SoalCard";
import {
    toggleModal,
} from "@/App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";
import React from "react";
import { useDispatch } from "react-redux";

export function Tryout(props) {
    const dispatch = useDispatch();

    const handleRoute = () => {
        router.visit(route("soal"));
    };

    const handleImport = () => {
        // dispatch(
        //     toggleModal({
        //         show: true,
        //         component: <DragAndDrop />,
        //         title: <ModalImportSoalTitle />,
        //     })
        // );
    };
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Card>
                        <div className="d-flex justify-content-between align-items-start flex-md-row flex-column align-md-items-center gap-3">
                            <div>
                                <h4 className="fw-bold">
                                    <i className="uil uil-book-alt"></i> Buat
                                    soal try out atau import dari file excel
                                </h4>
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    onClick={handleRoute}
                                    className="btn btn-primary"
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Buat Soal
                                </button>
                                <button
                                    onClick={handleImport}
                                    className="btn btn-success"
                                >
                                    <i className="fas fa-file-excel me-2"></i>
                                    Import Soal
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {Object.values(props.tryouts).map((e) => {
                        return (
                            <SoalCard
                                title={e.title}
                                type={e.quiz_type}
                                created_by={e.user}
                                created_at={e.created_at}
                                id={e.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}