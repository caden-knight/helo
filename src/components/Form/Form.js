import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Nav from "../Nav/Nav";

export default class Form extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Nav />
				<div>Form</div>
			</div>
		);
	}
}
