import React, { useState } from 'react';
import './App.css';
import './fonts.css';
import { Background } from './container/background/background';
import { Game } from './components/game/game';
import { useMobile } from './hooks/useMobile';
import { Highscore } from './components/highscore/highscore';

function App() {
  const [isMobile] = useMobile();
  const [isRunning, setIsRunning] = useState<boolean>(false);

  if (isMobile) {
    return (
      <div>
        <Background />
        <div style={{ padding: '2rem' }}>
          <Highscore isRunning={isRunning} />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Background />
      <Game isRunning={isRunning} setIsRunning={setIsRunning} />
    </div>
  );
}

export default App;
