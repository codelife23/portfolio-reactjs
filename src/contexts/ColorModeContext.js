import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
  getDesignTokens,
} from 'helpers';
import { STORAGE_COLOR_MODE } from 'variables';

export const ColorModeContext = createContext(null);

export const ColorModeProvider = ({ children }) => {
  const choosenColorMode = getValueFromLocalStorage(STORAGE_COLOR_MODE);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  const [mode, setMode] = useState(
    choosenColorMode || prefersDarkMode || 'light'
  );

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    setValueToLocalStorage(STORAGE_COLOR_MODE, mode);

    return createTheme(getDesignTokens(mode));
  }, [mode]);

  const value = { mode, theme, toggleColorMode };

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error(
      'useColorModeContext must be used within a ColorModeProvider'
    );
  }
  return context;
};
