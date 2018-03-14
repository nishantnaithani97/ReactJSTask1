import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.js';
import UserName from '../imports/ui/Name.js'; 
import UserEmail from '../imports/ui/Email.js';
import UserContact from '../imports/ui/Contact.js';
import UserGender from '../imports/ui/Gender.js';
import UserState from '../imports/ui/State.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('target'));
});