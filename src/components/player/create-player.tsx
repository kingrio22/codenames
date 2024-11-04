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
  const handleCrate = async () => {
    const { status } = await createPlayer(player);
    if (status === 201) {
      setShowNewPlayer(false);
      showError(undefined);
    }
  };

  useEffect(() => {
    if (player.length < 5) {
      return;
    }
    validatePlayerName(player, showError);
  }, [player]);

  console.log('error; ', error);
  console.log('!: ', !error);
  console.log('!!: ', !!error);
  console.log('!!!: ', !!!error);

  return (
    <div className={styles.NewPlayer}>
      <div className={styles.Title}>Neuen Spieler erstellen</div>
      <div className={styles.Inputs}>
        <label htmlFor='player'>Nickname: </label>
        <input onChange={(e) => setPlayer(e.currentTarget.value)} type='text' />
      </div>
      <button
        onClick={handleCrate}
        className={styles.Button}
        disabled={!!error}
      >
        Speichern
      </button>
      <button
        onClick={() => setShowNewPlayer(false)}
        className={styles.Button}
        disabled={!!error}
      >
        Abbrechen
      </button>
      {error && <div className={styles.ErrorMessage}> {error}</div>}
    </div>
  );
};
