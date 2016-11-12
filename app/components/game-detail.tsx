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
                  <Image style={{height: 25, width: 25}} source={require('../../images/Back-50.png')}/>
               </TouchableHighlight>
               <Text style={styles.headerText}>{this.props.game.type.type} Game</Text>
               <TouchableHighlight>
                  <Image style={styles.moreImg} source={require('../../images/Menu-48.png')}/>
               </TouchableHighlight>
            </View>
            <Text style={styles.time}>{this.weekday[this.props.game.day]} at {this.props.game.hour}</Text>
            <View style={styles.chatContainer}>
              <ListView dataSource={this.state.dataSource} renderRow={(message) => <MessageComponent message={message} />}
            />
            </View>
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
                  underlayColor={APP_BAR_COLOR}//{'#4286f4'}//3ca5dd
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
      backgroundColor: '#EEEEEE'
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
      backgroundColor: APP_BAR_COLOR
   } as React.ViewStyle,
   headerText: {
      flex: 1,
      flexDirection: 'row',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: "bold",
      color: "#FFFFFF"
   } as React.TextStyle,
   backBtn: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#FFFFFF"
   } as React.TextStyle,
   time: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20
   } as React.TextStyle,
   moreImg: {
      width: 25,
      height: 25
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
      backgroundColor: APP_BAR_COLOR,//'#4A93CF',
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
      borderColor: APP_BAR_COLOR,//'#4A93CF',
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
    } as React.TextStyle,
});