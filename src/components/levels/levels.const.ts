import { Complexity, GameMode } from "../game/game";

export const LEVELS: Level[] = [
  {
    id: 111111,
    hint: "Kleidung",
    correctWords: 3,
    cards: [
      { id: "1", word: "Hose", isCorrect: true },
      { id: "2", word: "Lampe", isCorrect: false },
      { id: "3", word: "Jacke", isCorrect: true },
      { id: "4", word: "Stein", isCorrect: false },
      { id: "5", word: "Schuhe", isCorrect: true },
      { id: "6", word: "Computer", isCorrect: false },
      { id: "7", word: "Baum", isCorrect: false },
      { id: "8", word: "Katze", isCorrect: false },
      { id: "9", word: "Buch", isCorrect: false },
    ],
  },
  {
    id: 222222,
    hint: "Möbel",
    correctWords: 3,
    cards: [
      { id: "10", word: "Stuhl", isCorrect: true },
      { id: "11", word: "Computer", isCorrect: false },
      { id: "12", word: "Tisch", isCorrect: true },
      { id: "13", word: "Apfel", isCorrect: false },
      { id: "14", word: "Sofa", isCorrect: true },
      { id: "15", word: "Lampe", isCorrect: false },
      { id: "1662", word: "Buch", isCorrect: false },
      { id: "17", word: "Baum", isCorrect: false },
      { id: "18", word: "Pizza", isCorrect: false },
    ],
  },
  {
    id: 333333,
    hint: "Wetter",
    correctWords: 3,
    cards: [
      { id: "111", word: "Regen", isCorrect: true },
      { id: "122", word: "Gitarre", isCorrect: false },
      { id: "133", word: "Schnee", isCorrect: true },
      { id: "144", word: "Computer", isCorrect: false },
      { id: "155", word: "Sonne", isCorrect: true },
      { id: "166", word: "Baum", isCorrect: false },
      { id: "177", word: "Pizza", isCorrect: false },
      { id: "188", word: "Hund", isCorrect: false },
      { id: "199", word: "Buch", isCorrect: false },
    ],
  },
  {
    id: 444444,
    hint: "Transport",
    correctWords: 3,
    cards: [
      { id: "31", word: "Auto", isCorrect: true },
      { id: "32", word: "Schlüssel", isCorrect: false },
      { id: "33", word: "Fahrrad", isCorrect: true },
      { id: "34", word: "Pizza", isCorrect: false },
      { id: "35", word: "Zug", isCorrect: true },
      { id: "36", word: "Kaffeetasse", isCorrect: false },
      { id: "37", word: "Buch", isCorrect: false },
      { id: "38", word: "Katze", isCorrect: false },
      { id: "39", word: "Lampe", isCorrect: false },
    ],
  },
  {
    id: 555555,
    hint: "Farben",
    correctWords: 3,
    cards: [
      { id: "41", word: "Rot", isCorrect: true },
      { id: "42", word: "Hund", isCorrect: false },
      { id: "43", word: "Blau", isCorrect: true },
      { id: "44", word: "Computer", isCorrect: false },
      { id: "45", word: "Gelb", isCorrect: true },
      { id: "46", word: "Baum", isCorrect: false },
      { id: "47", word: "Stein", isCorrect: false },
      { id: "48", word: "Apfel", isCorrect: false },
      { id: "49", word: "Katze", isCorrect: false },
    ],
  },
  {
    id: 777777,
    hint: "Musik",
    correctWords: 3,
    cards: [
      { id: "51", word: "Gitarre", isCorrect: true },
      { id: "52", word: "Lampe", isCorrect: false },
      { id: "53", word: "Klavier", isCorrect: true },
      { id: "54", word: "Stein", isCorrect: false },
      { id: "55", word: "Trommel", isCorrect: true },
      { id: "56", word: "Pizza", isCorrect: false },
      { id: "57", word: "Buch", isCorrect: false },
      { id: "58", word: "Auto", isCorrect: false },
      { id: "59", word: "Stuhl", isCorrect: false },
    ],
  },
  {
    id: 888888,
    hint: "Tiere",
    correctWords: 3,
    cards: [
      { id: "62", word: "Hund", isCorrect: true },
      { id: "63", word: "Computer", isCorrect: false },
      { id: "64", word: "Katze", isCorrect: true },
      { id: "65", word: "Haus", isCorrect: false },
      { id: "66", word: "Elefant", isCorrect: true },
      { id: "67", word: "Baum", isCorrect: false },
      { id: "68", word: "Schuhe", isCorrect: false },
      { id: "69", word: "Gitarre", isCorrect: false },
      { id: "70", word: "Buch", isCorrect: false },
    ],
  },
  {
    id: 9999999,
    hint: "Essen",
    correctWords: 3,
    cards: [
      { id: "772", word: "Pizza", isCorrect: true },
      { id: "773", word: "Stuhl", isCorrect: false },
      { id: "774", word: "Apfel", isCorrect: true },
      { id: "775", word: "Auto", isCorrect: false },
      { id: "776", word: "Käse", isCorrect: true },
      { id: "777", word: "Lampe", isCorrect: false },
      { id: "778", word: "Schlüssel", isCorrect: false },
      { id: "779", word: "Schuhe", isCorrect: false },
      { id: "7700", word: "Stein", isCorrect: false },
    ],
  },
  {
    id: 987654,
    hint: "Technologie",
    correctWords: 3,
    cards: [
      { id: "4413", word: "Smartphone", isCorrect: true },
      { id: "4414", word: "Buch", isCorrect: false },
      { id: "4415", word: "Computer", isCorrect: true },
      { id: "4416", word: "Apfel", isCorrect: false },
      { id: "4417", word: "Internet", isCorrect: true },
      { id: "44188", word: "Blume", isCorrect: false },
      { id: "4419", word: "Bleistift", isCorrect: false },
      { id: "44165", word: "Baum", isCorrect: false },
      { id: "441422", word: "Gitarre", isCorrect: false },
    ],
  },
  {
    id: 76545678,
    hint: "Natur",
    correctWords: 3,
    cards: [
      { id: "2252315", word: "Sonne", isCorrect: true },
      { id: "2252314", word: "Computer", isCorrect: false },
      { id: "225213", word: "Baum", isCorrect: true },
      { id: "2252312", word: "Kaffeetasse", isCorrect: false },
      { id: "2252311", word: "Fluss", isCorrect: true },
      { id: "2256", word: "Fahrrad", isCorrect: false },
      { id: "2252365", word: "Pizza", isCorrect: false },
      { id: "2254315", word: "Wald", isCorrect: false },
      { id: "22315", word: "Lampe", isCorrect: false },
    ],
  },
  {
    id: 2111,
    complexity: "MIDDLE",
    hint: "Programming Languages",
    correctWords: 3,
    cards: [
      {
        id: "1112",
        word: "Java",
        isCorrect: true,
      },
      {
        id: "111222",
        word: "Python",
        isCorrect: true,
      },
      {
        id: "111121234",
        word: "HTML",
        isCorrect: false,
      },
      {
        id: "111534344",
        word: "JavaScript",
        isCorrect: true,
      },
      {
        id: "13311",
        word: "MySQL",
        isCorrect: false,
      },
      {
        id: "12145111",
        word: "Swift",
        isCorrect: false,
      },
      {
        id: "4444429876",
        word: "React",
        isCorrect: false,
      },
      {
        id: "asdfasdfasdfasf",
        word: "HTTP",
        isCorrect: false,
      },
      {
        id: "2323efsf",
        word: "CSS",
        isCorrect: false,
      },
    ],
  },
];

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
