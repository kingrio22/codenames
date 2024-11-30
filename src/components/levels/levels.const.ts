export interface Level {
  id: number;
  hint: string;
  correctWords: number;
  mode: "CHATGPT";
  cards: Card[];
}

export interface Card {
  word: string;
  id: string;
  isCorrect: boolean;
}
