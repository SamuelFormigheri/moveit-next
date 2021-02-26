import { useCallback, useEffect, useState } from 'react';
import { useChallenge } from '../Challenge/context';
import {ContdownContext} from './context';

let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC = ({children}) => {

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const {startNewChallenge} = useChallenge();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = useCallback(() => {
    setIsActive(true);
  },[]);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout); 
    setIsActive(false); 
    setTime(25 * 60);
    setHasFinished(false);
  },[]);

  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    }
    else if(isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <ContdownContext.Provider value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    }}>
        {children}
    </ContdownContext.Provider>
  );
}