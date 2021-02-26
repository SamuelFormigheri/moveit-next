import React, { useCallback } from 'react';
import { useChallenge } from '../../context/Challenge/context';
import { useCountdown } from '../../context/Countdown/context';

import { Active, Container, NotActive } from './styles';

const ChallangeBox: React.FC = () => {
  const {activeChallenge, resetChallenge, completeChallenge} = useChallenge();
  const {resetCountdown} = useCountdown();

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge();
    resetCountdown();
  },[completeChallenge]);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountdown();
  },[]);

  return (
    <Container>
        {activeChallenge ? (
            <Active>
                <header>
                    Ganhe {activeChallenge.amount} xp
                </header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`} alt="Novo Desafio" />
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}.</p>
                </main>
                <footer>
                    <button type="button" className="failed" onClick={handleChallengeFailed}>Falhei</button>
                    <button type="button" className="success" onClick={handleChallengeSucceeded}>Completei</button>
                </footer>
            </Active>
        ): (
            <NotActive>
                <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando os desafios
                </p>
            </NotActive>
        )}
    </Container>
  );
}

export default ChallangeBox;