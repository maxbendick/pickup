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
            <View style={styles.navContainer}>
               <TouchableHighlight onPress={this.props.onBack}>
                  <Text style={styles.backBtn}>←</Text>
               </TouchableHighlight>
               <Text style={styles.headerText}>{this.props.game.type} Game</Text>
            </View>
            <Text>Distance: {this.props.game.distance}</Text>
            <Text>Game Starts At: {date}</Text>
            <Text>Notes: {this.props.game.notes}</Text>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
   } as React.ViewStyle,
   rowWrapper: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      alignItems: 'center',
      flexDirection: 'row', 
      justifyContent: 'space-around'
   } as React.ViewStyle,
   navContainer: {
      height: 70,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#FFB600'
   } as React.ViewStyle,
   headerText: {
      flex: 1,
      flexDirection: 'row',
      textAlign: 'center',
      color: '#333333',
      fontSize: 22,
      fontWeight: "bold"
   } as React.TextStyle,
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
   } as React.TextStyle,
   backBtn: {
      fontSize: 30
   } as React.TextStyle,
});