import * as React from 'react';
import { Component } from 'react';
import { AppRegistry } from 'react-native';

import Index from './dist';

export default class Pickup extends Component {
  render() {
    return <Index></Index>;
  }
}
AppRegistry.registerComponent('pickup', () => Pickup);