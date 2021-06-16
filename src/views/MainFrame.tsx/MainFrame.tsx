import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

import Battle from 'views/Battle/Battle';
import ViewWrapper from 'views/Components/ViewWrapper';
import ErrorPage from 'views/ErrorPage/ErrorPage';
import TopMenu from 'views/TopMenu/TopMenu';
import WebSocketTest from 'views/WebSocketTest/WebSocketTest';

import MainTheme from 'resources/css/Theme.module.css';
import Home from 'views/Home/Home';
import UITest from 'views/UITest/UITest';

const topMenuVisiblePaths = ['/uitest', '/webSocketTest', '/battle'];

const MainFrameContent: React.FC = () => {
  const location = useLocation();

  const [isTopMenuVisible, setIsTopMenuVisible] = useState(false);

  useEffect(() => {
    getIsTopMenuVisible();
  }, [location.pathname]);

  const getIsTopMenuVisible = () => {
    setIsTopMenuVisible(
      topMenuVisiblePaths.filter((x) => x.startsWith(location.pathname))
        .length > 0 || location.pathname === '/',
    );
  };

  return (
    <React.Fragment>
      <ViewWrapper>
        <TopMenu visible={isTopMenuVisible} />
        <div
          className={`${isTopMenuVisible ? 'p-mt-2' : ''} ${
            MainTheme.pFlexGrow
          }`}
        >
          <Switch>
            <Route exact path="/uitest" component={UITest} />
            <Route exact path="/webSocketTest" component={WebSocketTest} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/" component={Home} />
            <Route path="/" component={ErrorPage} />
          </Switch>
        </div>
      </ViewWrapper>
    </React.Fragment>
  );
};

const MainFrame: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainFrameContent />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default MainFrame;
