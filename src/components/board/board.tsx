import React from "react";
import { Card } from "../card/card";
import styles from "./board.module.scss";

export const Board = () => {
  const CARDS: Card[] = [
    {
      value: "Baum",
      team: "A",
      open: false,
    },
    {
      value: "Strauch",
      team: "B",
      open: false,
    },
    {
      value: "Wiese",
      team: "A",
      open: false,
    },
    {
      value: "Zug",
      team: "B",
      open: false,
    },
    {
      value: "Gleis",
      team: "A",
      open: false,
    },
    {
      value: "Weg",
      team: "B",
      open: false,
    },
    {
      value: "Sitz",
      team: "A",
      open: false,
    },
    {
      value: "Lehne",
      team: "B",
      open: false,
    },
    {
      value: "fahren",
      team: "A",
      open: false,
    },
    {
      value: "vorwärts",
      team: "B",
      open: false,
    },
    {
      value: "Lok",
      team: "A",
      open: false,
    },
    {
      value: "Wagon",
      team: "B",
      open: false,
    },
    {
      value: "Haus",
      team: "A",
      open: false,
    },
    {
      value: "Scheune",
      team: "B",
      open: false,
    },
    {
      value: "Tram",
      team: "A",
      open: false,
    },
    {
      value: "Bus",
      team: "B",
      open: false,
    },
  ];
  return (
    <div className={styles.Board}>
      {CARDS.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};
