import React from "react";

import LoginForm from "../features/Login/LoginForm";
import CenterContainer from "../layout/CenterContainer";

function LoginPage(props){

    return(
        <CenterContainer>
            <LoginForm setLoggedIn={props.setLoggedIn}/>
        </CenterContainer>
    )
}

export default LoginPage;