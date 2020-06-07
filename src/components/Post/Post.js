import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Nav from "../Form/Form";

export default class Post extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Nav />
                <div>Post</div>
            </div>

        );
    }
}
