

import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import Components from './components';


import { sHeight } from './services/helper';

class App extends React.Component {



  render() {
    return (
      <View style={{ flex: 1, paddingTop: sHeight, }}>
        <Components />
      </View>
    )
  }
}

export default App;
