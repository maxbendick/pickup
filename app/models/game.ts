import Player from './player';
import GameType from './gametype';

export default class Game {
   constructor(public type: GameType, public distance: number, public time: number, public notes: string, players: Array<Player>) {
   }
}