import React from 'react';
import SkillCard from 'views/Character/SkillCard';
import CharacterCard from 'views/Character/CharacterCard';

import { Card } from 'primereact/card';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './SkillCard.module.css';

const UITest: React.FC = () => {
  return (
    <React.Fragment>
      <Card className={`${MainTheme.pCard100} ${MainTheme.pCardFooterFlex}`}>
        <div className={`p-d-flex p-flex-row p-mb-4`}>
          <SkillCard className="p-mr-2" job="defender" />
          <SkillCard className="p-mr-2" job="melee" />
          <SkillCard className="p-mr-2" job="gunner" />
          <SkillCard job="spellcaster" />
        </div>
        <div className={`p-d-flex p-flex-row`}>
          <CharacterCard />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default UITest;
