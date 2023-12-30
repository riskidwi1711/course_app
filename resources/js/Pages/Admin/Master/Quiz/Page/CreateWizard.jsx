import { Card } from "@/App/Components/Card";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { router } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import useQuizController from "../Hooks/useQuizController";

export function CreateWizard() {
    const {context, handleChange, handleImport, handleRoute, form, allFilled } = useQuizController()
    console.log(context)
    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <Card
                    title={`Buat ${context.quiz_type}`}
                    desc="Isi dengan benar untuk membuat soal"
                >
                    <form action="">
                        <div className={` form-floating mb-3`}>
                            <input
                                className="form-control fs-5"
                                type="text"
                                name="judul_soal"
                                placeholder="0"
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="nilai">Judul Soal</label>
                        </div>
                        <div className={` form-floating mb-3`}>
                            <input
                                className="form-control fs-5"
                                type="text"
                                name="deskripsi"
                                placeholder="0"
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="nilai">Deskripsi</label>
                        </div>
                        <div className={` form-floating mb-3`}>
                            <input
                                className="form-control fs-5"
                                type="number"
                                name="point_per_question"
                                placeholder="0"
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="nilai">
                                Nilai untuk setiap soal
                            </label>
                        </div>
                        <div className={` form-floating mb-3`}>
                            <input
                                className="form-control fs-5"
                                type="number"
                                name="total_time"
                                required
                                placeholder="0"
                                onChange={handleChange}
                            />
                            <label htmlFor="nilai">
                                Batas waktu mengerjakan (menit)
                            </label>
                        </div>
                        {allFilled && (
                            <motion.div
                                animate={{ y: 0 }}
                                initial={{ y: 100 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0, 0.71, 1],
                                    y: {
                                        type: "spring",
                                        damping: 10,
                                        stiffness: 100,
                                        restDelta: 0.05,
                                    },
                                }}
                                className="d-flex gap-2"
                            >
                                <div
                                    onClick={handleRoute}
                                    className="p-5 w-50 btn btn-outline-primary fs-5"
                                >
                                    <i className="fas fa-pen me-2"></i>Buat Soal
                                    Manual
                                </div>
                                <div
                                    onClick={handleImport}
                                    className="p-5 w-50 btn btn-outline-success fs-5 w-50"
                                >
                                    <i className="fas fa-file-excel me-2"></i>{" "}
                                    Import Soal Dengan File Excel
                                </div>
                            </motion.div>
                        )}
                    </form>
                </Card>
            </div>
        </div>
    );
}