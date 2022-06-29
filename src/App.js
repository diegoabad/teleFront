import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoomPage from './RoomPage/RoomPage';

import './App.css';

function App() {
	return (
		<Router>
			<Route path='/room/:idRoom'>
				<RoomPage />
			</Route>
		</Router>
	);
}

export default App;
