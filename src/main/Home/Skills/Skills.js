import React from 'react';
import { useTranslation } from 'react-i18next';

import { SectionNameStyled } from 'styled';
import Skill from './Skill';
import html5 from 'assets/html5.png';
import css3 from 'assets/css3.png';
import js from 'assets/js.png';
import reactjs from 'assets/reactjs.png';

function Skills() {
  const { t } = useTranslation('my_skills');

  return (
    <section className="py-58 md:py-104">
      <div className="container-fluid">
        <SectionNameStyled>
          <span>{t('my_skills')}</span>
        </SectionNameStyled>
        <h2 className="text-40 text-center font-semibold">
          {t('my_expertise')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-48 mt-76">
          <div className="text-center">
            <Skill logoSrc={html5} to={90} title="HTML5" />
          </div>

          <div className="text-center">
            <Skill logoSrc={css3} to={90} title="CSS3" />
          </div>

          <div className="text-center">
            <Skill logoSrc={js} to={80} title="JavaScript" />
          </div>

          <div className="text-center">
            <Skill logoSrc={reactjs} to={80} title="ReactJS" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
