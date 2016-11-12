import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableHighlight, ListView, AppRegistry, Image } from 'react-native';

import Game from '../models/game';
import { APP_BAR_COLOR } from '../colors';

import Swipeout from 'react-native-swipeout';
// var Swipeout = require('react-native-swipeout')

var styles = StyleSheet.create({
   row: {
      flex: 1, 
      height: 60,
      padding: 10,
      backgroundColor: 'white',
   },
   separator: {
      height: 1,
      width: 400,
      marginLeft: 15,
   },
   rowContainer: {
      padding: 10,
   },
   rowText: {
      marginLeft: 10
   },
   box: {
      marginLeft: 0,
      marginRight: 0,
      flex: 1,
    },
   title: {
      marginTop: 30,
      textAlign: 'center' as "auto" | "right" | "left" | "center"
   },
   headerText: {
      width: 120,
      height: 30,
      //flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      //fontSize: 30, //No longer needed due to image being used instead of text
      //fontWeight: "500",
      //color: "#FFFFFF"
   } as React.TextStyle,
   navContainer: {
      height: 70,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 15,
      alignItems: 'center',
      //flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: APP_BAR_COLOR
   } as React.ViewStyle,
   floatStyle: {
      flex: 1,
      flexDirection: 'row'
   } as React.ViewStyle,
   gameTitle: {
      marginLeft: 15,
      top: 0,
      fontSize: 16, 
      fontFamily: 'helvetica',
      fontWeight: '400' as "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
   },
   timeText: {
      marginLeft: 15,
      top: 0,
      fontSize: 12,
      fontFamily: 'helvetica', 
      color: '#666666',
      fontWeight: '400' as "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900",
      marginTop: 5
   },
   moreImg: {
      width: 25,
      height: 25
   } as React.TextStyle,
   sportIcons: {
      width: 35,
      height: 35,
      marginLeft: 5,
      alignItems: 'center'
   } as React.ImageStyle
});

export class GameListProps {
   public onSelect: (game: Game) => void;
   public games: Array<Game>
}

export class GameListState {
   constructor(public dataSource: React.ListViewDataSource) {
   };
}

export default class GameList extends Component<GameListProps, GameListState> {
   constructor(props: GameListProps) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = new GameListState(
         ds.cloneWithRows(props.games)
      );
   }

   render() {
      const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      let swipeBtns = [
         {
            text: '+',
            backgroundColor: '#8BBF50',
            onPress: () => { console.log("pressed swipe btn") }
         },
         {
            text: '...',
            backgroundColor: '#617E8A',
            onPress: () => { console.log("pressed swipe btn") }
         },
         {
            text: 'Delete',
            backgroundColor: '#F05A36',
            onPress: () => { console.log("pressed swipe btn") }
         }
      ];
      /*<TouchableHighlight>
                  <Image style={styles.moreImg} source={require('../../images/Menu-48.png')}/>
       </TouchableHighlight>*/
      return (
         <View>
            <View style={styles.navContainer}>
               <Image source={require('../../images/goodGame_Newlogo.png')} style={styles.headerText}/>
            </View>
            <ListView
               dataSource={this.state.dataSource}
               renderSeparator={this._renderSeparator}
               renderRow={(game: Game) => 
                  <Swipeout right={swipeBtns}>
                     <TouchableHighlight underlayColor = {'#FAFAFAFA'} style={[styles.row]} onPress={() => this.props.onSelect(game)}>
                        <View style={styles.floatStyle}>
                           <Image 
                              style={styles.sportIcons}
                              source={game.type.img}
                           />
                           <View style={{flexDirection: 'column'}}>
                              <Text style={styles.gameTitle}>
                                 {game.type.type}
                              </Text>
                              <Text style={styles.timeText}>
                                 {weekday[game.day]} {game.hour}
                              </Text>
                           </View>
                        </View>
                     </TouchableHighlight>
                  </Swipeout>
               }
            />
         </View>
      );
   }

   _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: boolean) {
      return (
         <View
         key={`${sectionID}-${rowID}`}
         style={{
            height: adjacentRowHighlighted ? 4 : 1,
            backgroundColor: adjacentRowHighlighted ? '#E6E6E6' : '#E6E6E6',
         }}
         />
      );
   }
}
