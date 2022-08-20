import React from "react";
import {Outlet} from 'react-router-dom';

import LayoutStyles from "./style.module.css";

function Layout(){

    return(
        <div className={LayoutStyles.layoutContainer}>
            <Outlet/>
        </div>
    )
}

export default Layout;