import React from 'react';
import { AppContainer } from './screens/navigation';

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