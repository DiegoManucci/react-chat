import React, {useContext, useState} from "react";

import Message from "../ChatMessage";

import ChatMessagesStyles from "./style.module.css"
import {SocketContext} from "../../../context/SocketContext";

function ChatMessages(props){

    const socket = useContext(SocketContext);

    const [messages, setMessages] = useState([]);

    socket.on("server:message", ({message}) => {
        setMessages(
            messages.concat({
                "id": message.id, 
				"author": message.author, 
				"text": message.text
			})
        );
    });

    return(
        <div className={ChatMessagesStyles.ChatMessagesContainer}>
            {
                messages.map((message, i) => (
                    <div 
                        className={ChatMessagesStyles.ChatMessagesRow}
                        style={{flexDirection : message.id !== socket.id ? "row-reverse" : "row"}}
                        key={i}
                    >
                        <Message 
                            key={i}
                            author={message.author}
                            text={message.text}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default ChatMessages;