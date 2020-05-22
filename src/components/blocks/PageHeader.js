import React from 'react';

import './PageHeader.css';

const team_slogan = 'Can\'t you see it?! You are one in a Minion!';

export const PageHeader = () => {

  return (
    <header id="page-header">
      <h1>
        <div>{team_slogan}</div>
      </h1>
    </header>
  );
};