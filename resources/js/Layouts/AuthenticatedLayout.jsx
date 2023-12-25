import Header from "@/App/Components/Header";
import Nav from "@/App/Components/Nav";
import {
    ComponentSpiner,
    Spinner,
    WindowIndicators,
} from "@/App/Components/Indicators";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "@/App/Components/Content";
import useToast from "@/App/Utils/hooks/useToast";
import useModal from "@/App/Utils/hooks/useModal";
import { useEffect } from "react";
import { setCurrentMenu } from "@/App/Utils/Reducers/PageSlice";
import { initialUserData } from "@/App/Utils/Reducers/UserDataSlice";

function Authenticated({ children, auth, pageIdentity }) {
    const { isWindowLoading, isComponentLoading } = useSelector(
        (state) => state.page
    );
    const { modal } = useModal();
    const dispatch = useDispatch();

    useEffect(() => {
        console.info("layout mounted");

        return () => console.info("layout unmounted");
    }, []);

    useEffect(() => {
        dispatch(initialUserData(auth.user));
    }, [auth]);

    useEffect(() => {
        if (auth.user.role === "user") {
            dispatch(setCurrentMenu("Beli Paket"));
        }
    }, [auth.user]);

    return (
        <>
            <Header />
            <Nav menu={auth.menu} />

            <div className="wrapper" style={{ position: "relative" }}>
                {isComponentLoading && <ComponentSpiner />}
                <div className="sa4d25">
                    {modal}
                    {isWindowLoading ? (
                        <WindowIndicators />
                    ) : (
                        <ContentWrapper
                            isWindowLoading={isWindowLoading}
                            pageIdentity={pageIdentity}
                        >
                            {children}
                        </ContentWrapper>
                    )}
                </div>
            </div>
        </>
    );
}

export default Authenticated;
