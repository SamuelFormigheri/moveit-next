import React from 'react';
import { Container } from './styles';
import {useTheme} from '../../context/Theme/context';

const ThemeSwitch: React.FC = () => {
  const {toggleTheme} = useTheme();
  return (
    <Container>
      <img src="icons/theme.svg" alt="ThemeSwitch" onClick={toggleTheme}/>
    </Container>
  );
}

export default ThemeSwitch;