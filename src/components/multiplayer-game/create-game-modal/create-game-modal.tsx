import React, { Dispatch, SetStateAction } from 'react';
import styles from './create-game-modal.module.scss';

interface CreateGameModalProps {
  setShowCreateGameModal: Dispatch<SetStateAction<boolean>>;
}
export const CreateGameModal = (props: CreateGameModalProps) => {
  const { setShowCreateGameModal } = props;
  return (
    <div className={styles.CreateModalWrapper}>
      <div className={styles.CreateModal}>
        <div
          className={styles.CloseModal}
          onClick={() => setShowCreateGameModal(false)}
        >
          +
        </div>
      </div>
    </div>
  );
};
