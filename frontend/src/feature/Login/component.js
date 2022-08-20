import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom';

import {Button} from "../../components/Button";
import {ButtonStyles} from "../../components/Button";
import {Input} from "../../components/Input";
import {InputStyles} from "../../components/Input";

import FormStyles from "./style.module.css"

function Login(props){

    const navigate = useNavigate();

    const inputRef = useRef(null);
    var name = ""; // nao precisa ser UseState

    useEffect(() => {
        inputRef.current.focus();

        props.socket.on("server:login-confirmation", ({user}) => {
            props.setUser(user);
			navigate("/general-chat");
		});
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.socket.emit("client:login", {name: name});
    }

    const handleOnChange = (e) => {
        name = e.target.value;
    }

    return(
        <div 
            className={FormStyles.loginFormContainer}
        >
            <form 
                onSubmit={handleOnSubmit} 
                className={FormStyles.loginForm}
            >
                <h1 className={FormStyles.loginFormTitle}>
                    Login
                </h1>
                <Input 
                    innerRef={inputRef}
                    className={InputStyles.rectangleInput}
                    type={"text"}
                    placeholder={"Insert Name"}
                    handleOnChange={e => handleOnChange(e)}
                />
                <Button
                    type={"submit"}
                    className={ButtonStyles.rectangleButton}
                    label={"Join General Chat"}
                    handleOnClick={null}
                />
                
                {/* <button type='submit'>Join Private Chat</button> */}

                {/* <button type='submit'>Create Private Chat</button> */}

            </form>
        </div>
    );

}

export default Login;
