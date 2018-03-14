import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App.js';
export default class UserGender extends Component {
    constructor() {
        super();
        this.state = {gender : ''};
        this.changeGender = this.changeGender.bind(this);
    }
    changeGender(e) {
        let gender = this.state;
        this.setState({gender : e.target.value});
    }
    render() {
        const {gender} = this.state;
        console.log('Inside Gender');
        return(
            <div>
                <b>Male</b><input type='radio' name='ugen' value='Male' onChange={this.changeGender.bind(this)} /><b>Female</b><input type='radio' name='ugen' value='Female' onChange={this.changeGender.bind(this)}/>
                <h2>{gender}</h2>
            </div>
        );
    }
}