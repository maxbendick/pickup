import Player from './player';

export default class Message {
   constructor(public player: Player, public content: string) {
   }
}