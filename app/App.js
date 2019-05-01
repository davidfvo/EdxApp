import React from 'react';
import { AppContainer } from './navigation/navigation';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    return (
      <AppContainer />
    );
  }
}