import React from 'react';

import { Card } from 'primereact/card';
import { Tooltip } from 'primereact/tooltip';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './SkillCard.module.css';

interface skillCardProps {
  job: string;
  className?: string;
  isSmall?: boolean;
}

const SkillCard: React.FC<skillCardProps> = (props) => {
  let jobClassName = '';

  switch (props.job) {
    case 'defender':
      jobClassName = Module.defender;
      break;
    case 'melee':
      jobClassName = Module.melee;
      break;
    case 'gunner':
      jobClassName = Module.gunner;
      break;
    case 'spellcaster':
      jobClassName = Module.spellcaster;
      break;
  }

  return (
    <React.Fragment>
      <Card
        className={`${MainTheme.pCardSlim} ${
          Module.skillCard
        } ${jobClassName} ${props.className !== undefined && props.className} ${
          props.isSmall === true && Module.small
        } p-shadow-6`}
      >
        <div className={`${Module.skillName}`}>도발</div>
        <div className={`${Module.skillInfoTable}`}>
          <div>범위</div>
          <div>플레이어 주변 1 마스</div>
        </div>
        <div className={`${Module.skillInfoTable}`}>
          <div>코스트</div>
          <div>-</div>
        </div>
        <div className={`${Module.skillInfoTable}`}>
          <div>사용 턴</div>
          <div>[집결]</div>
        </div>
        <div className={`${Module.skillInfoTable}`}>
          <div>대상</div>
          <div>단일 적</div>
        </div>
        <div className={`${Module.skillDetail}`}>
          전투의 시작에{' '}
          <span
            className={`${Module.tooltipData} ${jobClassName}`}
            data-pr-tooltip="받는 피해가 절반으로 감소한다(소수점 올림). 단, 적에게 주는 피해가 2
          감소한다.(최소 1)"
          >
            수호
          </span>{' '}
          혹은{' '}
          <span
            className={`${Module.tooltipData} ${jobClassName}`}
            data-pr-tooltip="원래 피해량 만큼 피해를 줄 수 있다."
          >
            섬멸
          </span>{' '}
          상태를 지정한다. 이 기술을 다시 사용하는 것으로 현재 태세를 변환할 수
          있다.
        </div>
        <Tooltip
          target={`.${Module.tooltipData}.${jobClassName}`}
          position="bottom"
          className={`${Module.tooltip} ${jobClassName}`}
        />
      </Card>
    </React.Fragment>
  );
};

export default SkillCard;
