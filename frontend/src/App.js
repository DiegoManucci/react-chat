import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import {SocketContext, socket} from "./context/SocketContext";

import PrivateRoute from './components/PrivateRoute/index.js';
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

function App() {

	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<SocketContext.Provider value={socket}>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<LoginPage setLoggedIn={setLoggedIn}/>}/>
					<Route path='/general-chat' element={<PrivateRoute loggedIn={loggedIn} element={<ChatPage/>}/>}/>
					<Route path='/private-chat'/>
				</Routes>
			</BrowserRouter>
		</SocketContext.Provider>
	);
}

export default App;
