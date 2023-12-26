import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useUserData() {
    const userData = useSelector((state) => state.userData);
    const [user, setUser] = React.useState({});

    useEffect(()=>{
        setUser(userData.user)
    },[userData])


    return {user};
}
