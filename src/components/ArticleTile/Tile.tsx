import { FC } from 'react';
import clsx from 'clsx';

import styles from './Tile.module.css';

export interface TileProps {
  title: string;
  date: string;
  imageUrl: string;
}

const Tile: FC<TileProps> = ({ title, date, imageUrl }) => (
  <a href='/' className={clsx({ [styles.tile]: true })}>
    <div>{title}</div>
    <div>{date}</div>
    <img src={imageUrl} alt={title} />
  </a>
);

export default Tile;
