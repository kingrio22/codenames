import React from 'react';

import { Background } from '../container/background/background';
import { GameWrapper } from './comps/game-wrapper/game-wrapper';

export const Pokemon = () => {
  return (
    <div>
      <GameWrapper />
      <Background />
    </div>
  );
};
