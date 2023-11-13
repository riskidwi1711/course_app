import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../Reducers/PageSlice";

export default function useModal() {
    const modalState = useSelector((state) => state.page.modal);
    const dispatch = useDispatch();
    const modalOn = modalState.show;

    const showModal = () => {
        document.getElementById("modalelement").classList.add("show");
        document
            .getElementById("modalelement")
            .classList.add("transition-element");
    };

    const hideModal = () => {
        document.getElementById("modalelement").classList.remove("show");
        document
            .getElementById("modalelement")
            .classList.remove("transition-element");
    };

    useEffect(() => {
        if (document.getElementById("modalelement")) {
            modalOn ? showModal() : hideModal();
        }
    }, [modalOn]);

    const togglegModal = (e) => {
        dispatch(toggleModal({ show: e, component: modalState.component }));
    };

    const modal = modalOn && (
        <div
            id="modalelement"
            class="modal fade bs-example-modal-lg"
            tabindex="-1"
            aria-labelledby="myLargeModalLabel"
            aria-modal="true"
            aria-hidden="false"
            role="dialog"
        >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5
                            class="modal-title text-capitalize"
                            id="myLargeModalLabel"
                        >
                            {modalState.title}
                        </h5>
                        <button
                            onClick={() => togglegModal(false)}
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">{modalState.component}</div>
                </div>
            </div>
        </div>
    );

    return { modal, togglegModal, modalOn };
}
