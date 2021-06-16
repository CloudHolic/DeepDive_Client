import React, { ReactFragment } from 'react';

import { ServerBattle } from 'types/Battle';

import { TestNep } from 'resources/Images';

import Module from './Battlefield.module.css';

interface battlefieldProps {
  battleData: ServerBattle;
}

const Battlefield: React.FC<battlefieldProps> = (props) => {
  const battlefieldSquareRenderer = (
    rowIdx: number,
    colIdx: number,
  ): ReactFragment => {
    switch (props.battleData.battlefield.field[rowIdx][colIdx].fieldType) {
      case 'character':
        return (
          <React.Fragment>
            <div className={Module.col}>
              <div className={Module.wrapper}>
                <img
                  src={TestNep}
                  className={Module.characterImage}
                  alt={'A'}
                />
              </div>
            </div>
          </React.Fragment>
        );
      case 'empty':
      default:
        return (
          <React.Fragment>
            <div className={Module.col}></div>
          </React.Fragment>
        );
    }
  };

  return (
    <React.Fragment>
      <table className={`${Module.battlefieldTable}`}>
        {props.battleData.battlefield.field.length !== 0 ? (
          <React.Fragment>
            <div className={Module.row}>
              <div className={Module.col}></div>
              {props.battleData.battlefield.field[0].map((col, idx) => {
                return <div className={Module.col}>{`${idx + 1}`}</div>;
              })}
            </div>
            {props.battleData.battlefield.field.map((row, rowIdx) => {
              return (
                <div className={Module.row}>
                  <div className={Module.col}>{`${String.fromCharCode(
                    65 + rowIdx,
                  )}`}</div>
                  {row.map((col, colIdx) => {
                    return battlefieldSquareRenderer(rowIdx, colIdx);
                  })}
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}
      </table>
    </React.Fragment>
  );
};

export default Battlefield;
