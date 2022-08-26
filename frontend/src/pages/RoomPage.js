import React from "react";

import RoomForm from "../features/Room/RoomForm";
import CenterContainer from "../layout/CenterContainer";

function RoomPage(props) {
	return (
		<CenterContainer>
			<RoomForm setRoom={props.setRoom} />
		</CenterContainer>
	);
}

export default RoomPage;
