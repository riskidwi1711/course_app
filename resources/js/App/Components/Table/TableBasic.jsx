import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import { Link } from "@inertiajs/react";
import React from "react";
import { useDispatch } from "react-redux";
import { usePagination, useTable } from "react-table";

const defaultPropGetter = () => ({});
export default function TableBasic({
    title,
    desc,
    data,
    columns,
    getCellProps = defaultPropGetter,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        state: { pageIndex, pageSize },
        gotoPage,
        setPageSize,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageCount,
    } = useTable(
        {
            columns,
            data,
        },
        usePagination
    );
    return (
        <>
            <div className="d-flex justify-content-end mb-2">
                <div className="page-size">
                    <select
                        className="form-select"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 15, 20, 25].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div class="table-responsive">
                <table {...getTableProps()} className="table table-bordered">
                    <thead className="fs-6">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="fs-6">
                        {page.map((row) => {
                            // Updated to use "page" here
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps([
                                                    {
                                                        className:
                                                            cell.column
                                                                .className,
                                                        style: cell.column
                                                            .style,
                                                    },
                                                ])}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="pagination d-flex justify-content-end">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li
                                className={`page-item ${
                                    !canPreviousPage ? "disabled" : ""
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => previousPage()}
                                >
                                    {"Previous"}
                                </button>
                            </li>
                            {Array.from({ length: pageCount }, (_, page) => (
                                <li
                                    key={page}
                                    className={`page-item ${
                                        pageIndex === page ? "active" : ""
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => gotoPage(page)}
                                    >
                                        {page + 1}
                                    </button>
                                </li>
                            ))}
                            <li
                                className={`page-item ${
                                    !canNextPage ? "disabled" : ""
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => nextPage()}
                                >
                                    {"Next"}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export function TableWrapper({ title, desc, children, addForm }) {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col">
                <div class="card">
                    <div class="card-header bg-transparent border-bottom d-flex justify-content-between align-items-center p-4">
                        <div>
                            <h4 class="card-title">{title}</h4>
                            <p class="card-title-desc">{desc}</p>
                        </div>
                        <div>
                            <button
                                onClick={() =>
                                    dispatch(
                                        toggleModal({
                                            show: true,
                                            component: addForm,
                                            title: `Tambah ${title}`,
                                        })
                                    )
                                }
                                className="btn btn-primary"
                            >
                                <i className="uil uil-plus"></i> Tambah data
                            </button>
                        </div>
                    </div>
                    <div class="card-body">{children}</div>
                </div>
            </div>
        </div>
    );
}
