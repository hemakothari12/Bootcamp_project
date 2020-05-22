import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

export const MainMenu = ({ onSetHasVotedOnLoad }) => {

  // ui model data
  const menuItems = [
    { id: 1, url: '/', caption: 'Voter Registration' },
    { id: 2, url: '/vote', caption: 'Cast Vote' },
  ];

  return (
    <nav id="main-menu">
      <ul>
        {menuItems.map(menuItem => <li key={menuItem.id}>
          <Link to={menuItem.url} onClick={onSetHasVotedOnLoad}>{menuItem.caption}</Link>
        </li>)}
      </ul>
    </nav>
  );

};