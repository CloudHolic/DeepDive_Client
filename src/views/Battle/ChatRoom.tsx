import React from 'react';

import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

import MainTheme from 'resources/css/Theme.module.css';
import Module from './ChatRoom.module.css';
import { Button } from 'primereact/button';

interface chatRoomProps {}
interface chatMessageProps {}

const ChatRoom = (props: chatRoomProps) => {
  return (
    <React.Fragment>
      <Card className={`${MainTheme.pCardSlim} ${Module.chatRoom} p-shadow-6`}>
        <div className={`${Module.chatMessageContainer}`}>
          <div>
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage />
          </div>
        </div>
        <div className={`${Module.chatWriter}`}>
          <InputText />
          <Button
            className={`p-ml-1 p-button-text p-button-info`}
            label="전송"
          />
        </div>
      </Card>
    </React.Fragment>
  );
};

const ChatMessage = (props: chatMessageProps) => {
  return (
    <React.Fragment>
      <div className={`${Module.chatMessage}`}>
        <span className={`${Module.nameIndicator}`}>네프시스 스노우슈</span>
        <span className={`${Module.timeIndicator}`}>00:16:20</span>
        <br />
        여러줄 테스트 여러줄 테스트
      </div>
    </React.Fragment>
  );
};

export default ChatRoom;
