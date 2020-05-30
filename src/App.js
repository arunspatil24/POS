import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <AmplifySignOut />
       My App
    </div>
  );
}

export default withAuthenticator(App);
