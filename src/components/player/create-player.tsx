import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './create-player.module.scss';
import { validatePlayer } from '../../api/validate-player';
import { createPlayer } from '../../api/create-player';
import { TextField } from '@mui/material';

export const ALREADY_EXISTS = 'ALREADY_EXISTS';
export const NAME_OK = 'NAME_OK';

export const NewPlayer = () => {
  const [player, setPlayer] = useState<string | undefined>();
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
      if (!player) {
        return;
      }
      const { status } = await createPlayer(player);
      if (status === 201) {
        showError(undefined);
      }
    } catch (err) {
      showError('Etwas ist schief gelaufen');
    }
  };

  useEffect(() => {
    if (!player) {
      return;
    }
    if (player.length < 5) {
      showError('Mindestens 5 Zeichen');
      return;
    }
    showError(undefined);
    validatePlayerName(player, showError);
  }, [player]);

  return (
    <div className={styles.NewPlayerWrapper}>
      <div className={styles.Inputs}>
        <TextField
          label='Name'
          onChange={(e) => setPlayer(e.currentTarget.value)}
          value={player}
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
