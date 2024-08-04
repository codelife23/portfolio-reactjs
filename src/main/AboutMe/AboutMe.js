import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import { SectionNameStyled, UnderlineStyled } from 'styled';

const ExperianceBoxStyled = styled('div')(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? theme.palette.common.pumpkin
      : theme.palette.common.yellow,
  borderRadius: '50%',
  boxShadow: '0 0 50px #00000008',
  display: 'flex',
  height: 120,
  justifyContent: 'center',
  margin: '40px auto 24px',
  textAlign: 'center',
  width: 120,
  [theme.breakpoints.up('lg')]: {
    margin: '0 auto 24px',
  },

  span: {
    color:
      theme.palette.mode === 'dark' ? theme.palette.text.primary : '#4c4d4d',
    fontSize: 126,
    fontWeight: 500,
    lineHeight: 1,
  },
}));

function AboutMe() {
  const { t } = useTranslation('about_me');

  return (
    <main>
      <div className="container-fluid">
        <SectionNameStyled>
          <span>{t('section_name')}</span>
        </SectionNameStyled>

        <h1>{t('title')}</h1>

        <div className="flex max-lg:flex-col">
          <div className="lg:w-2/3">
            <div className="text">
              <h2>
                {t('hi')}{' '}
                <strong>
                  <UnderlineStyled>Maksym Zhylenko</UnderlineStyled>
                </strong>
              </h2>

              <p>{t('about')}</p>
            </div>
          </div>

          <div className="lg:w-1/3">
            <ExperianceBoxStyled>
              <span>5</span>
            </ExperianceBoxStyled>

            <h3 className="text-center">
              {t('years')} <strong>{t('experiance')}</strong>
              <br />
              {t('with_react')}
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
