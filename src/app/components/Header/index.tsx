import * as React from 'react';
import { Link } from 'react-router';
const style = require('./style.css');

export const Header = () => (
  <nav className={style.nav}>
    <ul className={style.nav__list}>
      <li className={style.nav__list__icon}>
        <img src={require('./scepter.png')} />
      </li>
      <li className={style.nav__list__item}>
        <Link to="/">Home</Link>
      </li>
      <li className={style.nav__list__item}>
        <Link to="compare">Compare</Link>
      </li>
      <li className={style.nav__list__item}>
        <Link to="scepter-list">Scepter List</Link>
      </li>
    </ul>
  </nav>
);
