import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, RadarController, RadialLinearScale } from 'chart.js';

interface chartProps {
  style?: CSSProperties;
  className?: string;
  id?: string;
}

ChartJS.register(RadarController, RadialLinearScale);

const Chart: React.FC<chartProps> = (props) => {
  const [wrapperSize, setWrapperSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    document.addEventListener('resize', refreshWrapperSize);

    return () => {
      document.removeEventListener('resize', refreshWrapperSize);
    };
  }, []);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chart = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (
      canvasRef !== null &&
      canvasRef !== undefined &&
      canvasRef.current !== null &&
      canvasRef.current !== undefined
    ) {
      const ctx = canvasRef.current.getContext('2d');

      if (ctx !== undefined && ctx !== null) {
        chart.current = new ChartJS(ctx, {
          type: 'radar',
          data: {
            labels: ['A', 'B', 'C', 'D'],
            datasets: [
              {
                label: 'test',
                data: [1, 2, 3, 4],
              },
            ],
          },
        });
      }
    }
  }, [canvasRef]);

  const refreshWrapperSize = () => {
    if (
      wrapperRef !== null &&
      wrapperRef !== undefined &&
      wrapperRef.current !== null &&
      wrapperRef.current !== undefined
    ) {
      setWrapperSize({
        width: wrapperRef.current.clientWidth,
        height: wrapperRef.current.clientHeight,
      });
    }
  };

  const style: CSSProperties = props.style !== undefined ? props.style : {};

  style.position = 'relative';

  return (
    <React.Fragment>
      <div
        style={style}
        className={props.className}
        id={props.id}
        ref={wrapperRef}
      >
        <canvas ref={canvasRef} />
      </div>
    </React.Fragment>
  );
};

export default Chart;
