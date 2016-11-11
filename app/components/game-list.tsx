import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ListView, AppRegistry } from 'react-native';

import Game from '../models/game';


export class GameListProps {
   public onSelect: (game: Game) => void;
   public games: Array<Game>
   public newGame: () => void;
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
         <View>
            <Text>Game List</Text>
            <ListView
               dataSource={this.state.dataSource}
               renderRow={(rowData: Game) => 
                  <TouchableHighlight onPress={() => this.props.onSelect(rowData)}>
                     <Text>{rowData.type} {rowData.time}</Text>
                  </TouchableHighlight>}
            />
         </View>
      );
   }
}