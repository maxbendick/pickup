import Player from './player';
import GameType from './gametype';
import DAY_OF_WEEK from './day-of-week';

export default class Game {
   constructor(public type: GameType, public distance: number, public day: DAY_OF_WEEK, public hour: string, public notes: string, players: Array<Player>) {
   }
}