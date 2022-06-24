import clsx from 'clsx';

import styles from './Header.module.css';

const Header = () => (
  <header>
    <h1 className={clsx({ [styles.title]: true })}>Moje podróże</h1>
    <h2 className={clsx({ [styles.subtitle]: true })}>małe i duże</h2>
  </header>
);

export default Header;
