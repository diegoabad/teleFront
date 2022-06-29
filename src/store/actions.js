const Actions = {
	SET_ROOM_ID: 'SET_ROOM_ID',
	SET_TWILIO_ACCESS_TOKEN: 'SET_TWILIO_ACCESS_TOKEN',
	SET_SHOW_OVERLAY: 'SET_SHOW_OVERLAY',
	SET_PARTICIPANTS: 'SET_PARTICIPANTS',
};

export const setRoomId = (roomId) => {
	return {
		type: Actions.SET_ROOM_ID,
		roomId,
	};
};

export const setTwilioAccessToken = (token) => {
	return {
		type: Actions.SET_TWILIO_ACCESS_TOKEN,
		token,
	};
};

export const setShowOverlay = (showOverlay) => {
	return {
		type: Actions.SET_SHOW_OVERLAY,
		showOverlay,
	};
};

export const setParticipants = (participants) => {
	return {
		type: Actions.SET_PARTICIPANTS,
		participants,
	};
};

export default Actions;
