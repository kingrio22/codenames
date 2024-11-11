import { Complexity, GameMode } from "../game/game";

export interface Level {
  id: number;
  hint: string;
  complexity?: Complexity;
  correctWords: number;
  mode?: GameMode;
  cards: Card[];
}

export interface Card {
  word: string;
  id: string;
  isCorrect: boolean;
}
