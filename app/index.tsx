import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import GameDetail, { GameDetailProps } from './components/game-detail';
import GameList, { GameListProps } from './components/game-list';

export default class Index extends Component<null, null> {
   render() {
      return (
         <Navigator
            initialRoute={{ title: 'My Initial Scene', index: 0 }}
            renderScene={(route, navigator) =>
               <GameDetail
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
