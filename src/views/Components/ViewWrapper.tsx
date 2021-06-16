import React, { ReactNode } from 'react';

import MainTheme from 'resources/css/Theme.module.css';

interface viewWrapperProps {
  children?: ReactNode;
}

const ViewWrapper: React.FC<viewWrapperProps> = (props) => {
  return (
    <React.Fragment>
      <div className={MainTheme.mainView}>{props.children}</div>
    </React.Fragment>
  );
};

export default ViewWrapper;
