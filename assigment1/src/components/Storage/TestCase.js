// TestCase to capture props
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Storage from "./Test2";

class TestCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presentValue: {
                name: '',
            },
            savedData: {
                name: '',
            }
        };
        this.valueSubmit = this.valueSubmit.bind(this);
        this.valueChange = this.valueChange.bind(this);
    }

    valueChange(event) {
        this.setState({
            presentValue: {
                name: event.target.value,
            },
        });
    }

    valueSubmit(event) {
        event.preventDefault();
        const { presentValue } = this.state;
        this.setState({
            savedData: presentValue,
        });
    }

    render() {
        const { presentValue, savedData } = this.state;
        return (
            <form onSubmit={this.valueSubmit}>
                <label for="name">Name:</label>
                <input
                    type="text"
                    id="name" 
                    name="name"
                    value={presentValue.name}
                    onChange={this.valueChange}
                />
                <button type="submit">Submit</button>
                <p>Saved Name: {savedData.name}</p>
                <Storage onGreet={savedData.name}/>
            </form>
        );
    }
}

export default TestCase;