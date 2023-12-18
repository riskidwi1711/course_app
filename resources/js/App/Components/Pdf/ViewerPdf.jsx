import { Worker } from "@react-pdf-viewer/core";
export default function ViewerPdf({ children }) {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {children}
        </Worker>
    );
}
