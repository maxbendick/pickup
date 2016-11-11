import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight } from 'react-native';

import GameDetail, { GameDetailProps } from './components/game-detail';
import GameList, { GameListProps } from './components/game-list';
import NewGame, { NewGameProps } from './components/new-game';
import GameNotification, { GameNotificationProps } from './components/game-notification';

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
                     index: nextIndex,
                  });
               }
               let onBack = () => {
                  if (route.index > 0) {
                     navigator.pop();
                  }
               }
               let goTo = (title: string, index: number) => {
                  navigator.push({title: title, index: index});
               }

               switch(route.index) {
                  case ROUTES.DEV_HOME:
                     return (
                        <View>
                           <Text>This is the Dev Homescreen</Text>
                           <TouchableHighlight onPress={() =>  goTo("Game Detail", ROUTES.GAME_DETAIL)}>
                              <Text>View Game Detail</Text>
                           </TouchableHighlight>
                           <TouchableHighlight onPress={() => goTo("Game List", ROUTES.GAME_LIST)}>
                              <Text>View Game List</Text>
                           </TouchableHighlight>
                           <TouchableHighlight onPress={() => goTo("New Game", ROUTES.NEW_GAME)}>
                              <Text>View New Game</Text>
                           </TouchableHighlight>
                           <TouchableHighlight onPress={() => goTo("Game Notification", ROUTES.GAME_NOTIFICATION)}>
                              <Text>View Game Notification</Text>
                           </TouchableHighlight>
                        </View>
                     );
                  case ROUTES.GAME_DETAIL:
                     return (
                        <GameDetail
                           gameName={route.title}       
                           onForward={onForward}
                           onBack={onBack}
                           />
                     );
                  case ROUTES.GAME_LIST:
                     return (
                        <GameList      
                           onForward={onForward}
                           onBack={onBack}
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
                  gameName={route.title}

                  // Function to call when a new scene should be displayed           
                  onForward={() => {
                     const nextIndex = route.index + 1;
                     navigator.push({
                        title: 'Scene ' + nextIndex,
                        index: nextIndex,
                     });
                  } }

                  // Function to call to go back to the previous scene
                  onBack={() => {
                     if (route.index > 0) {
                        navigator.pop();
                     }
                  } }
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
