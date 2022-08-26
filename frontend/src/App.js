import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { SocketContext, socket } from "./context/SocketContext";

import PrivateRoute from "./components/PrivateRoute/index.js";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import RoomPage from "./pages/RoomPage";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [room, setRoom] = useState(null);

	return (
		<SocketContext.Provider value={socket}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/login"
						element={<LoginPage setLoggedIn={setLoggedIn} />}
					/>
					<Route
						path="/room"
						element={
							<PrivateRoute
								loggedIn={loggedIn}
								element={<RoomPage setRoom={setRoom} />}
							/>
						}
					/>
					<Route
						path="/chat"
						element={
							<PrivateRoute
								loggedIn={loggedIn}
								element={<ChatPage room={room} />}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</SocketContext.Provider>
	);
}

export default App;
