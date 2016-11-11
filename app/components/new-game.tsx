import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Game from "../models/game";

export class NewGameProps {
   public onBack;
   public submit: (game: Game) => void;
}

export class NewGameState {
    public game: Game;
}

//constructor(public type: string, public distance: number, public time: number, 
//public notes: string, players: Array<Player>)

export default class NewGame extends Component<NewGameProps, null> {
   render() {
      return (
         <View>
            <Text>Current Scene: New Game</Text>
            <Text>Game:  </Text>
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                //onSubmitEditing={}
            />
            <Text>Time:  </Text>
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                //onSubmitEditing={}
            />
            <Text>Place:  </Text>
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                //onSubmitEditing={}
            />
            <Text>Description:  </Text>
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                //onSubmitEditing={}
            />
            
            <TouchableHighlight onPress={this.props.onBack}>
               <Text>Tap me to go back</Text>
            </TouchableHighlight>
         </View>
      );
   }
}