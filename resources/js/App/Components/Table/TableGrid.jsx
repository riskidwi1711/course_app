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
import { data } from "autoprefixer";
export default function TableGrid({ data, columns }) {

    const theme = createTheme({
        typography: {
            fontFamily: "poppins",
            body1: {
                padding: 0,
                margin: 0,
            },
        },
    });

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
                getRowId={(row)=>row.id ? row.id : row.transaction_id}
                className="DataTable"
                editMode="row"
                rows={data}
                columns={columns}
                pagination
                slots={{
                    pagination: CustomPagination
                }}
            />
        </ThemeProvider>
    );
}
