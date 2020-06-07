import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Nav from '../Nav/Nav';

export default class Dashboard extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div>Dashboard</div>
				<Nav />
			</div>
		);
	}
}
