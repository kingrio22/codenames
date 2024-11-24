import React, { Dispatch, SetStateAction } from "react";
import styles from "./start-page.module.scss";

interface StartPageProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}

export const StartPage = (props: StartPageProps) => {
  const { setIsRunning } = props;
  return (
    <div className={styles.StartPage}>
      <div className={styles.TopBar}>
        <div className={styles.Title}>Framework or Pokemon</div>
      </div>
      <div className={styles.Box}>
        <button
          onClick={() => setIsRunning(true)}
          className={styles.NewGameButton}
        >
          Start
        </button>
      </div>
    </div>
  );
};
