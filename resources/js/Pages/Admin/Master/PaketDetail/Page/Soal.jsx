import { Card } from "@/App/Components/Card";
import { useRouter } from "@/App/Utils/hooks/useRouter";
import { router } from "@inertiajs/react";
import React from "react";
import { useDispatch } from "react-redux";
import ModalImportSoal, {
    ModalImportSoalTitle,
} from "../Modal/ModalImportSoal";
import usePaketDetailController from "../Hooks/usePaketDetailController";
import SoalCard from "@/App/Components/Cards/SoalCard";

export default function Soal(props) {
    const { handleImportSoal, handleCreateSoal, handleSoalAction } =
        usePaketDetailController();

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Card>
                        <div className="d-flex justify-content-between align-items-start flex-md-row flex-column align-md-items-center gap-3">
                            <div>
                                <h4 className="fw-bold">
                                    <i className="uil uil-book-alt"></i> Buat
                                    soal atau import dari file excel
                                </h4>
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    onClick={handleCreateSoal}
                                    className="btn btn-primary"
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Buat Soal
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {Object.values(props.quizez).map((e) => {
                        return (
                            <SoalCard
                                hanldeAction={handleSoalAction}
                                title={e.title}
                                type={e.quiz_type}
                                created_by={e.user}
                                created_at={e.created_at}
                                id={e.id}
                                edit={false}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
