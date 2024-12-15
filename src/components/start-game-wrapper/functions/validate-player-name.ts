import { Dispatch, SetStateAction } from 'react';
import { Player } from '../../../api/create-player';
import { getPlayerByName } from '../../../api/get-player-by-name';

export async function validateNameInput(
  name: string | undefined,
  setPlayer: Dispatch<SetStateAction<Player | undefined>>,
  showError: Dispatch<SetStateAction<string | undefined>>
) {
  if (!name) {
    return;
  }
  const playerExists = await getPlayerByName(name);
  if (playerExists) {
    setPlayer(playerExists);
    showError(undefined);
  } else {
    showError('Spieler existiert nicht!');
  }
}
