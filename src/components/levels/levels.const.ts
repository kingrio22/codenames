export const LEVELS: Level[] = [
  {
    id: 1,
    hint: 'Kleidung',
    cards: [
      { word: 'Hose', isCorrect: true },
      { word: 'Lampe', isCorrect: false },
      { word: 'Jacke', isCorrect: true },
      { word: 'Stein', isCorrect: false },
      { word: 'Schuhe', isCorrect: true },
      { word: 'Computer', isCorrect: false },
      { word: 'Baum', isCorrect: false },
      { word: 'Katze', isCorrect: false },
      { word: 'Buch', isCorrect: false },
    ],
  },
  {
    id: 2,
    hint: 'Möbel',
    cards: [
      { word: 'Stuhl', isCorrect: true },
      { word: 'Computer', isCorrect: false },
      { word: 'Tisch', isCorrect: true },
      { word: 'Apfel', isCorrect: false },
      { word: 'Sofa', isCorrect: true },
      { word: 'Lampe', isCorrect: false },
      { word: 'Buch', isCorrect: false },
      { word: 'Baum', isCorrect: false },
      { word: 'Pizza', isCorrect: false },
    ],
  },
  {
    id: 3,
    hint: 'Wetter',
    cards: [
      { word: 'Regen', isCorrect: true },
      { word: 'Gitarre', isCorrect: false },
      { word: 'Schnee', isCorrect: true },
      { word: 'Computer', isCorrect: false },
      { word: 'Sonne', isCorrect: true },
      { word: 'Baum', isCorrect: false },
      { word: 'Pizza', isCorrect: false },
      { word: 'Hund', isCorrect: false },
      { word: 'Buch', isCorrect: false },
    ],
  },
  {
    id: 4,
    hint: 'Transport',
    cards: [
      { word: 'Auto', isCorrect: true },
      { word: 'Schlüssel', isCorrect: false },
      { word: 'Fahrrad', isCorrect: true },
      { word: 'Pizza', isCorrect: false },
      { word: 'Zug', isCorrect: true },
      { word: 'Kaffeetasse', isCorrect: false },
      { word: 'Buch', isCorrect: false },
      { word: 'Katze', isCorrect: false },
      { word: 'Lampe', isCorrect: false },
    ],
  },
  {
    id: 5,
    hint: 'Farben',
    cards: [
      { word: 'Rot', isCorrect: true },
      { word: 'Hund', isCorrect: false },
      { word: 'Blau', isCorrect: true },
      { word: 'Computer', isCorrect: false },
      { word: 'Gelb', isCorrect: true },
      { word: 'Baum', isCorrect: false },
      { word: 'Stein', isCorrect: false },
      { word: 'Apfel', isCorrect: false },
      { word: 'Katze', isCorrect: false },
    ],
  },
  {
    id: 6,
    hint: 'Musik',
    cards: [
      { word: 'Gitarre', isCorrect: true },
      { word: 'Lampe', isCorrect: false },
      { word: 'Klavier', isCorrect: true },
      { word: 'Stein', isCorrect: false },
      { word: 'Trommel', isCorrect: true },
      { word: 'Pizza', isCorrect: false },
      { word: 'Buch', isCorrect: false },
      { word: 'Auto', isCorrect: false },
      { word: 'Stuhl', isCorrect: false },
    ],
  },
  {
    id: 7,
    hint: 'Tiere',
    cards: [
      { word: 'Hund', isCorrect: true },
      { word: 'Computer', isCorrect: false },
      { word: 'Katze', isCorrect: true },
      { word: 'Haus', isCorrect: false },
      { word: 'Elefant', isCorrect: true },
      { word: 'Baum', isCorrect: false },
      { word: 'Schuhe', isCorrect: false },
      { word: 'Gitarre', isCorrect: false },
      { word: 'Buch', isCorrect: false },
    ],
  },
  {
    id: 8,
    hint: 'Essen',
    cards: [
      { word: 'Pizza', isCorrect: true },
      { word: 'Stuhl', isCorrect: false },
      { word: 'Apfel', isCorrect: true },
      { word: 'Auto', isCorrect: false },
      { word: 'Käse', isCorrect: true },
      { word: 'Lampe', isCorrect: false },
      { word: 'Schlüssel', isCorrect: false },
      { word: 'Schuhe', isCorrect: false },
      { word: 'Stein', isCorrect: false },
    ],
  },
  {
    id: 9,
    hint: 'Technologie',
    cards: [
      { word: 'Smartphone', isCorrect: true },
      { word: 'Buch', isCorrect: false },
      { word: 'Computer', isCorrect: true },
      { word: 'Apfel', isCorrect: false },
      { word: 'Internet', isCorrect: true },
      { word: 'Blume', isCorrect: false },
      { word: 'Bleistift', isCorrect: false },
      { word: 'Baum', isCorrect: false },
      { word: 'Gitarre', isCorrect: false },
    ],
  },
  {
    id: 10,
    hint: 'Natur',
    cards: [
      { word: 'Sonne', isCorrect: true },
      { word: 'Computer', isCorrect: false },
      { word: 'Baum', isCorrect: true },
      { word: 'Kaffeetasse', isCorrect: false },
      { word: 'Fluss', isCorrect: true },
      { word: 'Fahrrad', isCorrect: false },
      { word: 'Pizza', isCorrect: false },
      { word: 'Wald', isCorrect: false },
      { word: 'Lampe', isCorrect: false },
    ],
  },
];

export interface Level {
  id: number;
  hint: string;
  cards: Card[];
}

export interface Card {
  word: string;
  isCorrect: boolean;
}
