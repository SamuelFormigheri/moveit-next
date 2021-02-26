import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {ChallengeContext} from './context';
import challenges from '../../../challenges.json';
import { IChallangeProviderProps } from './interface';
import ModalLevelUp from '../../components/ModalLevelUp';

export const ChallengeProvider: React.FC<IChallangeProviderProps> = ({
  children, 
  ...rest
}) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challangesCompleted, setChallangesCompleted] = useState(rest.challangesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();
    console.log(Notification.permission);
    if(Notification.permission === 'granted'){
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp...`
      });
    }
  },[]);

  const resetChallenge = useCallback(()=>{
    setActiveChallenge(null);
  },[]);

  const levelUp = useCallback(()=>{
    setLevel(prevState => prevState + 1);
    setIsLevelUpModalOpen(true);
  },[]);

  function completeChallenge() {
    if(!activeChallenge)
      return;

    const {amount} = activeChallenge;
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallangesCompleted(prevState => prevState + 1);
  };

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  },[]);

  useEffect(() => {
    Notification.requestPermission();
  },[]);

  useEffect(() => {
    Cookies.set('MoveIt_level', String(level));
    Cookies.set('MoveIt_currentExperience', String(currentExperience));
    Cookies.set('MoveIt_challangesCompleted', String(challangesCompleted));
  },[level, currentExperience, challangesCompleted]);

  return (
    <ChallengeContext.Provider value={{
        activeChallenge,
        challangesCompleted,
        currentExperience,
        experienceToNextLevel,
        level,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
    }}>
        {children}
        {isLevelUpModalOpen && <ModalLevelUp />}
    </ChallengeContext.Provider>
  );
}