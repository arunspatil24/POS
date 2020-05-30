import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <AmplifySignOut />
      <div>
        Welcome to Omega POS Application
      </div>
    </div>
  );
}

export default withAuthenticator(App);
