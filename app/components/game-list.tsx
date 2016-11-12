import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ListView, AppRegistry } from 'react-native';
import { Card, Button, RaisedButton } from 'react-native-material-design';

import Game from '../models/game';


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
         <View>
            <Text>Game List</Text>
            <ListView
               dataSource={this.state.dataSource}
               renderRow={(rowData: Game) => 
                  <TouchableHighlight onPress={() => this.props.onSelect(rowData)}>
                     <Card>
                     <RaisedButton label="Default" />
                     <Card.Body>
                        <Text>{rowData.type}</Text>
                     </Card.Body>
                     <Card.Actions position="right">
                        <Button value="BUTTON" />
                     </Card.Actions>
                     </Card>
                  </TouchableHighlight>
               }
            />
         </View>
      );
   }
}