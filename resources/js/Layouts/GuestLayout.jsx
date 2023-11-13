import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link, router } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useSelector } from "react-redux";
import FullIndicators from "@/App/Components/Indicators";

function Guest({ children }) {
    const { isPageLoading } = useSelector((state) => state.page);
    return (
        <div class="sign_in_up_bg">
            <div class="container">
                <div
                    class="row justify-content-center align-items-center"
                    style={{ height: 100 + "vh" }}
                >
                    <div class="col-lg-5">
                        {isPageLoading ? <FullIndicators /> : children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guest;
