import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../config/api.config';
import { Player } from './create-player';
import { GameProgress } from '../components/game/game';
import { GameType } from '../hooks/usePlayers';

export async function updatePlayer(
  game: GameProgress,
  player: Player,
  gameType: GameType
): Promise<void> {
  const { highscore, highscorePokemon } = getScoresByGameType(
    game,
    player,
    gameType
  );

  const updatePlayerDto: Omit<Player, 'id'> = {
    highscore,
    levelsPlayed: game.levelsPlayed,
    name: player.name,
    highscorePokemon,
    multiplayerGames: player.multiplayerGames,
  };

  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/player/${player.id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: updatePlayerDto,
    };

    return await axios.request(options);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}

function getScoresByGameType(
  game: GameProgress,
  player: Player,
  gameType: GameType
): { highscore: number; highscorePokemon: number } {
  if (gameType === 'CODENAMES') {
    return {
      highscore: game.highscore,
      highscorePokemon: player.highscorePokemon,
    };
  }

  return {
    highscore: player.highscore,
    highscorePokemon: game.highscorePokemon,
  };
}
