import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './start-game-wrapper.module.scss';
import { Complexity, GameProgress } from '../game/game';
import { StartButton } from '../start-button/start-button';
import { Level } from '../levels/levels.const';
import { TextField } from '@mui/material';
import { ComplexityInput } from '../inputs/complexity-input';
import { Player } from '../../api/create-player';
import { NewPlayer } from '../player/create-player';
import { WelcomeAnimation } from '../welcome-animation/welcome-animation';
import { validateNameInput } from './functions/validate-player-name';
interface GameResultProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  player: Player | undefined;
  setPlayer: Dispatch<SetStateAction<Player | undefined>>;
  countdown: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const StartGameWrapper = (props: GameResultProps) => {
  const { setPlayer, player } = props;

  const [complexity, setComplexity] = useState<Complexity>();
  const [showCreatePlayer, setShowCreatePlayer] = useState<boolean>(false);

  return (
    <div className={styles.GameResult}>
      <div className={styles.Modal}>
        <div className={styles.ModalWrapper}>
          <div className={styles.GameOver}>Start a new Game</div>

          {!player && <SelectExistingPlayer setPlayer={setPlayer} />}

          <SinglePlayerGame
            complexity={complexity}
            setComplexity={setComplexity}
            {...props}
          />
        </div>

        <WelcomeAnimation player={player} />
      </div>
    </div>
  );
};
interface SinglePlayerGameProps {
  player: Player | undefined;
  complexity: Complexity | undefined;
  setComplexity: Dispatch<SetStateAction<Complexity | undefined>>;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  countdown: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
export const SinglePlayerGame = (props: SinglePlayerGameProps) => {
  const { player, setComplexity, complexity } = props;

  if (!player) {
    return null;
  }

  return (
    <>
      <div className={styles.Complexity}>
        <ComplexityInput
          setComplexity={(value) => setComplexity(value as Complexity)}
          complexity={complexity}
        />
      </div>

      <div className={styles.Button}>
        <StartButton {...props} complexity={complexity} />
      </div>
    </>
  );
};
interface CreatePlayerProps {
  setPlayer: Dispatch<SetStateAction<Player | undefined>>;
}
export const CreatePlayer = (props: CreatePlayerProps) => {
  const { setPlayer } = props;
  return (
    <div
      className={styles.PlayerNameInput}
      style={{
        transform: 'rotate(3deg) translateX(-3%) translateY(-5%)',
      }}
    >
      <div className={styles.InputTitle}>Create new player</div>
      <NewPlayer setPlayer={setPlayer} />
    </div>
  );
};

interface SelectPlayerProps {
  setPlayer: Dispatch<SetStateAction<Player | undefined>>;
}

export const SelectExistingPlayer = (props: SelectPlayerProps) => {
  const { setPlayer } = props;
  const [name, setName] = useState<string>('');
  const [errorMessage, showError] = useState<string | undefined>();
  return (
    <div className={styles.PlayerWrapper}>
      <div
        className={styles.PlayerNameInput}
        style={{
          transform: 'rotate(-2deg) translateX(3%) translateY(5%)',
        }}
      >
        <div className={styles.InputTitle}>Select existing Player</div>
        <TextField
          label='Name'
          onChange={(e) => setName(e.currentTarget.value)}
          required={true}
          value={name}
          onBlur={() => validateNameInput(name, setPlayer, showError)}
          className={styles.TextInputCustom}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              validateNameInput(name, setPlayer, showError);
            }
          }}
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

        <div className={styles.NameError}>
          {errorMessage ? errorMessage : ''}
        </div>
      </div>
    </div>
  );
};
