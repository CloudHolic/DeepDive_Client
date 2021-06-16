import React from 'react';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import MainTheme from 'resources/css/Theme.module.css';

import { TutorialStanding } from 'resources/Images';
import { useHistory } from 'react-router';

const ErrorPage: React.FC = () => (
  <div className={`${MainTheme.pWidth100} ${MainTheme.pHeight100} p-d-flex`}>
    <Card
      className={`p-m-auto ${MainTheme.pCardDialog}`}
      footer={<ErrorPageFooter />}
    >
      <img
        alt="안내하는 튜토리얼"
        src={TutorialStanding}
        className="p-ml-auto p-mr-auto"
      />
      <div className="p-ml-auto p-mr-auto p-mt-2">
        {/* 에루님 여기에 이쁜 대사 넣어주세요 */}
        이곳은 올바른 페이지가 아닙니다.
      </div>
    </Card>
  </div>
);

const ErrorPageFooter: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Button
        label="이전 페이지로 돌아가기"
        className="p-ml-auto p-button-info"
        onClick={() => {
          history.goBack();
        }}
      />
      <Button
        label="홈으로 돌아가기"
        className="p-ml-2 p-mr-auto p-button-info"
        onClick={() => {
          history.push('/');
        }}
      />
    </React.Fragment>
  );
};

export default ErrorPage;
