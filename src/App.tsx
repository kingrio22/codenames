import React from "react";
import "./App.css";
import { Background } from "./container/background/background";
import { Game } from "./components/game/game";

function App() {
  return (
    <div>
      <Background />
      <Game />
    </div>
  );
}

export default App;
