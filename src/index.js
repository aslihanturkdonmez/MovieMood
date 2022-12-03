import { View, Text } from 'react-native'
import React from 'react';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App;