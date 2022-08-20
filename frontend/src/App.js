import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/index.js';
import Layout from './feature/Layout/index.js';
import Login from './feature/Login/index.js';
import Chat from './feature/Chat/index.js';

const socket = io(process.env.REACT_APP_BACKEND_URL, {
	cors: {
        origin: "*",
    }
}); // Deixar fora do App caso contrario efetua multiplas requisicoes

function App() {

	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout socket={socket} setLoggedIn={setLoggedIn}/>}>
					<Route path='login' element={<Login socket={socket} setUser={setUser}/>}/>
					<Route path='general-chat' element={<PrivateRoute loggedIn={loggedIn} element={<Chat socket={socket}/>}/>}/>
					<Route path='private-chat'/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
