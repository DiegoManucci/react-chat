import React from "react";

import PageContainer from "../layout/PageContainer";
import ChatMessages from "../features/Chat/ChatMessages";
import ChatInput from "../features/Chat/ChatInput";

function ChatPage(props){

    const chatContainer = {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    }

    return(
        <PageContainer>
            <div style={chatContainer}>
                <ChatMessages/>
                <ChatInput/>
            </div>
        </PageContainer>
    )
}

export default ChatPage;