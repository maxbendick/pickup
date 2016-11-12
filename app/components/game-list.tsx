import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ListView, AppRegistry, Image } from 'react-native';

import Game from '../models/game';
import { APP_BAR_COLOR } from '../colors';


var styles = StyleSheet.create({
   card: {
      flex: 1, 
      height: 75,
      padding: 10,
      margin: 2,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#d6d7da'
   } as React.TextStyle,
   box: {
      marginLeft: 0,
      marginRight: 0,
      flex: 1,
      backgroundColor: 'transparent',
    },
   title: {
      marginTop: 30,
      textAlign: 'center' as "auto" | "right" | "left" | "center"
   },
   headerText: {
     flex: 1,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: "500",
      color: "#FFFFFF"
   } as React.TextStyle,
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
   floatStyle: {
      flex: 1,
      flexDirection: 'row'
   } as React.ViewStyle,
   gameTitle: {
      marginLeft: 0,
      top: 0,
      fontSize: 18, 
      fontWeight: 'bold' as "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
   },
   timeText: {
      marginLeft: 0,
      top: 0,
      fontSize: 18, 
      marginTop: 5
   },
   moreImg: {
      width: 25,
      height: 25
   } as React.TextStyle
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
      const weekday = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
      /*<TouchableHighlight>
                  <Image style={styles.moreImg} source={require('../../images/Menu-48.png')}/>
               </TouchableHighlight>*/
      return (
         <View style={[styles.box]}>
            <View style={styles.navContainer}>
               <Text style={styles.headerText}>Good Game</Text>
            </View>
            <ListView style={{margin: 2}}
               dataSource={this.state.dataSource}
               renderRow={(game: Game) => 
                  <TouchableHighlight style={[styles.card]} onPress={() => this.props.onSelect(game)}>
                     <View style={styles.floatStyle}>
                        <Image 
                           style={{left: -10, top: -10, width: 71, height: 71, alignItems: 'stretch'}}
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
               }
            />
         </View>
      );
   }
}