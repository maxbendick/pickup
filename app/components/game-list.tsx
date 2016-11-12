import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ListView, AppRegistry, Image } from 'react-native';

import Game from '../models/game';


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
      fontWeight: "bold"
   } as React.TextStyle,
   navContainer: {
      height: 70,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#4A93CF'
   } as React.ViewStyle,
   floatStyle: {
      flex: 1,
      flexDirection: 'row'
   } as React.ViewStyle
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
      return (
         <View style={[styles.box]}>
            <View style={styles.navContainer}>
               <Text style={styles.headerText}>Game List</Text>
            </View>
            <ListView 
               dataSource={this.state.dataSource}
               renderRow={(rowData: Game) => 
                  <TouchableHighlight style={[styles.card]} onPress={() => this.props.onSelect(rowData)}>
                     <View style={styles.floatStyle}>
                        <Image 
                           style={{width: 50, height: 50}}
                           //source={require(rowData.type.img)}
                           source={require('../../images/icon_football.png')}
                        />
                        <Text style={{marginLeft: 10, top: 0, fontSize: 18, fontWeight: 'bold'}}>
                           {rowData.type.type}
                        </Text>
                     </View>
                  </TouchableHighlight>
               }
            />
         </View>
      );
   }
}