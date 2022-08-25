import React from "react";
import io from "socket.io-client";

const socket = io(process.env.REACT_APP_BACKEND_URL, {
    cors: {
        origin: "*",
    }
});

const SocketContext = React.createContext(socket);

export {SocketContext, socket};