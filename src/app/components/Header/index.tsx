import * as React from 'react';
import { Link } from 'react-router';

export const Header = () => (
  <nav>
    <ul className="nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="compare">Compare</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="scepter-list">Scepter List</Link>
      </li>
  
    </ul>
  </nav>
);
