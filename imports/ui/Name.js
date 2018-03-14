import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App.js'
export default class UserName extends Component {
    constructor(){
        super();
        this.state = {
            ufirst : '',
            ulast : ''
        }
    }
    validateFirstName(e) {
        let ufirst = this.state;
        if(e.target.value.match(/^[A-Z][a-z]{4,20}$/)) {
            this.setState({ufirst : e.target.value})
        }
        else {
            this.setState({ufirst : 'Invalid Input'})
        }
        
    }
    validateLastName(e) {        
        let ulast = this.state;
        if(e.target.value.match(/^[A-Z][a-z]{4,20}$/)) {
            this.setState({ulast : e.target.value})
        }
        else {
            this.setState({ulast : 'Invalid Input'})
        }

    }
    render() {
        const {ufirst} = this.state;
        const {ulast} = this.state;
        console.log('Inside Name');
        return(
            <div>
                <input type='text' name='uFrst' placeholder='First Name' onChange={this.validateFirstName.bind(this)}/>
                <h2>{ufirst}</h2>
                <input type='text' name='uLst' placeholder='Last Name' onChange={this.validateLastName.bind(this)}/>
                <h2>{ulast}</h2>
            </div>
        );

    }
}