import React from 'react';
import { useChallenge } from '../../context/Challenge/context';

import { Container, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  const {currentExperience, experienceToNextLevel} = useChallenge();

  const percentToNextLevel = Math.round((currentExperience  / experienceToNextLevel) * 100);

  return(
    <Container>
      <span className="span-of-component-experience-bar">0 xp</span>
      <div className="div-of-component-experience-bar">
          <ProgressBar width={percentToNextLevel}/>
          <CurrentExperience left={percentToNextLevel}>{currentExperience} xp</CurrentExperience>
      </div>
      <span className="span-of-component-experience-bar">{experienceToNextLevel} xp</span>
    </Container>
    )
}

export default ExperienceBar;