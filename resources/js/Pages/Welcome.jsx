import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <Authenticated auth={auth}>
            <div>Hello guys</div>
        </Authenticated>
    );
}
