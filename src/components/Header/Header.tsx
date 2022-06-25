import { FC } from 'react';
import clsx from 'clsx';
import Box, { BoxProps } from './Box';

import styles from './Header.module.css';

export interface HeaderProps {
  info: BoxProps[];
}

const Header: FC<HeaderProps> = ({ info }) => (
  <header className={clsx({ [styles.header]: true })}>
    <section className={clsx({ [styles['brand-section']]: true })}>
      <h1>Moje podróże</h1>
      <h2>małe i duże</h2>
    </section>
    <section className={clsx({ [styles['box-section']]: true })}>
      {info.map(({ title, value }) => (
        <Box key={title} title={title} value={value} />
      ))}
    </section>
  </header>
);

export default Header;
