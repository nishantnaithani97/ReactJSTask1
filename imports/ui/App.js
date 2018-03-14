import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Details from './Details.json'; 
import UserName from './Name.js'; 
import UserEmail from './Email.js';
import UserContact from './Contact.js';
import UserGender from './Gender.js';
import UserState from './State.js';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    render() {
        let firstName = this.props.ufirst;
        let lastName = this.props.ulast;
        let ugender = this.props.gender;
        let uemail = this.props.uEmail;
        let ucntct = this.props.uCntct;
        let ustate = this.props.uState;
        return (
            <div>
                <h2>Registration Form</h2>
                <hr></hr>
                <UserName />
                <UserEmail />
                <UserContact />
                <UserGender />
                <UserState />
                <input type="submit" value="Submit" name="sbt" />
            </div>
        );
    }
}
App.propTypes = {ufirst : PropTypes.string, ulast : PropTypes.string, gender : PropTypes.string, uEmail : PropTypes.string, uState : PropTypes.string, uCntct : PropTypes.number};
  
 
  

  
 
  
