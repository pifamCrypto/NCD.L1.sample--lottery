import { GameInfo } from "./models";

@nearBindgen
export class NumbersGame {

  get_current_game() : GameInfo {
    return new GameInfo();
  }
}