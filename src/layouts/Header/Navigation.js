import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { DesktopNavigationStyled } from 'styled';

function Navigation() {
  const { t } = useTranslation('navigation');

  return (
    <DesktopNavigationStyled>
      <li>
        <NavLink
          to="/about-me"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          {t('about_me')}
        </NavLink>
      </li>
    </DesktopNavigationStyled>
  );
}

export default Navigation;
