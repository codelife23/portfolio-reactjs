import { styled } from '@mui/material/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

const InnerStyled = styled('div')(({ theme: { palette } }) => ({
  borderTop: `1px solid ${
    palette.mode === 'light' ? palette.grey[300] : palette.common.grey
  }`,
}));

function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer>
      <div className="container-fluid">
        <InnerStyled className="py-12 text-center">
          © 2024 | {t('copyright')}
        </InnerStyled>
      </div>
    </footer>
  );
}

export default Footer;
