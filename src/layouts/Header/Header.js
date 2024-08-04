import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import LogoDark from 'assets/logo-dark.png';
import LogoWhite from 'assets/logo-white.png';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import SwitchColorMode from './SwitchColorMode';
import SelectLanguage from './SelectLanguage';

const HeaderStyled = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  padding: '16px 0',
  background: theme.palette.background.header,
  transition: 'transform 0.4s ease-out',
  borderBottom: `1px solid ${
    theme.palette.mode === 'dark' ? 'transparent' : '#efefef'
  }`,

  '&.hide': {
    transform: 'translateY(-100%)',
  },
}));

function Header() {
  const [scrollDirection, setScrollDirection] = useState(null);

  const theme = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  const cls = scrollDirection === 'down' ? 'hide' : null;

  return (
    <HeaderStyled className={cls}>
      <div className="container-fluid flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src={theme.palette.mode === 'dark' ? LogoDark : LogoWhite}
              alt="Logo"
              width="36"
              height="36"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <div>
            <Navigation />
          </div>

          <SwitchColorMode />

          <div>
            <SelectLanguage />
          </div>

          <div>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
