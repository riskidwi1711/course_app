import { Card, CardHeader } from "@/App/Components/Card";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useRef, useState } from "react";
import SoalCreate, { DragAndDrop, ModalImportSoalTitle } from "./SoalCreate";
import { motion } from "framer-motion";
import SoalCard, { PreviewSoalCard } from "@/App/Components/Cards/SoalCard";
import { router } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";

export default function Index(props) {
    return (
        <Authenticated auth={props.auth} pageIdentity={props.pageIdentity}>
            <SoalWizard {...props} />
        </Authenticated>
    );
}

function SoalWizard(props) {
    const [form, setForm] = useState({
        paket_id: "",
        paket_menu: "",
        nilai_benar: "",
        nilai_salah: "",
    });

    const dispacth = useDispatch();

    const [allFilled, setAllFilled] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    useEffect(() => {
        if (
            form.paket_id.trim() !== "" &&
            form.paket_menu.trim() !== "" &&
            form.nilai_benar.trim() !== "" &&
            form.nilai_salah.trim() !== ""
        ) {
            setAllFilled(true);
        } else {
            setAllFilled(false);
        }
    }, [form]);

    const handleRoute = () => {
        router.visit(route("soal.create"));
    };

    const handleImport = () => {
        dispacth(
            toggleModal({
                show: true,
                component: <DragAndDrop />,
                title: <ModalImportSoalTitle />,
            })
        );
    };

    return (
        <div className="row justify-content-center">
            <div className="col-8">
                <Card
                    title="Soal creator"
                    desc="Isi dengan benar untuk membuat soal"
                >
                    <form action="">
                        <div className="form-floating mb-3">
                            <select
                                className="form-select fs-5 mb-2"
                                name="paket_menu"
                                onChange={handleChange}
                            >
                                <option selected className="fs-5 my-2">
                                    Pilih menu paket
                                </option>
                                {Object.values(props.paket).map((paket) => {
                                    return (
                                        <option
                                            value={paket.id}
                                            selected
                                            className="fs-5 my-2"
                                        >
                                            {paket.package_name}
                                        </option>
                                    );
                                })}
                            </select>
                            <label>Paket</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select
                                className="form-select fs-5 mb-2"
                                name="paket_id"
                                onChange={handleChange}
                            >
                                <option selected className="fs-5 my-2">
                                    Pilih paket
                                </option>
                                {Object.values(props.paket_produk).map(
                                    (data) => {
                                        let selectedPaketId = form.paket_menu;
                                        if (data.paket_id == selectedPaketId) {
                                            return (
                                                <option
                                                    value={data.id}
                                                    className="fs-5 my-2"
                                                >
                                                    {data.title}
                                                </option>
                                            );
                                        }
                                    }
                                )}
                            </select>
                            <label>Paket produk</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select
                                className="form-select fs-5 mb-2"
                                name="jenis_soal"
                            >
                                <option selected className="fs-5 my-2">
                                    Pilih jenis soal
                                </option>
                                <option selected className="fs-5 my-2">
                                    TryOut
                                </option>
                                <option selected className="fs-5 my-2">
                                    Soal Latihan
                                </option>
                            </select>
                            <label>Jenis soal</label>
                        </div>
                        <div className={` form-floating mb-3`}>
                            <input
                                className="form-control fs-5"
                                type="text"
                                name="nilai_benar"
                                placeholder="0"
                                onChange={handleChange}
                            />
                            <label htmlFor="nilai">
                                Nilai untuk setiap soal jika benar
                            </label>
                        </div>
                        <div className={` form-floating mb-3`}>
                            <input
                                className="form-control fs-5"
                                type="text"
                                name="nilai_salah"
                                placeholder="0"
                                onChange={handleChange}
                            />
                            <label htmlFor="nilai">
                                Nilai untuk setiap soal jika salah
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
            <div className="col-4">
                <Card title={"Soal dibuat"} desc={"List soal yang baru dibuat"}>
                    <PreviewSoalCard />
                    <PreviewSoalCard />
                    <PreviewSoalCard />
                </Card>
            </div>
        </div>
    );
}
