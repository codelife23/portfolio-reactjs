import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';

import Hamburger from './Hamburger';
import { MobileNavigationStyled } from 'styled';

function MobileNavigation() {
  const { t } = useTranslation('navigation');

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Hamburger
        className={mobileOpen ? 'open' : null}
        onClick={handleDrawerToggle}
      />

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            padding: '25px 16px',
          },
        }}
      >
        <nav>
          <MobileNavigationStyled>
            <li>
              <NavLink
                onClick={handleDrawerToggle}
                to="/about-me"
                className={({ isActive }) => (isActive ? 'active' : null)}
              >
                {t('about_me')}
              </NavLink>
            </li>
          </MobileNavigationStyled>
        </nav>
      </Drawer>
    </>
  );
}

export default MobileNavigation;
