import BaseForm from "@/App/Components/Base/Form/BaseForm";
import TextInput from "@/App/Components/Base/Form/TextInput";
import { Card } from "@/App/Components/Card";
import SubscribedCards from "@/App/Components/Cards/SubscribedCards";
import { HdDp_img, profile_img } from "@/App/Theme/images";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { useDispatch } from "react-redux";

export default function ShowMyProfile({
    auth,
    pageIdentity,
    user_subscription,
}) {
    const dispatch = useDispatch()
    const handleEditProfile = () =>{
        dispatch(toggleModal({
            show: true,
            
        }))
    }

    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <div className="row">
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <Card>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img
                                        style={{ maxWidth: 100 + "px" }}
                                        src={HdDp_img}
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <div className="text-center mt-3">
                                        <h3 className="mb-1">
                                            {auth.user.name}
                                        </h3>
                                        <p>{auth.user.email}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-lg-12">
                            <Card>
                                <p className="fs-4 fw-bold st_title mb-4">
                                    List Langganan
                                </p>
                                <SubscribedCards
                                    subscriptions={user_subscription}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <Card title="Biodata">
                        <p className="fs-4 fw-bold st_title mb-4">Biodata</p>
                        {Object.keys(auth.user).map((key) => {
                            if (
                                [
                                    "name",
                                    "email",
                                    "jenis_kelamin",
                                    "no_handphone",
                                ].includes(key)
                            ) {
                                return (
                                    <div className="row fs-5 mb-2 border-bottom py-2">
                                        <div className="col-lg-4 text-capitalize">
                                            {key}
                                        </div>
                                        <div className="col-lg-8 text-muted">
                                            {auth.user[key]}
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        <div className="mt-4">
                            <button className="btn btn-primary">
                                <i className="fas fa-edit"></i> Ubah Profile
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </Authenticated>
    );
}
