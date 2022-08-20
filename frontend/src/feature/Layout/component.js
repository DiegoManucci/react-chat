import React, {useEffect} from "react";
import {Outlet, useNavigate} from 'react-router-dom';

import LayoutStyles from "./style.module.css";

function Layout(props){

    const navigate = useNavigate();

    useEffect(() => {

        props.socket.on("connect", () => {
            props.setLoggedIn(true);
        });

        props.socket.on("disconnect", () => {
            navigate("/login");
            props.socket.removeAllListeners();
        });

    });

    return(
        <div className={LayoutStyles.layoutContainer}>
            <Outlet/>
        </div>
    )
}

export default Layout;