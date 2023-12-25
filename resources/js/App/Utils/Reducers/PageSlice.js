import { createSlice } from "@reduxjs/toolkit";
import { actions } from "react-table";

const initialState = {
    isPageLoading: false,
    isWindowLoading: false,
    isComponentLoading: false,
    showMiniLoading: false,
    value: 0,
    currentPage: "Dashboard",
    currentMenu: "Paket Saya",
    currentPageIcon: "uil-home-alt",
    toast: {
        show: false,
        text: "",
    },
    modal: {
        show: false,
        size: "lg",
        component: "",
        title: "",
    },
};

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        changeValue: (state) => {
            state.value += 1;
        },
        togglePageLoading: (state) => {
            state.isPageLoading = !state.isPageLoading;
        },
        toggleWindowLoading: (state) => {
            state.isWindowLoading = !state.isWindowLoading;
        },
        setWindowLoading: (state, action) => {
            state.isWindowLoading = action.payload;
        },
        setPageTitleIcon: (state, action) => {
            state.currentPage = action.payload.title;
            state.currentPageIcon = action.payload.icon;
        },
        toggleToast: (state, action) => {
            state.toast.show = action.payload.show
                ? action.payload.show
                : !state.toast.show;
            state.toast.text = action.payload.text;
        },
        toggleModal: (state, action) => {
            state.modal.show = action.payload.show
                ? action.payload.show
                : !state.modal.show;
            (state.modal.component = action.payload.component),
                (state.modal.title = action.payload.title);
            state.modal.size = action.payload.size ? action.payload.size : "lg";
        },
        setCurrentMenu: (state, action) => {
            state.currentMenu = action.payload;
        },
        showMiniLoading: (state) => {
            state.showMiniLoading = true;
        },
        hideMiniLoading: (state) => {
            state.showMiniLoading = false;
        },
        toggleComponentLoading: (state, action)=>{
            state.isComponentLoading = action.payload;
        }
    },
});

export const {
    changeValue,
    toggleModal,
    togglePageLoading,
    toggleWindowLoading,
    setWindowLoading,
    setPageTitleIcon,
    toggleToast,
    setCurrentMenu,
    showMiniLoading,
    hideMiniLoading,
    toggleComponentLoading
} = pageSlice.actions;

export default pageSlice.reducer;
