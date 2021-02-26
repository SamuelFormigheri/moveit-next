import React from 'react';
import { useCountdown } from '../../context/Countdown/context';

import { Container, Button } from './styles';

// let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useCountdown();

  const [minuteDecimal, minuteUnit] = String(minutes).padStart(2, '0').split('');
  const [secondDecimal, secondUnit] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
        <Container>
            <div>
                <span>{minuteDecimal}</span>
                <span>{minuteUnit}</span>
            </div>  
            <span>:</span> 
            <div>
                <span>{secondDecimal}</span>
                <span>{secondUnit}</span>
            </div>  
        </Container>
        {hasFinished ? (
          <Button disabled>Ciclo encerrado</Button>
        ) : (
          <>
            {!isActive ? (
              <Button type="button" onClick={startCountdown}>Iniciar um ciclo</Button>
            ):(
              <Button isActive type="button" onClick={resetCountdown}>Abandonar ciclo</Button>
            )}
          </>
        )}

    </div>
  );
}

export default Countdown;