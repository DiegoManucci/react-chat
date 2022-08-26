import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SocketContext } from "../../../context/SocketContext";

import { FaArrowLeft } from "react-icons/fa";

import { Button } from "../../../components/Button";
import { ButtonStyles } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { InputStyles } from "../../../components/Input";
import { Form } from "../../../components/Form";
import { FormStyles } from "../../../components/Form";

function RoomForm(props) {
	const [showPrivateRoomMenu, setShowPrivateRoomMenu] = useState(false);

	const socket = useContext(SocketContext);
	const navigate = useNavigate();

	let code = "";

	useEffect(() => {
		socket.on("server:joinPrivateRoomConfirmation", (code) => {
			props.setRoom(code);
			navigate("/chat");
		});
		socket.on("server:joinGeneralRoomConfirmation", () => {
			console.log("HELLO");
			props.setRoom("general");
			navigate("/chat");
		});
	});

	return (
		<Form
			className={FormStyles.RectangleForm}
			label={"Room"}
			handleOnSubmit={(e) => {
				e.preventDefault();
			}}
		>
			{!showPrivateRoomMenu && (
				<>
					<Button
						type={"button"}
						className={ButtonStyles.rectangleButton}
						label={"Join Private Room"}
						handleOnClick={(e) => {
							setShowPrivateRoomMenu(true);
						}}
					/>
					<Button
						type={"button"}
						className={ButtonStyles.rectangleButton}
						label={"Join General Room"}
						handleOnClick={(e) => {
							socket.emit("client:joinGeneralRoom");
						}}
					/>
				</>
			)}
			{showPrivateRoomMenu && (
				<>
					<Button
						type={"button"}
						className={ButtonStyles.roundButton}
						label={<FaArrowLeft />}
						handleOnClick={(e) => {
							setShowPrivateRoomMenu(false);
						}}
					/>
					<Input
						className={InputStyles.rectangleInput}
						type={"number"}
						placeholder={"Room Code"}
						handleOnChange={(e) => {
							code = e.target.value;
						}}
						focus={true}
					/>
					<Button
						type={"submit"}
						className={ButtonStyles.rectangleButton}
						label={"Join Private Room"}
						handleOnClick={(e) => {
							socket.emit("client:joinPrivateRoom", code);
						}}
					/>
				</>
			)}
		</Form>
	);
}

export default RoomForm;
