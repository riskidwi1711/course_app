import React from "react";

export default function SubscribedCards({ subscriptions }) {
    return Object.values(subscriptions).map((e) => {
        return (
            <div class="card bg-primary text-white-50 mb-2">
                <div class="card-body d-flex justify-content-start align-items-center">
                    <i class="fas fa-check-circle fs-2 text-white me-3"></i>{" "}
                    <div>
                        <h5 class="mb-2 text-white">{e.paket.title}</h5>
                        <p class="card-text text-white p-0 m-0">
                            {e.created_at}
                        </p>
                    </div>
                </div>
            </div>
        );
    });
}
