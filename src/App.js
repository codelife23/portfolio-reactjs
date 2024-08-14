import { useLayoutEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useLocation } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import PageLayout from 'layouts/PageLayout';
import Home from 'main/Home/Home';
import AboutMe from 'main/AboutMe/AboutMe';
import NotFound from 'main/NotFound/NotFound';

import { ColorModeProvider, ColorModeContext } from 'contexts';
import GlobalStyles from 'styled/GlobalStyles';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    let scrollWidth, timeOut;

    const setScrollBarWidth = () => {
      clearTimeout(timeOut);

      timeOut = setTimeout(() => {
        scrollWidth = window.innerWidth - document.documentElement.clientWidth;

        document.documentElement.style.setProperty(
          '--scrollbar-width',
          `${scrollWidth}px`
        );
      }, 200);
    };

    setScrollBarWidth();

    window.addEventListener('resize', setScrollBarWidth);

    return () => {
      window.removeEventListener('resize', setScrollBarWidth);
    };
  }, [location.pathname]);

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
