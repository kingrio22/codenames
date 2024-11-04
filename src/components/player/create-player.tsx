import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './create-player.module.scss';
import { validatePlayer } from '../../api/validate-player';
import { createPlayer } from '../../api/create-player';

interface NewPlayerProps {
  setShowNewPlayer: Dispatch<SetStateAction<boolean>>;
}
export const ALREADY_EXISTS = 'ALREADY_EXISTS';
export const NAME_OK = 'NAME_OK';

export const NewPlayer = (props: NewPlayerProps) => {
  const { setShowNewPlayer } = props;

  const [player, setPlayer] = useState<string>('');
  const [error, showError] = useState<string | undefined>();

  const validatePlayerName = async (
    player: string,
    showError: Dispatch<SetStateAction<string | undefined>>
  ) => {
    const { data } = await validatePlayer(player);

    if (data.result === 'ALREADY_EXISTS') {
      showError('Name schon vergeben');
    } else {
      showError(undefined);
    }
  };
  const handleCreate = async () => {
    try {
      const { status } = await createPlayer(player);
      if (status === 201) {
        setShowNewPlayer(false);
        showError(undefined);
      }
    } catch (err) {
      showError('Etwas ist schief gelaufen');
    }
  };

  useEffect(() => {
    if (player.length < 5) {
      showError('Mindestens 5 Zeichen');
      return;
    }
    showError(undefined);
    validatePlayerName(player, showError);
  }, [player]);

  return (
    <div className={styles.NewPlayer}>
      <div className={styles.Title}>Neuen Spieler erstellen</div>
      <div className={styles.Inputs}>
        <label htmlFor='player'>Nickname: </label>
        <input
          onChange={(e) => setPlayer(e.currentTarget.value)}
          type='text'
          value={player}
        />
      </div>
      <button
        onClick={handleCreate}
        className={styles.Button}
        disabled={!!error}
      >
        Speichern
      </button>
      <button onClick={() => setShowNewPlayer(false)} className={styles.Button}>
        Abbrechen
      </button>
      {error && <div className={styles.ErrorMessage}> {error}</div>}
    </div>
  );
};
