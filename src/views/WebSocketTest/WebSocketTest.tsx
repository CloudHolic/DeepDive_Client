import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';

let socket: any | null;

const WebSocketTest: React.FC = () => {
  const [playerId, setPlayerId] = useState<number | null>(null);
  const [battlefield, setBattlefield] = useState<any[]>([]);
  const [playerList, setPlayerList] = useState<any[]>([]);

  useEffect(() => {
    socket = socketio('http://localhost:3000');

    socket.emit('requestJoin');
  }, []);

  return (
    <div>
      <div>
        {playerList.map((player) => (
          <div>{player.id}</div>
        ))}
      </div>
    </div>
  );
};

export default WebSocketTest;
