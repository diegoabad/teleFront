import React from 'react';
import { useHistory } from 'react-router-dom';
export const Home = () => {
	let history = useHistory();
	return (
		<div>
			<button
				onClick={() => {
					history.push('/room/1234');
				}}
			>
				hola
			</button>
		</div>
	);
};
