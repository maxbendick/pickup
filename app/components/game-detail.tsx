import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, TextInput, View, ListView, TouchableHighlight } from 'react-native';
import Game from "../models/game";
import Chat from "../models/chat";
import Message from '../models/message';
import MessageComponent from './message-component';

export class GameDetailProps {
   public game: Game;
   public chat: Chat;
   public onBack;
}

export class State {
   public dataSource;
}

export default class GameDetail extends Component<GameDetailProps, State> {
   weekday= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
   constructor(GameDetailProps) {
      super(GameDetailProps);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var msgs: Array<Message> = [];
      for (var i = 0; i < this.props.chat.messages.length; i++) {
         msgs[i] = this.props.chat.messages[i];
      }
      this.state = {
         dataSource: ds.cloneWithRows(msgs),
      };
   }

   render() {
      var messageLen = this.props.chat.messages.length;
      return (
         <View style={styles.container}>
            <View style={styles.navContainer}>
               <TouchableHighlight onPress={this.props.onBack}>
                  <Text style={styles.backBtn}>&lt;</Text>
               </TouchableHighlight>
               <Text style={styles.headerText}>{this.props.game.type.type} Game</Text>
            </View>
            <Text>Distance: {this.props.game.distance}</Text>
            <Text>Time: {this.weekday[this.props.game.day]} at {this.props.game.hour}</Text>
            <Text>Notes: {this.props.game.notes}</Text>
            <View style={styles.chatContainer}>
            <ListView dataSource={this.state.dataSource} renderRow={(message) => <MessageComponent message={message} />}
            />
            </View>
            <View style={styles.inputContainer}>
               <View style={styles.textContainer}>
                  <TextInput
                  style={styles.input}
                  />
               </View>
               <View style={styles.sendContainer}>
                  <TouchableHighlight
                  underlayColor={'#4e4273'}
                  >
                  <Text style={styles.sendLabel}>SEND</Text>
                  </TouchableHighlight>
               </View>
            </View>
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
   chatContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch'
    } as React.ViewStyle,
   inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#FFB600',
      alignItems: 'center'
    } as React.ViewStyle,
    textContainer: {
      flex: 1,
      justifyContent: 'center'
    } as React.ViewStyle,
    sendContainer: {
      justifyContent: 'flex-end',
      paddingRight: 10
    } as React.ViewStyle,
    sendLabel: {
      color: '#ffffff',
      fontSize: 15
    } as React.TextStyle,
    input: {
      width: 270,
      color: '#000000',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      height: 32,
      borderColor: '#6E5BAA',
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
    } as React.TextStyle,
});