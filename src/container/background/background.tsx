import React from 'react';
import styles from './background.module.scss';
import { CSSProperties } from '@mui/material/styles/createMixins';

export const Background = () => (
  <div className={styles.Background}>
    <div className={styles.RectangleWrapper}>
      <Rectangle
        xPosition={200}
        yPosition={200}
        height={214}
        width={130}
        rotate={40}
      />
      <Rectangle
        xPosition={250}
        yPosition={320}
        height={222}
        width={144}
        rotate={140}
      />
      <Rectangle
        xPosition={1200}
        yPosition={500}
        height={40}
        width={100}
        rotate={10}
      />
      <Rectangle
        xPosition={1200}
        yPosition={700}
        height={147}
        width={277}
        rotate={100}
      />
      <Rectangle
        xPosition={400}
        yPosition={900}
        height={100}
        width={100}
        rotate={40}
      />
      <Rectangle
        xPosition={1400}
        yPosition={100}
        height={200}
        width={150}
        rotate={40}
      />
      <Rectangle
        xPosition={500}
        yPosition={700}
        height={90}
        width={140}
        rotate={110}
      />
      <Rectangle
        xPosition={800}
        yPosition={500}
        height={200}
        width={180}
        rotate={70}
      />
      <Rectangle
        xPosition={800}
        yPosition={600}
        height={233}
        width={411}
        rotate={40}
      />
      <Rectangle
        xPosition={1600}
        yPosition={800}
        height={100}
        width={160}
        rotate={140}
      />
      <Rectangle
        xPosition={1600}
        yPosition={800}
        height={100}
        width={360}
        rotate={250}
      />
      <Rectangle
        xPosition={1610}
        yPosition={700}
        height={150}
        width={160}
        rotate={268}
      />
    </div>
  </div>
);

interface RectangleProps {
  xPosition: number;
  yPosition: number;
  height: number;
  width: number;
  rotate: number;
}
const Rectangle = (props: RectangleProps) => {
  const { xPosition, yPosition, height, width, rotate } = props;
  let stylings: CSSProperties = {
    '--rotate': `${rotate}deg`,
    '--height': `${height}px`,
    '--width': `${width}px`,
    '--xPosition': `${xPosition}px`,
    '--yPosition': `${yPosition}px`,
  };

  console.log('stylings: ', stylings);
  return <div className={styles.Rectangle} style={stylings}></div>;
};
