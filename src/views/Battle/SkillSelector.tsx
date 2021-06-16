import React, { useEffect, useRef } from 'react';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { ScrollPanel } from 'primereact/scrollpanel';
import { Card } from 'primereact/card';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './SkillSelector.module.css';
import SkillCard from 'views/Character/SkillCard';

const SkillSelector: React.FC = () => {
  return (
    <React.Fragment>
      <Card
        className={`${MainTheme.pCardSlim} ${MainTheme.pCardContentFlexRow} ${Module.skillSelector} p-shadow-6`}
      >
        <PerfectScrollbar
          options={{
            suppressScrollY: true,
          }}
          style={{ width: '100%' }}
        >
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="gunner" isSmall />
          <SkillCard job="melee" isSmall />
          <SkillCard job="defender" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
          <SkillCard job="spellcaster" isSmall />
        </PerfectScrollbar>
      </Card>
    </React.Fragment>
  );
};

export default SkillSelector;
