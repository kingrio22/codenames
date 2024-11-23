export interface PokemonLevel {
  name: string;
  type: PokemonLevelType;
  id: number;
}

export type PokemonLevelType = 'FRAMEWORK' | 'POKEMON';
