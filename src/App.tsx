import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Background } from "./container/background/background";
import { Board } from "./components/board/board";

function App() {
  return (
    <div>
      <Background />
      <Board />
    </div>
  );
}

export default App;
