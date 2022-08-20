import React from "react";

import MessageStyles from "./style.module.css";

function Message(props){
    return(
        <div className={MessageStyles.messageContainer}>
            <div className={MessageStyles.messageAuthorContainer}>
                <h1 className={MessageStyles.messageAuthor}>
                    {props.author}
                </h1>
            </div>
            <div className={MessageStyles.messageMessageContainer}>
                <p className={MessageStyles.messageText}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Message;