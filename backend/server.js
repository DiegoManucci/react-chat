const express = require("express");
const application = express();
const socket = require("socket.io");
const cors = require("cors");

application.use(express());
application.use(cors());

const server = application.listen(
	process.env.PORT || 5000, // configura para rodar na porta definida pelo HOST caso contrario roda na 5000
	console.log("Servidor rodando on port: " + (process.env.PORT || 5000))
);

const io = socket(server, {
	// configurando cors para aceitar qualquer origem (domain, scheme, or port)
	cors: {
		origin: "*",
	},
});

/*****************************************************/

let users = [];
let rooms = [];

io.on("connection", (socket) => {
	// eventos devem ficar dentro deste metodo

	socket.emit("client:connected", { response: true });

	socket.on("client:login", (name) => {
		let user = {
			id: socket.id,
			name: name,
		};

		users.push(user);

		socket.emit("server:loginConfirmation", user);
	});

	socket.on("client:joinPrivateRoom", (code) => {
		rooms.push(code);
		socket.join(code);
		socket.emit("server:joinPrivateRoomConfirmation", code);
	});

	socket.on("client:joinGeneralRoom", () => {
		rooms.push("general");
		socket.join("general");
		socket.emit("server:joinGeneralRoomConfirmation");
	});

	socket.on("client:message", ({ text, room }) => {
		let user = getUserById(socket.id);

		if (user == null) return;

		let message = {
			id: socket.id,
			author: user.name,
			text: text,
		};

		if (room == null) {
			io.to("general").emit("server:message", message);
		} // emite o evento para todos os sockets na sala general
		else {
			io.to(room).emit("server:message", message);
		} // emite o evento para todos os sockets na sala privada
	});

	socket.on("disconnect", () => {
		let index = users.indexOf(getUserById(socket.id));
		users.splice(index, 1);
	});
});

function getUserById(id) {
	return users.find((elem) => elem.id === id);
}

// application.get('/', (req, res) => { // get básico
//     res.send('<h1>Hello world</h1>');
// });

/*******************************************/

const path = require("path");

// Serve static files from the React frontend app
application.use(express.static(path.join(__dirname, "../frontend/build")));

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
application.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});
