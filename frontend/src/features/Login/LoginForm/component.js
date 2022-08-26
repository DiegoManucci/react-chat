import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SocketContext } from "../../../context/SocketContext";

import { Button } from "../../../components/Button";
import { ButtonStyles } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { InputStyles } from "../../../components/Input";
import { Form } from "../../../components/Form";
import { FormStyles } from "../../../components/Form";

function LoginForm(props) {
	const socket = useContext(SocketContext);
	const navigate = useNavigate();

	let name = "";

	useEffect(() => {
		socket.on("server:loginConfirmation", (user) => {
			props.setLoggedIn(true);
			navigate("/room");
		});
	});

	return (
		<Form
			className={FormStyles.RectangleForm}
			label={"Login"}
			handleOnSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<Input
				className={InputStyles.rectangleInput}
				type={"text"}
				placeholder={"Insert Name"}
				focus={true}
				handleOnChange={(e) => {
					name = e.target.value;
				}}
			/>
			<Button
				type={"submit"}
				className={ButtonStyles.rectangleButton}
				label={"Login"}
				handleOnClick={() => {
					socket.emit("client:login", name);
				}}
			/>
		</Form>
	);
}

export default LoginForm;
