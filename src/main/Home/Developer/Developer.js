import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import PlaceIcon from '@mui/icons-material/Place';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Me from 'assets/me.jpg';
import MapModal from './MapModal';
import { useModal } from 'hooks';

const DevStyled = styled('span')(({ theme }) => ({
  fontWeight: 600,
  fontSize: 'calc(24px + 6.3vw)',
  textTransform: 'uppercase',
  background: 'linear-gradient(to right, #a02022 0%, #593030 100%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.up('xl')]: {
    fontSize: 104,
  },
}));

const IconsStyled = styled('a')(({ hoverColor }) => ({
  display: 'inline-block',
  color: '#4d555a',
  transition: 'color 0.3s ease',

  '&:hover': {
    color: hoverColor ? hoverColor : null,
  },
}));

function Developer() {
  const { t } = useTranslation('developer');

  const [open, handleOpen, handleClose] = useModal();

  return (
    <section
      className="min-h-[100dvh] flex items-center pt-90 pb-40"
      style={{ background: '#f5df4e', color: '#212529' }}
    >
      <div className="container-fluid">
        <div className="flex max-lg:flex-col lg:justify-between lg:items-center">
          <div className="max-lg:text-center lg:pr-60">
            <h1
              className="mb-0 uppercase font-light leading-none lg:text-left"
              style={{ fontSize: 'calc(22px + 2.1vw)' }}
            >
              {t('hi_my_name_is_maks')}
            </h1>

            <h2
              className="font-light mt-6 mb-0"
              style={{ fontSize: 'calc(22px + 2.1vw)' }}
            >
              <span className="block">{t('i_am_a_react')}</span>
              <DevStyled className="second-part">{t('developer')}</DevStyled>
            </h2>

            <p className="mt-3 text-21 leading-tight">
              {t('based_in')}{' '}
              <span
                onClick={handleOpen}
                className="cursor-pointer underline hover:no-underline"
                aria-labelledby="Open location modal"
              >
                {t('warsaw_poland')}
                <PlaceIcon fontSize="inherit" color="inherit" />
              </span>
            </p>

            <div className="flex gap-x-10 justify-center lg:justify-start mt-20 -ml-4 text-38 leading-none">
              <IconsStyled
                hoverColor="#0a66c2"
                target="_blank"
                href="https://www.linkedin.com/in/maksymzh/"
                rel="noreferrer"
                aria-label="Linkedin profile"
              >
                <LinkedInIcon fontSize="inherit" color="inherit" />
              </IconsStyled>

              <IconsStyled
                hoverColor="#1f2328"
                target="_blank"
                href="https://github.com/codelife23/portfolio-reactjs"
                rel="noreferrer"
                aria-label="Github profile"
              >
                <GitHubIcon fontSize="inherit" color="inherit" />
              </IconsStyled>
            </div>
          </div>

          <div className="max-lg:-order-1">
            <div className="rounded-full max-w-[487px] overflow-hidden border-16 border-solid border-white mx-auto max-lg:mb-24">
              <img src={Me} alt="Maksym" width="455" height="455" />
            </div>
          </div>
        </div>
      </div>

      <MapModal open={open} handleClose={handleClose} />
    </section>
  );
}

export default Developer;
