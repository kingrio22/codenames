import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './start-game-wrapper.module.scss';
import { Complexity, GameProgress } from '../game/game';
import { StartButton } from '../start-button/start-button';
import { Level } from '../levels/levels.const';
import { TextField } from '@mui/material';
import { ComplexityInput } from '../inputs/complexity-input';
import { Player, createPlayer } from '../../api/create-player';
import { NewPlayer } from '../player/create-player';
import { WelcomeAnimation } from '../welcome-animation/welcome-animation';
import { validateNameInput } from './functions/validate-player-name';
import { validatePlayer } from '../../api/validate-player';
import { ChoosePlayerIcon } from '../choose-player-icon/choose-player-icon';
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

  const title = showCreatePlayer ? 'Create Player' : 'Start a new Game';

  return (
    <div className={styles.GameResult}>
      <div className={styles.Modal}>
        <div className={styles.ModalWrapper}>
          <div className={styles.GameOver}>{title}</div>
          {!player && !showCreatePlayer && (
            <SelectExistingPlayer setPlayer={setPlayer} />
          )}

          {!showCreatePlayer && (
            <SinglePlayerGame
              complexity={complexity}
              setComplexity={setComplexity}
              {...props}
            />
          )}
          {!showCreatePlayer && (
            <button
              className={styles.CreatePlayerButton}
              onClick={() => setShowCreatePlayer(true)}
            >
              Create Player
            </button>
          )}

          {showCreatePlayer && <CreatePlayer setPlayer={setPlayer} />}
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
      <div className={styles.GameOver}>Start a new Game</div>
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
  const [error, showError] = useState<string | undefined>();
  const [playerName, setPlayerName] = useState<string | undefined>();
  const [playerIcon, setPlayerIcon] = useState<string | undefined>();
  const { setPlayer } = props;
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
  return (
    <div className={styles.InputsWrapper}>
      <div className={styles.NewPlayerInput}>
        <div className={styles.InputTitle}>Select Name</div>
        <NewPlayer
          setPlayerName={setPlayerName}
          showError={showError}
          playerName={playerName}
          error={error}
        />
      </div>
      <ChoosePlayerIcon setPlayerIcon={setPlayerIcon} />
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
