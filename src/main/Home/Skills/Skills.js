import React from 'react';
import { useTranslation } from 'react-i18next';

import { SectionNameStyled } from 'styled';
import Skill from './Skill';
import html5 from 'assets/html5.png';
import css3 from 'assets/css3.png';
import reactjs from 'assets/reactjs.png';
import ts from 'assets/ts.png';
import js from 'assets/js.png';

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

        <div className="grid sm:grid-cols-6 lg:grid-cols-5 gap-x-20 gap-y-48 mt-76">
          <div className="text-center sm:max-lg:col-span-2">
            <Skill logoSrc={ts} to={80} title="TypeScript" />
          </div>

          <div className="text-center sm:max-lg:col-span-2">
            <Skill logoSrc={js} to={80} title="JavaScript" />
          </div>

          <div className="text-center sm:max-lg:col-span-2">
            <Skill logoSrc={reactjs} to={90} title="ReactJS" />
          </div>

          <div className="text-center sm:max-lg:col-span-2 sm:max-lg:col-start-2">
            <Skill logoSrc={html5} to={90} title="HTML5" />
          </div>

          <div className="text-center sm:max-lg:col-span-2">
            <Skill logoSrc={css3} to={90} title="CSS3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
