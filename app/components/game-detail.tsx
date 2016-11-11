import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export class GameDetailProps {
   public game;
   public onForward;
   public onBack;
}

export default class GameDetail extends Component<GameDetailProps, null> {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.headerText}>Current Scene: {this.props.gameName}</Text>
             <View style={styles.headerContainer}>
            <TouchableHighlight onPress={this.props.onForward}>
               <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>
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
   headerContainer: {
      flex: 1,
      height: 70,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 15,
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