import React, { useState, useEffect } from 'react';
import VideoButtons from './VideoButtons';
import Videos from './Videos';
import { setRoomId } from '../../store/actions.js';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/* setRoomId(id); */
const VideoSection = () => {
	const dispatch = useDispatch();
	const { idRoom } = useParams();
	const [room, setRoom] = useState(null);
	useEffect(() => {
		if (idRoom) dispatch(setRoomId(idRoom));
	}, [idRoom]);
	return (
		<div className='video_section_container'>
			<Videos room={room} setRoom={setRoom} />
			<VideoButtons room={room} />
		</div>
	);
};

export default VideoSection;
