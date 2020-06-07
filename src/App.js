import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router';
import routes from './routes';
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
		</div>

	
	);
}

export default App;
