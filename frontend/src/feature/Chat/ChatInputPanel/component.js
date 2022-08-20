import React, {useState, useRef, useEffect} from "react";

import {Button, ButtonStyles} from "../../../components/Button/index";

import { FaArrowRight } from "react-icons/fa";

import ChatInputPanelStyles from "./style.module.css";

function ChatInputPanel(props){

    const inputRef = useRef(null);
    const formRef = useRef(null);
    var message = ""; // nao precisa ser UseState

    const handleOnInput = (e) => {
        message = e.target.textContent;
	}

	const handleOnSubmit = (e) => {
        e.preventDefault();
        if(message == "")
        	return;
		props.socket.emit('client:message', {text: message});
        inputRef.current.textContent = "";
        message = inputRef.current.textContent;
	}

    useEffect(() => {
        inputRef.current.focus();

        const handleKeyDown = (e) => {
            if(e.keyCode == 13)
               handleOnSubmit(e);
        };

        inputRef.current.addEventListener("keydown", handleKeyDown);

        return () => {
            inputRef.current.removeEventListener("keydown", handleKeyDown);
        };
    })

    return(
        <div className={ChatInputPanelStyles.chatInputContainer}>
            <form
                className={ChatInputPanelStyles.chatInputForm} 
                onSubmit={handleOnSubmit} 
                ref={formRef}
            >
                <div 
                    className={ChatInputPanelStyles.chatInputTextInput}
                    ref={inputRef}
                    contentEditable={true}
                    placeholder="Send a message"
                    onInput={(e) => { handleOnInput(e)} }
                /> 
                <Button
                    type={"submit"}
                    className={ButtonStyles.roundButton}
                    label={<FaArrowRight/>}
                    handleOnClick={null}
                />
            </form>
        </div>
    )
}

export default ChatInputPanel;