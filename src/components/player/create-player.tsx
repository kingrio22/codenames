import React, { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './create-player.module.scss';
import { TextField } from '@mui/material';

export const ALREADY_EXISTS = 'ALREADY_EXISTS';
export const NAME_OK = 'NAME_OK';

interface NewPlayerProps {
  showError: Dispatch<SetStateAction<string | undefined>>;
  setPlayerName: Dispatch<SetStateAction<string | undefined>>;
  playerName: string | undefined;
  error: string | undefined;
}

export const NewPlayer = (props: NewPlayerProps) => {
  const { showError, setPlayerName, playerName, error } = props;

  useEffect(() => {
    if (!playerName) {
      return;
    }
    if (playerName.length < 5) {
      showError('Mindestens 5 Zeichen');
      return;
    }
    showError(undefined);
  }, [playerName, showError]);

  return (
    <div className={styles.NewPlayerWrapper}>
      <div className={styles.Inputs}>
        <TextField
          label='Player Name'
          onChange={(e) => setPlayerName(e.currentTarget.value)}
          value={playerName}
          className={styles.TextInputCustom}
          error={!!error}
          aria-errormessage={error}
          onError={() => <span>{error}</span>}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: '#ffffff',
              fontFamily: 'Arial',
              fontWeight: 'bold',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
                borderWidth: '1px',
              },
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff',
                  borderWidth: '2px',
                },
              },
              '&:hover:not(.Mui-focused)': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff',
                },
              },
            },
            '& .MuiInputLabel-outlined': {
              color: '#ffffff',
              fontWeight: 'bold',
              '&.Mui-focused': {
                color: '#ffffff',
                fontWeight: 'bold',
              },
            },
          }}
        ></TextField>
      </div>
      <div className={styles.ErrorMessage}> {error ? error : ''}</div>
    </div>
  );
};
