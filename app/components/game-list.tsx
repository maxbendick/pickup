import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export class GameListProps {
   public onForward;
   public onBack;
}

export default class GameList extends Component<GameListProps, null> {
   render() {
      return (
         <View>
            <Text>Current Scene: Game List</Text>
            <TouchableHighlight onPress={this.props.onForward}>
               <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.onBack}>
               <Text>Tap me to go back</Text>
            </TouchableHighlight>
         </View>
      );
   }
}