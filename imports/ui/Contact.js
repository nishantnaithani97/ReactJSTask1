import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App.js'
export default class UserContact extends Component {
    constructor() {
        super();
        this.state = {
            uCntct : ''
        }
    }
    validateContact(e) {
        let uCntct = this.state;
        if(e.target.value.match(/^[0-9]{10,12}$/)) {
            this.setState({uCntct : e.target.value});
        }
        else {
            this.setState({uCntct : 'Invalid Number'});
        }
    }
    render() {
        let {uCntct} = this.state;
        console.log('Inside Number');
        return(
            <div>
                <input type='text' name='unum' placeholder='Contact Number' onChange={this.validateContact.bind(this)}/>
                <h2>{uCntct}</h2>
            </div>
        );
    }
}