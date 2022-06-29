import React, { useEffect } from 'react';
import VideoSection from './VideoSection/VideoSection';
import { connect } from 'react-redux';
import { setTwilioAccessToken } from '../store/actions';
import { getTokenFromTwilio } from '../utils/twilioUtils';
import Overlay from './Overlay';

import './RoomPage.css';

const RoomPage = (props) => {
	const { identity, setTwilioAccessTokenAction, showOverlay } = props;

	useEffect(() => {
		getTokenFromTwilio(setTwilioAccessTokenAction, identity);
	}, []);

	return (
		<div className='room_container'>
			<VideoSection />
			{showOverlay && <Overlay />}
		</div>
	);
};

const mapStoreStateToProps = (state) => {
	return {
		...state,
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		setTwilioAccessTokenAction: (token) =>
			dispatch(setTwilioAccessToken(token)),
	};
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomPage);
