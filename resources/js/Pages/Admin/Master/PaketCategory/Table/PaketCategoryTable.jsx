import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";    
import { CrudButton } from "@/App/Components/Button";
import useCrud from "@/App/Utils/hooks/useCrud";
import { useSelector } from "react-redux";
export default function PaketCategoryTable({ category }) {
    const { handleDelete } = useCrud("master.paket_kategori");
    const loading = useSelector((state) => state.page.showMiniLoading);

    const theme = createTheme({
        typography: {
          fontFamily: 'poppins',
          body1: {
            padding: 0,
            margin: 0
          }
        }
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

    return <ThemeProvider theme={theme}>
        <DataGrid className="DataTable" editMode="row" rows={category} columns={columns} />
    </ThemeProvider>;
}
