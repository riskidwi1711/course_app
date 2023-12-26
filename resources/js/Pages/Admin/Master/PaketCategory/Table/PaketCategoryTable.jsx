import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { CrudButton } from "@/App/Components/Button";
import useCrud from "@/App/Utils/hooks/useCrud";
import { useSelector } from "react-redux";
import {
    DataGrid,
    gridPageCountSelector,
    GridPagination,
    useGridApiContext,
    useGridSelector,
} from "@mui/x-data-grid";
import MuiPagination from "@mui/material/Pagination";
export default function PaketCategoryTable({ category }) {
    const { handleDelete } = useCrud("master.paket_kategori");
    const loading = useSelector((state) => state.page.showMiniLoading);

    const theme = createTheme({
        typography: {
            fontFamily: "poppins",
            body1: {
                padding: 0,
                margin: 0,
            },
        },
    });

    const columns = [
        { field: "title", headerName: "Nama Kategori", flex: 3 },
        { field: "description", headerName: "Deskripsi", flex: 3 },
        {
            field: "paket",
            headerName: "Paket",
            flex: 1,
            valueGetter: (params) => params.value?.package_name,
        },
        {
            field: "id",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => (
                <CrudButton
                    loading={loading}
                    param={params.value}
                    onDelete={handleDelete}
                    onEdit={() => {}}
                />
            ),
        },
    ];

    function Pagination({ page, onPageChange, className }) {
        const apiRef = useGridApiContext();
        const pageCount = useGridSelector(apiRef, gridPageCountSelector);

        return (
            <MuiPagination
                color="primary"
                className={className}
                count={pageCount}
                page={page + 1}
                onChange={(event, newPage) => {
                    onPageChange(event, newPage - 1);
                }}
            />
        );
    }

    function CustomPagination(props) {
        return <GridPagination ActionsComponent={Pagination} {...props} />;
    }

    return (
        <ThemeProvider theme={theme}>
            <DataGrid
                className="DataTable"
                editMode="row"
                rows={category}
                columns={columns}
                pagination
                slots={{
                    pagination: CustomPagination
                }}
            />
        </ThemeProvider>
    );
}
