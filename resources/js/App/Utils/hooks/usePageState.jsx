import { useDispatch, useSelector } from "react-redux";
import { togglePageLoading, toggleWindowLoading } from "../Reducers/PageSlice";

const usePageState = () => {
    const { isPageLoading, isWindowLoading } = useSelector(
        (state) => state.page
    );
    const dispatch = useDispatch();

    const pageLoading = () => {
        dispatch(togglePageLoading());
    };

    const windowLoading = () => {
        dispatch(toggleWindowLoading());
    };

    return {
        pageLoading,
        windowLoading,
        isPageLoading,
        isWindowLoading,
    };
};

export default usePageState;
