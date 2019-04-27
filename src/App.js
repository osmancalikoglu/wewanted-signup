import React, { Component } from 'react';
import MainBox from './MainBox';
import SignUpBox from './SignUpBox';
import SingleSignUpBox from './SingleSignUpBox';

class App extends Component {
  render() {
    return (
      <>
        <SingleSignUpBox />
        <SignUpBox />
        <MainBox />
      </>
    );
  }
}

export default App;
