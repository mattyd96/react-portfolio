import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

import './App.css'
import Router from './router/Router';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <Router />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
