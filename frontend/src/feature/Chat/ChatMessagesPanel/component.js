import React, {useState} from "react";

import Message from "./Message/index";

import ChatMessagesPanelStyles from "./style.module.css"

function ChatMessagesPanel(props){
    
    const [messages, setMessages] = useState([]);

    props.socket.on("server:message", ({message}) => {
        setMessages(
            messages.concat({
                "id": message.id, 
				"author": message.author, 
				"text": message.text
			})
        );
    });

    return(
        <div className={ChatMessagesPanelStyles.ChatMessagesContainer}>
            {
                messages.map((message, i) => (
                    <div 
                        className={ChatMessagesPanelStyles.ChatMessagesRow} 
                        style={{flexDirection : message.id != props.socket.id ? "row-reverse" : "row"}} 
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

export default ChatMessagesPanel;