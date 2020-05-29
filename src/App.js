import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div>
      <AmplifySignOut />
      &nbsp;&nbsp;&nbsp;
      <h1 class="main"> Welcome to Amplify Authentication with React Demo </h1>
    </div>
  );
}

export default withAuthenticator(App, true);
