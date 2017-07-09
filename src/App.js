import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

// in a shared repo
const Card = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 2px 2px 9px #a0a0a0;
`;

const AppCard = Card.extend`
  margin-top: 20px;
`;

class App extends Component {

  render() {

    const Button = styled.button`
      color: white;
      background-color: blue;
      padding: 10px;
    `;

    const ButtonHollow = Button.extend`
      background-color: transparent;
    `;


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Button>Save Changes</Button>
          <ButtonHollow>Edit Profile</ButtonHollow>
        </div>
        <AppCard>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </AppCard>
      </div>
    );
  }
}

export default App;
