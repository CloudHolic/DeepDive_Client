import React from 'react';
import { Card } from 'primereact/card';

import { TestHead } from 'resources/Images';

import SkillIndicator from './SkillIndicator';
import StatIndicator from './StatIndicator';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './CharacterCard.module.css';

interface characterCardProps {
  characterId?: string | null;
}

const CharacterCard: React.FC<characterCardProps> = (props) => {
  return (
    <React.Fragment>
      <Card
        className={`${MainTheme.pCardSlim} ${MainTheme.pCardContentFlexRow} ${Module.characterCard} p-shadow-6`}
      >
        <div className={`${Module.characterNameAndInfo}`}>
          <div className={`${Module.characterName} p-mb-2`}>
            <span>네프시스 스노우슈</span>
            <span>거너</span>
          </div>
          <div className={`${Module.characterImage}`}>
            <img src={TestHead} alt="캐릭터 이미지" />
          </div>
        </div>
        <div className={`${Module.characterStat}`}>
          <SkillIndicator />
          <div className={`${Module.statIndicatorWrapper}`}>
            <StatIndicator />
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default CharacterCard;
