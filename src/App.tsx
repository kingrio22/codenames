import React from 'react';
import './App.css';
import { Background } from './container/background/background';
import { Board } from './components/board/board';
import { LEVELS } from './components/levels/levels.const';
import { Game } from './components/game/game';

function App() {
  return (
    <div>
      <Background />
      <Game />
    </div>
  );
}

export default App;
