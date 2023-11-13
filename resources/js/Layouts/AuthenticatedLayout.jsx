import Header from "@/App/Components/Header";
import Nav from "@/App/Components/Nav";
import { WindowIndicators } from "@/App/Components/Indicators";
import { useSelector } from "react-redux";
import ContentWrapper from "@/App/Components/Content";
import useToast from "@/App/Utils/hooks/useToast";
import useModal from "@/App/Utils/hooks/useModal";
import { useEffect } from "react";

function Authenticated({ children, auth, pageIdentity }) {
    const { isWindowLoading } = useSelector((state) => state.page);
    const { modal } = useModal();

    useEffect(() => {
        console.info("layout mounted");

        return () => console.info("layout unmounted");
    }, []);

    useEffect(() => {
        console.log(pageIdentity);
    }, [pageIdentity]);

    return (
        <>
            <Header />
            <Nav menu={auth.menu} />

            <div className="wrapper">
                <div className="sa4d25">
                    {modal}
                    {isWindowLoading ? (
                        <WindowIndicators />
                    ) : (
                        <ContentWrapper isWindowLoading={isWindowLoading} pageIdentity={pageIdentity}>
                            {children}
                        </ContentWrapper>
                    )}
                </div>
            </div>
        </>
    );
}

export default Authenticated;
