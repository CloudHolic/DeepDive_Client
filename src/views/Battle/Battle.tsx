import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';

import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './Battle.module.css';

import TurnIndicator from './TurnIndicator';
import Battlefield from './Battlefield';
import { ServerBattle, ServerBattleEntry } from 'types/Battle';
import { getBackendAddress } from 'global/Global';
import BattleSelector from './BattleSelector';
import PlayersList from './PlayersList';
import ChatRoom from './ChatRoom';
import SkillSelector from './SkillSelector';

let socket: any | null;

const Battle: React.FC = () => {
  const [availableBattles, setAvailableBattles] = useState<ServerBattleEntry[]>(
    [],
  );
  const [currentBattleId, setCurrentBattleId] = useState<number | null>(null);
  const [battleData, setBattleData] = useState<ServerBattle | null>(null);

  useEffect(() => {
    connectToSocket();
  }, []);

  useEffect(() => {
    getBattleData();
  }, [currentBattleId]);

  const connectToSocket = (): void => {
    socket = socketio(getBackendAddress());

    socket.on('receiveBattleList', (payload: ServerBattleEntry[]) => {
      setAvailableBattles(payload);

      if (payload.length === 1) {
        setCurrentBattleId(payload[0].battleId);
      }
    });

    socket.on('receiveBattleData', (payload: ServerBattle) => {
      setBattleData(payload);
    });

    getAvailableBattles();
  };

  const getAvailableBattles = () => {
    socket.emit('Battle/requestBattleList');
  };

  const getBattleData = (): void => {
    if (currentBattleId !== null) {
      socket.emit('Battle/requestBattleData', { battleId: currentBattleId });
    }
  };

  return (
    <React.Fragment>
      <Card
        className={`${MainTheme.pCard100} ${MainTheme.pCardFooterFlex} ${Module.mainBattleView}`}
      >
        <div className={`${Module.topView}`}>
          <div className={`${Module.leftView}`}>
            {availableBattles.length > 1 ? (
              <BattleSelector
                setCurrentBattleId={setCurrentBattleId}
                availableBattles={availableBattles}
                currentBattleId={currentBattleId}
              />
            ) : (
              <React.Fragment />
            )}
            <PlayersList
              characters={
                battleData !== null ? battleData.currentStatus.characters : []
              }
            />
          </div>
          <div className={`${Module.centerView} p-ml-2`}>
            <div className={`p-d-flex`}>
              <TurnIndicator currentTurn={1} currentAction={'액션'} />
            </div>
            <div className={`p-d-flex ${MainTheme.pFlexGrow}`}>
              {battleData !== null ? (
                <Battlefield battleData={battleData} />
              ) : (
                <div className="p-m-auto">NO VISUAL</div>
              )}
            </div>
          </div>
          <div className={`${Module.rightView}`}>
            <Card className={`${MainTheme.pCardSlim} p-shadow-6 p-ml-2`}>
              3
            </Card>
          </div>
        </div>
        <div className={`${Module.bottomView} p-mt-2`}>
          <SkillSelector />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Battle;
