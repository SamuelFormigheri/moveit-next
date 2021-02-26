import React from 'react';
import { useChallenge } from '../../context/Challenge/context';

import { Container, Overlay } from './styles';

const ModalLevelUp: React.FC = () => {
  const { level, closeLevelUpModal } = useChallenge();
  return (
   <Overlay >
    <Container >
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
    </Container>
  </Overlay >
  );
}

export default ModalLevelUp;