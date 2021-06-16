import React from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './Battle.module.css';

interface turnIndicatorProps {
  currentTurn: number;
  currentAction: string;
}

const TurnIndicator: React.FC<turnIndicatorProps> = (props) => {
  return (
    <React.Fragment>
      <Card
        className={`${MainTheme.pCardSlim} ${MainTheme.pCardContentFlexRow} ${Module.turnIndicator} p-ml-auto p-mr-auto`}
      >
        <div className={`${Module.turnIndicatorView}`}>
          <div className={`p-ml-auto p-mt-auto p-mb-auto`}>TURN 1</div>
          <div className={`p-ml-5 p-mr-auto`}>
            <Button
              className={`p-ml-2 ${
                props.currentAction === '집결' ? '' : 'p-button-outlined'
              }`}
              label="집결"
            />
            <Button
              className={`p-ml-2 ${
                props.currentAction === '정비' ? '' : 'p-button-outlined'
              }`}
              label="정비"
            />
            <Button
              className={`p-ml-2 ${
                props.currentAction === '액션' ? '' : 'p-button-outlined'
              }`}
              label="액션"
            />
            <Button
              className={`p-ml-2 ${
                props.currentAction === '마나순환' ? '' : 'p-button-outlined'
              }`}
              label="마나순환"
            />
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default TurnIndicator;
