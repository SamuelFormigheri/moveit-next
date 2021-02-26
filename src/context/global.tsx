import React from 'react';
import {ThemeProvider} from './Theme/provider';

const SharedContext: React.FC = ({children}) => {
  return (
      <ThemeProvider>
          {children}
      </ThemeProvider>
  );
}

export default SharedContext;