import React, { useState, useRef, useEffect, useContext } from "react";

import { Button, ButtonStyles } from "../../../components/Button";

import { FaArrowRight } from "react-icons/fa";

import ChatInputStyles from "./style.module.css";
import { SocketContext } from "../../../context/SocketContext";

function ChatInput(props) {
	const socket = useContext(SocketContext);

	const inputRef = useRef(null);
	const formRef = useRef(null);
	let message = ""; // nao precisa ser UseState

	const handleOnInput = (e) => {
		message = e.target.textContent;
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (message === "") return;
		socket.emit("client:message", { text: message, room: props.room });
		inputRef.current.textContent = "";
		message = inputRef.current.textContent;
	};

	useEffect(() => {
		inputRef.current.focus();

		const handleKeyDown = (e) => {
			if (e.keyCode === 13) handleOnSubmit(e);
		};

		inputRef.current.addEventListener("keydown", handleKeyDown);

		return () => {
			inputRef.current.removeEventListener("keydown", handleKeyDown);
		};
	});

	return (
		<div className={ChatInputStyles.chatInputContainer}>
			<form
				className={ChatInputStyles.chatInputForm}
				onSubmit={handleOnSubmit}
				ref={formRef}
			>
				<div
					className={ChatInputStyles.chatInputTextInput}
					ref={inputRef}
					contentEditable={true}
					placeholder="Send a message"
					onInput={(e) => {
						handleOnInput(e);
					}}
				/>
				<Button
					type={"submit"}
					className={ButtonStyles.roundButton}
					label={<FaArrowRight />}
					handleOnClick={null}
				/>
			</form>
		</div>
	);
}

export default ChatInput;
