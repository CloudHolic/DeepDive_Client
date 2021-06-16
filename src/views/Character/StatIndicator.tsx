import React, { useState } from 'react';

import MainTheme from 'resources/css/Theme.module.css';
import Chart from 'views/Components/Chart';
import Module from './StatIndicator.module.css';

interface statIndicatorRowProps {
  statName: string;
}

interface classStatIndicatorProps {}

const StatIndicatorRow: React.FC<statIndicatorRowProps> = (props) => {
  return (
    <React.Fragment>
      <div className={`${Module.statIndicatorRow}`}>
        <div className={`${Module.statIndicatorCell}`}>{props.statName}</div>
        <div className={`${Module.statIndicatorCell}`}> ◈ ⬦ ⬦</div>
      </div>
    </React.Fragment>
  );
};

const classStatRadarOptions = {
  options: {
    responsive: true,
    aspectRatio: 1,
  },
  legend: {
    display: false,
  },
  scale: {
    pointLabels: {
      fontColor: '#495057',
    },
    gridLines: {
      color: '#ebedef',
    },
  },
};

const ClassStatIndicator: React.FC<classStatIndicatorProps> = (props) => {
  const [classStatData, setClassStatData] = useState({
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: '스탯',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [10, 4, 4, 10],
      },
    ],
  });

  return (
    <React.Fragment>
      <div>
        <Chart />
      </div>
    </React.Fragment>
  );
};

const StatIndicator: React.FC = () => {
  return (
    <React.Fragment>
      <div className={`${Module.statIndicator}`}>
        <StatIndicatorRow statName="HP" />
        <StatIndicatorRow statName="SP" />
        <StatIndicatorRow statName="DEX" />
      </div>
      <div className={`${Module.classStatIndicator}}`}>
        {/* <ClassStatIndicator /> */}
      </div>
    </React.Fragment>
  );
};

export default StatIndicator;
