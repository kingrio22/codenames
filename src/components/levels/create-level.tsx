import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./create-level.module.scss";
import { v1 } from "uuid";
import { Card, Level } from "./levels.const";
import { ComplexityInput } from "../inputs/complexity-input";
import { Complexity, GameMode } from "../game/game";
import { GameModeInput } from "../inputs/game-mode.input";
import { CardInput } from "../inputs/card-input";
import { createLevel } from "../../api/create-level.api";

interface CreateLevelProps {
  showCreateLevelModal: Dispatch<SetStateAction<boolean>>;
}

export type CreateLevelDto = Omit<Level, "id">;

export const CreateLevelComponent = (props: CreateLevelProps) => {
  const { showCreateLevelModal } = props;
  const [newLevel, setNewLevel] = useState<CreateLevelDto>({
    hint: "",
    mode: "INTERHYP",
    complexity: "LOW",
    cards: [],
  });
  const [newCards, setNewCards] = useState<Card[]>(
    new Array(9)
      .fill({})
      .map((_card) => ({ id: v1(), word: "", isCorrect: false }))
  );

  const setProps = (prop: keyof CreateLevelDto, value: string) => {
    setNewLevel((level) => {
      return {
        ...level,
        [prop]: value,
      };
    });
  };

  return (
    <div>
      <div className={styles.Title}>Neues Level erstellen</div>
      <form
        onSubmit={() => {
          console.log("level: ", newLevel);
          createLevel({ ...newLevel, cards: newCards });
          showCreateLevelModal(false);
        }}
        className={styles.CreateWrapper}
      >
        <div className={styles.BaseInfo}>
          <div className={styles.Hint}>
            <label htmlFor="hint">Hinweis Wort: </label>
            <input
              type="text"
              id="hint"
              onChange={(e) => setProps("hint", e.currentTarget.value)}
              value={newLevel["hint"] ?? ""}
            />
          </div>
          <div className={styles.Complexity}>
            <ComplexityInput
              complexity={(newLevel["complexity"] as Complexity) ?? "LOW"}
              setComplexity={(value) => setProps("complexity", value)}
            />
          </div>

          <div className={styles.Mode}>
            <GameModeInput
              mode={(newLevel["mode"] as GameMode) ?? "INTERHYP"}
              setMode={(value) => setProps("complexity", value)}
            />
          </div>
        </div>
        <div className={styles.CardsWrapper}>
          <div className={styles.CardTitle}>Karten erstellen</div>
          <div className={styles.CardHint}>
            Es können maximal 3 Karten richtig sein
          </div>
          <div className={styles.CardsCluster}>
            {newCards.map((card) => {
              return (
                <CardInput
                  card={card}
                  setValue={(value) =>
                    setNewCards((cards) => {
                      if (
                        cards.filter((c) => c.isCorrect).length === 3 &&
                        value.isCorrect === true
                      ) {
                        return cards;
                      }
                      const relatedIndex = cards.findIndex(
                        (c) => c.id === value.id
                      );
                      const udpatedCard = {
                        id: value.id,
                        isCorrect: value.isCorrect,
                        word: value.word,
                      };
                      const updatedCards = [...cards];
                      updatedCards[relatedIndex] = udpatedCard;
                      return updatedCards;
                    })
                  }
                />
              );
            })}
          </div>
        </div>
        <div className={styles.ButtonWrapper}>
          <button className={styles.Button} type="submit">
            Level erstellen
          </button>
          <button
            className={styles.Button}
            onClick={() => showCreateLevelModal(false)}
          >
            Abbrechen
          </button>
        </div>
      </form>
    </div>
  );
};
