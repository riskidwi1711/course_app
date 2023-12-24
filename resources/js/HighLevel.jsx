import React, { useEffect } from "react";
import useToast from "./App/Utils/hooks/useToast";
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";
import { toggleToast } from "./App/Utils/Reducers/PageSlice";
import { router } from "@inertiajs/react";

export default function HighLevel(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        var pusher = new Pusher("21cdebd43d4b8d8b0c5b", {
            cluster: "ap1",
        });

        var channel = pusher.subscribe("Notifications");

        if (props.auth.user) {
            channel.bind(
                "NewNotification-" + props.auth.user.id,
                function (data) {
                    let notification = data.notification;
                    let action = data.notification.action;
                    dispatch(
                        toggleToast({
                            show: true,
                            text: notification.title,
                        })
                    );
                    if (action) {
                        router.visit(route(action.route, action.param));
                    }
                }
            );
        }
    }, []);
    const { toast } = useToast();
    return (
        <>
            {toast}
            {props.children}
        </>
    );
}
