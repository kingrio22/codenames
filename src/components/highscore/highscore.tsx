import React, { useEffect, useRef } from "react";
import styles from "./highscore.module.scss";
import { GameType, usePlayers } from "../../hooks/usePlayers";
import html2canvas from "html2canvas";
import { Player } from "../../api/create-player";

interface HighscoreProps {
  gameType: GameType;
}

export const Highscore = (props: HighscoreProps) => {
  const highscoreRef = useRef();
  const { gameType } = props;

  const [players] = usePlayers(gameType);

  useEffect(() => {
    captureHighscore(highscoreRef);
  }, [highscoreRef]);

  return (
    <div className={styles.HighscoreWrapper} ref={highscoreRef.current}>
      <div className={styles.TitleWrapper}>
        <div className={styles.Cup}>
          <img src="../cup.png" className={styles.CupImage} alt="cup" />
        </div>
        <div className={styles.Title}>Highscore</div>
      </div>

      {players ? (
        players.slice(0, 10).map((player, index) => (
          <div className={styles.Player}>
            <div className={styles.Rank}>{index + 1}</div>
            <div className={styles.Name}>{player.name}</div>
            <div className={styles.Score}>
              {getHighscoreByGameType(gameType, player)}
            </div>
          </div>
        ))
      ) : (
        <span>Highscore konnte nicht geladen werden</span>
      )}
    </div>
  );
};
function captureHighscore(
  highscoreRef: React.MutableRefObject<HTMLDivElement | undefined>
) {
  if (!highscoreRef.current) {
    console.log("is null");
    return;
  }
  html2canvas(highscoreRef.current).then(function (canvas) {
    uploadImage(canvas);
  });
}
function uploadImage(data: any) {
  console.log("upload");
  let formData = new FormData(data);
  fetch("https://api.mgraetz.de/files/upload", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        alert("Plcae added successfully");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getHighscoreByGameType(gameType: GameType, player: Player): number {
  if (gameType === "POKEMON") {
    return player.highscorePokemon;
  }
  return player.highscore;
}
