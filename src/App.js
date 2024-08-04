import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import PageLayout from 'layouts/PageLayout';
import Home from 'main/Home/Home';
import AboutMe from 'main/AboutMe/AboutMe';
import NotFound from 'main/NotFound/NotFound';

import { ColorModeProvider, ColorModeContext } from 'contexts';
import GlobalStyles from 'styled/GlobalStyles';

function App() {
  return (
    <ColorModeProvider>
      <ColorModeContext.Consumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route element={<PageLayout />}>
                  <Route path="about-me" element={<AboutMe />} />

                  <Route path="*" element={<NotFound />} />
                </Route>
              </Route>
            </Routes>
          </ThemeProvider>
        )}
      </ColorModeContext.Consumer>
    </ColorModeProvider>
  );
}

export default App;
