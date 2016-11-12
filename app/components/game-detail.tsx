import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, TextInput, View, ListView, TouchableHighlight } from 'react-native';
import Game from "../models/game";
import Chat from "../models/chat";
import Message from '../models/message';
import Player from '../models/player';
import MessageComponent from './message-component';
import { APP_BAR_COLOR } from '../colors';

export class GameDetailProps {
   public game: Game;
   public chat: Chat;
   public onBack;
   public newMessage;
}

export class State {
   public dataSource;
   public message;
}

export default class GameDetail extends Component<GameDetailProps, State> {
   weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
   constructor(GameDetailProps) {
      super(GameDetailProps);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var msgs: Array<Message> = [];
      for (var i = 0; i < this.props.chat.messages.length; i++) {
         msgs[i] = this.props.chat.messages[i];
      }
      this.state = {
         dataSource: ds.cloneWithRows(msgs),
         message: ''
      };
   }

   _onBack = () => {
     var door = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     var messages = this.props.chat.messages;
     messages.push(new Message(new Player("Doug",""), this.state.message));
     this.setState ({
       dataSource: door.cloneWithRows(messages),
       message: this.state.message
     });
  }
     

   render() {
      var messageLen = this.props.chat.messages.length;
      return (
         <View style={styles.container}>
            <View style={styles.navContainer}>
               <TouchableHighlight onPress={this.props.onBack}>
                  <Image style={{height: 50, width: 50}} source={require('../../updated_icons/icon_back.png')}/>
               </TouchableHighlight>
               <Text style={styles.headerText}>{this.props.game.type.type} Game</Text>
               <TouchableHighlight>
                  <Image style={styles.moreImg} source={require('../../updated_icons/layout_sc.png')}/>
               </TouchableHighlight>
            </View>
            <View style={{height: 1, backgroundColor: '#E6E6E6'}}/>
            <Text style={styles.time}>{this.weekday[this.props.game.day]} {this.props.game.hour}</Text>
            <View style={styles.chatContainer}>
              <ListView dataSource={this.state.dataSource} renderRow={(message) => <MessageComponent message={message} />}
            />
            </View>
            <View style={{height: 1, backgroundColor: '#E6E6E6'}}/>
            <View style={styles.inputContainer}>
               <View style={styles.textContainer}>
                  <TextInput
                    style={styles.input} 
                    onChangeText={(text) => this.setState({dataSource: this.state.dataSource, message: text})}
                    blurOnSubmit={true}
                    placeholder={'Say something...'}
                  />
               </View>
               <View style={styles.sendContainer}>
                     <TouchableHighlight
                        underlayColor={APP_BAR_COLOR}
                        onPress={() => this._onBack()}
                     >
                     <Text style={styles.sendLabel}>Send</Text>
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
      backgroundColor: 'white'
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
      height: 60,
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white'
   } as React.ViewStyle,
   headerText: {
      flex: 1,
      flexDirection: 'row',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: "normal",
      color: APP_BAR_COLOR
   } as React.TextStyle,
   backBtn: {
      fontSize: 30,
      fontWeight: "bold",
      color: APP_BAR_COLOR
   } as React.TextStyle,
   time: {
      textAlign: 'center',
      fontWeight: 'normal',
      paddingTop: 5,
      fontSize: 14, 
      color: '#666666',
   } as React.TextStyle,
   moreImg: {
      width: 18,
      height: 16,
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
      color: APP_BAR_COLOR,
      fontSize: 15,
      paddingRight: 10
    } as React.TextStyle,
    input: {
      width: 270,
      color: '#000000',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      height: 32,
      alignSelf: 'center',
    } as React.TextStyle,
});