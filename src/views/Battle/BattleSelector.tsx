import React from 'react';

import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';

import { ServerBattleEntry } from 'types/Battle';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './BattleSelector.module.css';

interface battleSelectorProps {
  setCurrentBattleId: (id: number) => void;
  availableBattles: ServerBattleEntry[];
  currentBattleId: number | null;
}

const BattleSelector = (props: battleSelectorProps) => {
  return (
    <React.Fragment>
      <Card
        title="전투 선택"
        className={`${MainTheme.pCardSlim} ${Module.battleSelector} p-shadow-6`}
      >
        <Dropdown
          optionLabel="battleName"
          optionValue="battleId"
          placeholder="참여할 전투를 선택해주세요."
          options={props.availableBattles}
          value={props.currentBattleId}
          onChange={(e) => {
            props.setCurrentBattleId(e.value);
          }}
        />
      </Card>
    </React.Fragment>
  );
};

export default BattleSelector;
