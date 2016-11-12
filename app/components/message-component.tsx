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
         <View style={styles.viewComp}>
            <Text style={styles.container}>{this.props.message.content}</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#4080ff',
      color: '#ffffff',
      borderRadius: 10,
      margin: 5,
      marginRight: 5,
      marginTop: 10,
      padding: 10,
      fontSize: 22,
      maxWidth: 350
      
   } as React.ViewStyle & React.TextStyle,
   text: {
      fontSize: 10
   } as React.TextStyle,
   viewComp: {
      alignItems: 'flex-end'
   } as React.ViewStyle
});