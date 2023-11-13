import { error_img } from "@/App/Theme/images";
import { Link } from "@inertiajs/react";

export default function ErrorPage({ status }) {
    const title = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    }[status];

    const description = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    }[status];

    return (
        <div class="account-pages pt-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mb-5">
                            <h1 class="display-2 fw-medium">{status}</h1>
                            <h4 class="text-uppercase">{title}</h4>
                            <h5>{description}</h5>
                            <div class="mt-5 text-center">
                                <Link
                                    href="/dashboard"
                                    class="btn btn-primary waves-effect waves-light"
                                >
                                    Back to Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8 col-xl-6">
                        <div>
                            <img src={error_img} alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
