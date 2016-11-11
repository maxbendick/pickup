import Player from './player';

export default class Game {
   constructor(public type: string, public distance: number, public time: number, public notes: string, players: Array<Player>) {
   }
}