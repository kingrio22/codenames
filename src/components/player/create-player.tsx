import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './create-player.module.scss';
import { validatePlayer } from '../../api/validate-player';
import { Player, createPlayer } from '../../api/create-player';
import { TextField } from '@mui/material';

export const ALREADY_EXISTS = 'ALREADY_EXISTS';
export const NAME_OK = 'NAME_OK';

interface NewPlayerProps {
  setPlayer: Dispatch<SetStateAction<Player | undefined>>;
}

export const NewPlayer = (props: NewPlayerProps) => {
  const { setPlayer } = props;
  const [playerName, setPlayerName] = useState<string | undefined>();
  const [error, showError] = useState<string | undefined>();

  const handleCreate = async () => {
    try {
      if (!playerName) {
        setPlayer(undefined);
        return;
      }
      const { data } = await validatePlayer(playerName);
      if (data.result === 'ALREADY_EXISTS') {
        setPlayer(undefined);
        showError('Name schon vergeben');
        return;
      }
      const { status, data: newPlayer } = await createPlayer(playerName);
      if (status === 201) {
        setPlayer(newPlayer);
        showError(undefined);
      }
    } catch (err) {
      setPlayer(undefined);
      showError('Etwas ist schief gelaufen');
    }
  };

  useEffect(() => {
    if (!playerName) {
      return;
    }
    if (playerName.length < 5) {
      showError('Mindestens 5 Zeichen');
      return;
    }
    showError(undefined);
  }, [playerName]);

  return (
    <div className={styles.NewPlayerWrapper}>
      <div className={styles.Inputs}>
        <TextField
          label='Name'
          onChange={(e) => setPlayerName(e.currentTarget.value)}
          value={playerName}
          className={styles.TextInputCustom}
        ></TextField>

        <button
          onClick={handleCreate}
          className={styles.Button}
          disabled={!!error}
        >
          Speichern
        </button>
      </div>
      {error && <div className={styles.ErrorMessage}> {error}</div>}
    </div>
  );
};
