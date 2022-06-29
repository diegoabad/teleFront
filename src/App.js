import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoomPage from './RoomPage/RoomPage';
import { Home } from './Home';
import './App.css';

function App() {
	return (
		<Router>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/room/:idRoom'>
				<RoomPage />
			</Route>
		</Router>
	);
}

export default App;
