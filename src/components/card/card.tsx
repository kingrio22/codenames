import React, { useState } from "react";
import styles from "./card.module.scss";

import ReactCardFlip from "react-card-flip";

export const Card = (props: Card) => {
  const { value, team, open } = props;

  const [isFlipped, setIsFlipped] = useState<boolean>(open);
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.Flipper} onClick={() => setIsFlipped(!isFlipped)}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className={styles.Card}>
            <div className={styles.Title}>{value}</div>
          </div>
          <div className={[styles.Card, styles[team]].join(" ")}>
            <div className={styles.Title}>{value}</div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export interface Card {
  value: string;
  team: "A" | "B";
  open: boolean;
}
