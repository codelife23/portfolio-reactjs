import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import i18n from 'i18n';
import { setValueToLocalStorage } from 'helpers';
import { STORAGE_LANGUAGE_CODE } from 'variables';

function SelectLanguage() {
  const { t } = useTranslation('languages');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setValueToLocalStorage(STORAGE_LANGUAGE_CODE, languageCode);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const language = i18n.language;
  const languageSrc = language.split('-')[0];

  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img
          src={`https://flagcdn.com/w20/${
            languageSrc === 'en' ? 'us' : languageSrc
          }.png`}
          srcSet={`https://flagcdn.com/w40/${
            languageSrc === 'en' ? 'us' : languageSrc
          }.png 2x`}
          width="20"
          alt=""
        />
      </Button>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        <MenuItem onClick={() => handleSelect('en-EN')}>{t('en-EN')}</MenuItem>
        <MenuItem onClick={() => handleSelect('pl-PL')}>{t('pl-PL')}</MenuItem>
      </Menu>
    </>
  );
}

export default SelectLanguage;
