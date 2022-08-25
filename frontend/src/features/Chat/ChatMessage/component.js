import React from "react";

import ChatMessageStyles from "./style.module.css";

function Message(props){
    return(
        <div className={ChatMessageStyles.messageContainer}>
            <div className={ChatMessageStyles.messageAuthorContainer}>
                <h1 className={ChatMessageStyles.messageAuthor}>
                    {props.author}
                </h1>
            </div>
            <div className={ChatMessageStyles.messageTextContainer}>
                <p className={ChatMessageStyles.messageText}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Message;