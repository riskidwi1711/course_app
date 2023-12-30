

export function ModalImportSoalTitle() {
    return (
        <div className="fw-normal d-flex gap-2 align-items-center">
            <button className="btn btn-outline-success m-0">
                <i className="fas fa-upload"></i>
            </button>
            <div>
                <h5 className="fw-bold mb-1 m-0">
                    Impor pertanyaan dari Excel
                </h5>
                <p
                    className="fw-normal p-0 m-0"
                    style={{ fontSize: 12 + "px" }}
                >
                    Harap unggah spreadsheet excel yang mengikuti contoh
                    template
                </p>
            </div>
        </div>
    );
}

export default function ModalImportSoal() {
    return <></>;
}
