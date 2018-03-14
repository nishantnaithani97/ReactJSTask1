import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App.js'
export default class UserEmail extends Component {
    constructor() {
        super();
        this.state = {
            uEmail : ''
        }
    }
    validateEmail(e) {
        let uEmail = this.state;      
        if(e.target.value.match(/^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-z]{2,4}$/)) {
            this.setState({uEmail : e.target.value})
        }
        else {
            this.setState({uEmail : 'Invalid Input'})
        }
    }
    render() {
        console.log('Inside Email');
        const {uEmail} = this.state;
        return(
            <div>
                <input type='email' name='uemail' placeholder='Enter Your Email' onChange={this.validateEmail.bind(this)}/>
                <h2>{uEmail}</h2>
            </div>
        );
    }
}