import React from "react";

import ChatMessagesPanel from "./ChatMessagesPanel/index";
import ChatInputPanel from "./ChatInputPanel/index";

import ChatStyles from "./style.module.css"

function Chat(props){

    return(
        <div className={ChatStyles.chatContainer}>
            <ChatMessagesPanel socket={props.socket}/>
            <ChatInputPanel socket={props.socket}/>
        </div>
    )
}

export default Chat;