import React, { useState } from "react";
import "./App.css";
import "./fonts.css";
import { Background } from "./container/background/background";
import { Game } from "./components/game/game";
import { useMobile } from "./hooks/useMobile";
import { Highscore } from "./components/highscore/highscore";

function App() {
  const [isMobile] = useMobile();
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const socket = new WebSocket("wss://api.mgraetz.de:4000");

  socket.addEventListener("message", (event) => {
    alert(`Received message: ${event.toString()}`);
  });
  socket.addEventListener("open", () => {
    alert("Connected to the Chat!");
  });

  if (isMobile) {
    return (
      <div>
        <Background />
        <div style={{ padding: "2rem" }}>
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
