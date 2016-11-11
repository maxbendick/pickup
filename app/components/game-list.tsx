import * as React from 'react';
import { Component, ListView } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Game from '../models/game';

export class GameListProps {
   public onSelect: (game: Game) => void;
}

export class GameListState {
   constructor(public dataSource: React.ListViewDataSource) {
   };
}

export default class GameList extends Component<GameListProps, GameListState> {
   constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = new GameListState(
         ds.cloneWithRows(['Basketball at CP Rec', 'Soccer at Cuesta', 'Spikeball at Dexter', 'Ultimate at the park'])
      );
  }

   render() {
      return (
         <View>
            <Text>Current Scene: Game List</Text>
            <TouchableHighlight onPress={this.props.onForward}>
               <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.onBack}>
               <Text>Tap me to go back</Text>
            </TouchableHighlight>
            <ListView
               dataSource={this.state.dataSource}
               renderRow={(rowData) => <Text>{rowData}</Text>}
            />
         </View>
      );
   }
}