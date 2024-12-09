import { Level } from '../../components/levels/levels.const';
import { LevelCategory } from '../enums/levelt-category.enum';
import { RoundResult } from './round-result.dto';

export interface Round {
  id: number;
  levels: Level[];
  roundResults: RoundResult[];
  category: LevelCategory;
}
