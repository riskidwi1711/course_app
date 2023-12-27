import TransactionCard from "@/App/Components/Cards/TransactionCard";
import TableBasic, { TableWrapper } from "@/App/Components/Table/TableBasic";
import UrlLoader from "@/App/Components/UrlLoader";
import { toggleModal } from "@/App/Utils/Reducers/PageSlice";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { useDispatch } from "react-redux";
import ModalPayment from "./Modal/ModalPayment";
import ModalPaymentTitle from "./Modal/ModalPaymentTitle";

export default function ShowTransactionHistory({
    auth,
    pageIdentity,
    user_transactions,
}) {
    const dispatch = useDispatch();
    const handleCheckout = (url) => {
        dispatch(
            toggleModal({
                title: <ModalPaymentTitle />,
                component: <ModalPayment url={url} />,
                size: "md",
                show: true,
            })
        );
    };
    console.log(user_transactions)
    return (
        <Authenticated auth={auth} pageIdentity={pageIdentity}>
            <div className="row">
                {Object.values(user_transactions).map((transaction) => {
                    return (
                        <div className="col-sm-12 col-lg-6">
                            <TransactionCard
                                date={transaction.created_at}
                                title={transaction.product?.title}
                                amount={transaction.total_amount}
                                status={transaction.status_id}
                                onCheckout={() =>
                                    handleCheckout(
                                        transaction.checkout_link
                                    )
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </Authenticated>
    );
}
