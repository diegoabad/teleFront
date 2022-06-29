import Actions from './actions';

const initState = {
	roomId: null,
	twilioAccessToken: null,
	showOverlay: true,
	participants: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case Actions.SET_ROOM_ID:
			return {
				...state,
				roomId: action.roomId,
			};
		case Actions.SET_TWILIO_ACCESS_TOKEN:
			return {
				...state,
				twilioAccessToken: action.token,
			};
		case Actions.SET_SHOW_OVERLAY:
			return {
				...state,
				showOverlay: action.showOverlay,
			};
		case Actions.SET_PARTICIPANTS:
			return {
				...state,
				participants: action.participants,
			};
		default:
			return state;
	}
};

export default reducer;
