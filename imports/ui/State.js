import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App.js'
export default class UserState extends Component {
    constructor() {
        super();
        this.state = {
            uState : ''
        }
    }
    validateState(e) {
        const uState = this.state;
        this.setState({uState : e.target.value});
    }
    render() {
        const {uState} = this.state;
        console.log('Inside State');
        return(
            <div>           
                <select onChange={this.validateState.bind(this)} >
                    <option>State</option>
                    <option>Delhi</option>
                    <option>Punjab</option>
                    <option>Uttar Pradesh</option>
                    <option>Jammu and Kashmir</option>
                    <option>Haryana</option>
                    <option>Maharashtra</option>
                    <option>Uttrakhand</option>
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Bengaluru</option>
                </select>
                <h2>{uState}</h2>
            </div>
        );
    }
}