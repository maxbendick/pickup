import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

import GameDetail, { GameDetailProps } from './components/game-detail';
import GameList, { GameListProps } from './components/game-list';
import NewGame, { NewGameProps } from './components/new-game';
import GameNotification, { GameNotificationProps } from './components/game-notification';
import Game from "./models/game";

export const enum ROUTES {
   DEV_HOME, GAME_DETAIL, GAME_LIST, NEW_GAME, GAME_NOTIFICATION
}

export default class Index extends Component<null, null> {
   render() {
      return (
         <Navigator
            initialRoute={{ title: 'My Initial Scene', index: ROUTES.DEV_HOME}}
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
                           game={new Game("Basketball", 1, 1, "", [])}
                           onForward={onForward}
                           onBack={onBack}
                           />
                     );
                  case ROUTES.GAME_LIST:
                     return (
                        <GameList
                           onSelect={(game: Game) => {}}
                           games={[]}
                           />
                     );
                  case ROUTES.NEW_GAME:
                     return (
                        <NewGame
                           onForward={onForward}
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

               return <GameDetail
                  game={new Game("Basketball", 1, 1, "", [])}        
                  onForward={onForward}
                  onBack={onBack}
                  />
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
