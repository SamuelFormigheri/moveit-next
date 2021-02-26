import { useCallback, useState } from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {ThemeContext} from './context';

import light from './themes/light';
import dark from './themes/dark';


export const ThemeProvider: React.FC = ({children}) => {
  const getInitialTheme = useCallback(() => {
    if(typeof(window) !== 'undefined'){
        const activeTheme = localStorage.getItem('@MoveIt:Theme');

        if(!activeTheme){
            localStorage.setItem('@MoveIt:Theme', 'light');
            return 'light';
        }

        if(activeTheme === 'dark')
            return 'dark';

        return 'light';
    }
    return 'light';
  },[]);

  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  const toggleTheme = useCallback(() => {
    const activeTheme = localStorage.getItem('@MoveIt:Theme');
    if(activeTheme === 'dark'){
        setTheme('light');
        localStorage.setItem('@MoveIt:Theme', 'light');
    }else{
        setTheme('dark');
        localStorage.setItem('@MoveIt:Theme', 'dark');
    }
  },[]);

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
        <StyledThemeProvider theme={theme === 'dark' ? dark : light}>
            {children}
        </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}