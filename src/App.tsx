import React, { useState } from 'react';
import './App.css';
import { Background } from './container/background/background';
import { Board } from './components/board/board';
import { LEVELS } from './components/levels/levels.const';
import { Game } from './components/game/game';

function App() {
  const [showCreate, setShowCreate] = useState<boolean | undefined>();
  return (
    <div>
      <Background />
      <Game setShowCreateModal={setShowCreate} showCreate={showCreate} />
    </div>
  );
}

export default App;
