import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router';
import routes from './routes';
import Nav from './components/Nav/Nav';
import Auth from './components/Auth/Auth'

function App() {
	const location = useLocation();
	console.log(location.pathname);
	const displayAuth = () => {
		if(location.pathname === '/') {
			return {Auth}
		}
	}
	return (

		<div className="App">
			{routes}
			<Nav />
		</div>

	
	);
}

export default App;
