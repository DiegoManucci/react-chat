import React, {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from 'react-router-dom';

import {SocketContext} from "../../../context/SocketContext";

import {Button} from "../../../components/Button";
import {ButtonStyles} from "../../../components/Button";
import {Input} from "../../../components/Input";
import {InputStyles} from "../../../components/Input";
import {Form} from "../../../components/Form";
import {FormStyles} from "../../../components/Form";

function LoginForm(props){

    const socket = useContext(SocketContext)
    const navigate = useNavigate();

    let name = "";

    useEffect(() => {
        socket.on("server:login-confirmation", ({user}) => {
            props.setLoggedIn(true);
			navigate("/general-chat");
		});
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        socket.emit("client:login", {name: name});
    }

    const handleOnChange = (e) => {
        name = e.target.value;
    }

    return(
       <Form
           className={FormStyles.RectangleForm}
           label={"Login"}
           handleOnSubmit={handleOnSubmit}
       >
            <Input
                className={InputStyles.rectangleInput}
                type={"text"}
                placeholder={"Insert Name"}
                handleOnChange={e => handleOnChange(e)}
                focus={true}
            />
            <Button
                type={"submit"}
                className={ButtonStyles.rectangleButton}
                label={"Login"}
                handleOnClick={null}
            />
       </Form>
    );

}

export default LoginForm;
