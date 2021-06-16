import { Card } from 'primereact/card';
import React from 'react';

import MainTheme from 'resources/css/Theme.module.css';
import { JobIconTest } from 'resources/Images';
import { ServerBattleCharacter } from 'types/Characters';
import Module from './PlayersList.module.css';

interface playersListProps {
  characters: ServerBattleCharacter[];
}

interface playerIndicatorProps {
  character: ServerBattleCharacter;
}

const PlayersList = (props: playersListProps) => {
  return (
    <React.Fragment>
      <Card
        title="참가자"
        className={`${MainTheme.pCardSlim} ${Module.playersList} p-shadow-6`}
      >
        {props.characters.map((character) => {
          return <PlayerIndicator character={character} />;
        })}
      </Card>
    </React.Fragment>
  );
};

const PlayerIndicator = (props: playerIndicatorProps) => {
  return (
    <div className={`${Module.playerIndicator}`}>
      <div className={`${Module.playerRow}`}>
        <img
          className={`${Module.playerIconTest}`}
          src={JobIconTest}
          alt={props.character.characterClass}
        />
        <div className={`${Module.playerName}`}>
          {props.character.characterName}
        </div>
      </div>
      <div className={`${Module.indicatorRow}`}>
        <div className={`${Module.hpIndicator}`}>
          <div
            className={`${Module.colorFiller}`}
            style={{
              width: `${
                (props.character.characterCurrentHP /
                  (props.character.characterMaxHP +
                    props.character.characterCurrentSHP)) *
                100
              }%`,
            }}
          />
          <div
            className={`${Module.colorFiller} ${Module.additional}`}
            style={{
              width: `${
                (props.character.characterCurrentSHP /
                  (props.character.characterMaxHP +
                    props.character.characterCurrentSHP)) *
                100
              }%`,
            }}
          />
          <div className={`${Module.textOverlay}`}>
            {`${props.character.characterCurrentHP}${
              props.character.characterCurrentSHP !== 0
                ? ` [${props.character.characterCurrentSHP}]`
                : ''
            } / ${props.character.characterMaxHP}`}
          </div>
        </div>
        <div className={`${Module.spIndicator}`}>
          <div
            className={`${Module.colorFiller}`}
            style={{
              width: `${
                (props.character.characterCurrentSP /
                  props.character.characterMaxSP) *
                100
              }%`,
            }}
          />
          <div
            className={`${Module.textOverlay}`}
          >{`${props.character.characterCurrentSP} / ${props.character.characterMaxSP}`}</div>
        </div>
        <div className={`${Module.mpIndicator}`}>
          <div
            className={`${Module.colorFiller}`}
            style={{
              width: `${
                (props.character.characterCurrentMP /
                  (props.character.characterMaxMP +
                    props.character.characterCurrentSMP)) *
                100
              }%`,
            }}
          />
          <div
            className={`${Module.colorFiller} ${Module.additional}`}
            style={{
              width: `${
                (props.character.characterCurrentSMP /
                  (props.character.characterMaxMP +
                    props.character.characterCurrentSMP)) *
                100
              }%`,
            }}
          />
          <div className={`${Module.textOverlay}`}>
            {`${props.character.characterCurrentMP}${
              props.character.characterCurrentSMP !== 0
                ? ` [${props.character.characterCurrentSMP}]`
                : ''
            } / ${props.character.characterMaxMP}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersList;
