import React, { CSSProperties } from 'react';
import LiveClock from 'react-live-clock';

interface clockProps {
  style?: CSSProperties;
  className?: string;
}

const Clock: React.FC<clockProps> = (props) => {
  const style = props.style !== undefined ? props.style : {};
  const className = props.className !== undefined ? props.className : '';

  return (
    <React.Fragment>
      <div className={`${className} p-display-flex`} style={style}>
        <div className="p-m-auto p-display-flex">
          <LiveClock format="HH:mm:ss" ticking />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clock;
