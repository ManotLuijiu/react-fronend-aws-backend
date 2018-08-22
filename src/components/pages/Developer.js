import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_exports from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);

class Developer extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Developer</h1>
      </div>
    );
  }
}

export default withAuthenticator(Developer);
