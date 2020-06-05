import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <div>Nav
			<div className="buttons">
				<Link to="/dashboard">Home</Link>
				<Link to="/new">New Post</Link>
				<Link to="/">Logout</Link>

			</div>
		</div>;
	}
}
