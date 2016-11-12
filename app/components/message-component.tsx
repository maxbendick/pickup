import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ListView, AppRegistry } from 'react-native';

import Message from '../models/message';

export class MessageProps {
   public message: Message;
}

export default class MessageComponent extends Component<MessageProps, null> {
   render() {
      return (
         <View>
            <Text>{this.props.message.content}</Text>
         </View>
      );
   }
}