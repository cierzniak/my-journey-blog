import { FC } from 'react';
import clsx from 'clsx';

import styles from './Navigation.module.css';

interface NavLinkProps {
  name: string;
  url: string;
}

export interface NavigationProps {
  links: NavLinkProps[];
}

const Navigation: FC<NavigationProps> = ({ links }) => (
  <nav className={clsx({ [styles.nav]: true })}>
    {links.map(({ name, url }) => (
      <a key={url} href={url}>
        {name}
      </a>
    ))}
  </nav>
);

export default Navigation;
