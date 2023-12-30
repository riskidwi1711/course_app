import { useDispatch } from "react-redux";
import { toggleComponentLoading } from "../Reducers/PageSlice";
import { router } from "@inertiajs/react";

export const useRouter = () => {
    const dispatch = useDispatch();
    const onBefore = () => {
        dispatch(toggleComponentLoading(true));
    };

    const onFinish = () => {
        setTimeout(() => {
            dispatch(toggleComponentLoading(false));
        }, 1000);
    };

    const onError = (e) => {
        alert(e);
        dispatch(toggleComponentLoading(false));
    };

    const visit = (url, onSuccess = () => {}) =>
        router.visit(url, {
            onBefore: onBefore,
            onFinish: onFinish,
            onError: onError,
            onSuccess: () => {
                dispatch(toggleComponentLoading(false));
                onSuccess();
            },
        });

    const post = (url, data={}, onSuccess = () => {}) =>
        router.post(url, data, {
            onBefore: onBefore,
            onFinish: onFinish,
            onError: onError,
            onSuccess: () => {
                dispatch(toggleComponentLoading(false));
                onSuccess();
            },
        });

    return { visit, post };
};
