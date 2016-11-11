import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Game from "../models/game";

export class GameDetailProps {
   public game: Game;
   public onBack;
}

export default class GameDetail extends Component<GameDetailProps, null> {
   render() {
      let date = new Date(this.props.game.time).toUTCString();
      return (
         <View style={styles.container}>
            <Text style={styles.headerText}>Type: {this.props.game.type}</Text>
            <Text>Distance: {this.props.game.distance}</Text>
            <Text>Game Starts At: {date}</Text>
            <Text>Notes: {this.props.game.notes}</Text>
             <View style={styles.rowWrapper}>
            <TouchableHighlight onPress={this.props.onBack}>
               <Text>Tap me to go back</Text>
            </TouchableHighlight>
             </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
   } as React.ViewStyle,
   rowWrapper: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center',
      flexDirection: 'row', 
      justifyContent: 'space-around'
   } as React.ViewStyle,
   headerText: {
      flex: 1,
      flexDirection: 'row',
      color: '#333333',
      fontSize: 22,
      fontWeight: "bold"
   } as React.ViewStyle,
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
   } as React.TextStyle,
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
   } as React.TextStyle,
});