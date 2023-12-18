import { BytesToMBConverter, fileTypeIcons } from "@/App/Utils/helpers";
import React from "react";

export function FileItem({ title, type, size }) {
    return (
        <div class="card border shadow-none mb-2 w-100">
            <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                    <div class="d-flex">
                        <div class="avatar-xs align-self-center me-2">
                            <div class="avatar-title rounded bg-transparent text-success font-size-20">
                                <i class={fileTypeIcons[type]}></i>
                            </div>
                        </div>

                        <div class="overflow-hidden me-auto">
                            <h5 class="font-size-13 text-truncate mb-1">
                                {title}
                            </h5>
                            <p class="text-muted text-truncate mb-0">{type}</p>
                        </div>

                        <div class="ms-2">
                            <p class="text-muted">
                                {BytesToMBConverter(parseInt(size))} MB
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export function FileList({ list = [], removeItem }) {
    return (
        <div className="row">
            <div className="col-12">
                {Object.values(list).map((e, index) => {
                    return (
                        <div className="d-flex gap-2 w-100 align-items-center mt-2">
                            <FileItem
                                title={e.name}
                                type={e.type}
                                size={e.size}
                            />

                            <div>
                                <button
                                    onClick={() => removeItem(index)}
                                    className="btn btn-outline-danger"
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
