import React from 'react';

import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './SkillIndicator.module.css';

interface skillIndicatorRowProps {
  skillName?: string;
}

const SkillIndicatorRow: React.FC<skillIndicatorRowProps> = (props) => {
  return (
    <React.Fragment>
      <div className={`${Module.skillIndicatorCell}`}>
        <div className={`${Module.turn}`}>
          <Button label={props.skillName} />
        </div>
        <div className={`${Module.skill}`}>A</div>
        <div className={`${Module.skill}`}>B</div>
        <div className={`${Module.skill}`}>C</div>
        <div className={`${Module.skill}`}>D</div>
        <div className={`${Module.skill}`}>E</div>
        <div
          className={`${Module.skill}`}
          data-pr-tooltip={<div>test</div>}
        ></div>
      </div>
    </React.Fragment>
  );
};

const SkillIndicator = () => {
  return (
    <React.Fragment>
      <div className={`${Module.skillIndicator}`}>
        <SkillIndicatorRow skillName={`집결`} />
        <SkillIndicatorRow skillName={`정비`} />
        <SkillIndicatorRow skillName={`액션`} />
        <SkillIndicatorRow skillName={`마나순환`} />
      </div>
      <Tooltip target={`.${Module.skill}`} position="bottom" content={'TEST'} />
    </React.Fragment>
  );
};

export default SkillIndicator;
