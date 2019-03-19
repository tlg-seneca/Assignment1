import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Styles from './Form.module.css';
import Storage from '../Storage/Storage';

class Form extends Component {
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
                <input
                    type="text"
                    id="name" 
                    name="name"
                    value={presentValue.name}
                    onChange={this.valueChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={Styles.button}>
                     Primary
                </Button>
                <Storage formValue={savedData.name} />
            </form>
        );
    }
}

export default Form;