import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

import GameDetail, { GameDetailProps } from './components/game-detail';
import GameList, { GameListProps } from './components/game-list';
import NewGame, { NewGameProps } from './components/new-game';
import GameNotification, { GameNotificationProps } from './components/game-notification';
import Game from "./models/game";
import Player from "./models/player";
import GameType from "./models/gametype";
import DAY_OF_WEEK from "./models/day-of-week";

import Chat from './models/chat';
import Message from './models/message';

export const enum ROUTES {
   DEV_HOME, GAME_DETAIL, GAME_LIST, NEW_GAME, GAME_NOTIFICATION
}

export class IndexState {
   public games: Array<Game>;
   public selectedGame: Game;
}

const basketball = new GameType("Basketball", "basketball.png");
const baseball = new GameType("Baseball", "baseball.png");

const players = [
   new Player("Steve", ""),
   new Player("Bob", ""),
   new Player("Allison", ""),
   new Player("Nick", ""),
   new Player("Krissy", ""),
   new Player("David", "")
];

const chats = [
   new Chat([new Message(players[0], "Hello from Steve")])
];

export default class Index extends Component<null, IndexState> {
   constructor(props: null) {
      super(props);

      let games = [
         new Game(basketball, 1, DAY_OF_WEEK.MON, "7 PM", "", players, chats[0]),
         new Game(basketball, 1, DAY_OF_WEEK.MON, "8 PM", "", [players[0], players[1], players[3]], chats[0]),
         new Game(baseball, 1, DAY_OF_WEEK.MON, "7 PM", "", [players[4], players[5], players[6]], chats[0]),
         new Game(basketball, 1, DAY_OF_WEEK.TUES, "11 AM", "", [players[1], players[4], players[5]], chats[0]),
         new Game(baseball, 1, DAY_OF_WEEK.MON, "1 PM", "", [players[0], players[2], players[4], players[5]], chats[0]),
         new Game(baseball, 1, DAY_OF_WEEK.MON, "1 PM", "", players, chats[0]),
      ];

      this.state = {
         games: games,
         selectedGame: null
      }
   }

   render() {
      return (
         <Navigator
            initialRoute={{ title: 'My Initial Scene', index: ROUTES.GAME_LIST}}
            renderScene={(route, navigator) => {

               let onForward = () => {
                  const nextIndex = route.index + 1;
                  navigator.push({
                     title: 'Scene ' + nextIndex,
                     index: nextIndex
                  });
               }
               let onBack = () => {
                  if (route.index > 0) {
                     navigator.pop();
                  }
               }
               let goToScreen = (title: string, index: number) => {
                  navigator.push({title: title, index: index});
               }

               switch(route.index) {
                  case ROUTES.DEV_HOME:
                     return (
                        <View>
                           <Text>This is the Dev Homescreen</Text>
                           <TouchableHighlight onPress={() => goToScreen("Game Detail", ROUTES.GAME_DETAIL)}>
                              <Text>View Game Detail</Text>
                           </TouchableHighlight>
                           <TouchableHighlight onPress={() => goToScreen("Game List", ROUTES.GAME_LIST)}>
                              <Text>View Game List</Text>
                           </TouchableHighlight>
                           <TouchableHighlight onPress={() => goToScreen("New Game", ROUTES.NEW_GAME)}>
                              <Text>View New Game</Text>
                           </TouchableHighlight>
                           <TouchableHighlight onPress={() => goToScreen("Game Notification", ROUTES.GAME_NOTIFICATION)}>
                              <Text>View Game Notification</Text>
                           </TouchableHighlight>
                        </View>
                     );
                  case ROUTES.GAME_DETAIL:
                     return (
                        <GameDetail
                           game={this.state.selectedGame || this.state.games[0]}
                           onBack={onBack}
                           chat={this.state.selectedGame ? this.state.selectedGame.chat : this.state.games[0].chat}
                           />
                     );
                  case ROUTES.GAME_LIST:
                     return (
                        <GameList
                           onSelect={(game: Game) => {
                              this.setState({
                                 selectedGame: game,
                                 games: this.state.games
                              });
                              goToScreen("Game Detail", ROUTES.GAME_DETAIL);
                           }}
                           games={this.state.games}
                           />
                     );
                  case ROUTES.NEW_GAME:
                     return (
                        <NewGame
                           submit={(game: Game) => {
                              this.setState({
                                 selectedGame: game,
                                 games: this.state.games.concat(game)
                              });
                              goToScreen("Game Detail", ROUTES.GAME_DETAIL);
                           }}
                           onBack={onBack}
                           />
                     );
                  case ROUTES.GAME_NOTIFICATION:
                     return (
                        <GameNotification
                           onForward={onForward}
                           onBack={onBack}
                           />
                     );
               }

               /*return <GameDetail
                  game={new Game(new GameType("Basketball", "basketball.png"), 1, DAY_OF_WEEK.MON, "7 PM", "", [])}        
                  onBack={onBack}
                  />*/
               }
            }
            />
      );
   }
      /*return (
         <View style={styles.container}>
            <Text style={styles.welcome}>
               Welcome to React Native TYPESCRIPT!
            </Text>
            <Text style={styles.instructions}>
               To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
               Double tap R on your keyboard to reload,{'\n'}
               Shake or press menu button for dev menu
            </Text>
         </View>
      );
   }*/
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
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
   } as React.TextStyle
});
