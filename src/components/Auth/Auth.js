import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Auth extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
		this.register = this.register.bind(this);
	}
	register(username, password) {
		const body = {username, password}
		axios.post('/api/auth/register', body)
		.then((res) => {
			this.setState({
				username: res.data,
				password: res.data
			});
		});
	}

	usernameInput(e) {
		this.setState({username: e.target.value})

	}
	passwordInput(e) {
		this.setState({password: e.target.value})

	}

	render() {
		const {username, password} = this.state
		console.log(username, password)
		return (
			<div>
				Auth
				<div className="input-boxes">
					<input onChange={(e) => this.usernameInput(e)} placeholder="Username" />
					<input onChange={(e) => this.passwordInput(e)} placeholder="Password" type="password" />
				</div>
				<div className="login-reg-btns">
					<button>Login</button>
					<button Link to="/dashboard" onClick={() => this.register(username, password)}>Register</button>
				</div>
			</div>
		);
	}
}
