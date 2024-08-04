import { styled } from '@mui/material/styles';
import { Parallax } from 'react-parallax';
import { useTranslation } from 'react-i18next';

import HireMeBg from 'assets/hire-me-bg.jpg';

const ButtonStyled = styled('a')(({ theme: { palette } }) => ({
  display: 'inline-block',
  width: 152,
  background:
    palette.mode === 'dark' ? palette.common.pumpkin : palette.common.yellow,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '52px',
  textDecoration: 'none',
}));

function HireMe() {
  const { t } = useTranslation('hire_me');

  return (
    <section className="relative -mb-1">
      <div className="h-full absolute inset-x-0 opacity-80 z-10 bg-[#111418]"></div>

      <Parallax
        bgImage={HireMeBg}
        bgImageAlt="Parallax content background"
        strength={200}
        bgClassName="max-w-none"
      >
        <div className="relative z-20 text-center py-[104px] md:py-[152px]">
          <div className="container-fluid">
            <h2 className="mb-48 text-40 font-semibold text-white">
              {t('interested')}
            </h2>

            <ButtonStyled
              target="_blank"
              href="https://www.linkedin.com/in/maksymzh/"
              rel="noreferrer"
              aria-label="Linkedin profile"
            >
              {t('hire_me')}
            </ButtonStyled>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default HireMe;
