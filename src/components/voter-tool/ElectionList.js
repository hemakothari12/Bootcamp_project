import React from 'react';

import electionToolPageStyles from './ElectionList.module.css';

export const ElectionList = ({ elections }) => {

  return (
    <ul className={electionToolPageStyles.electionList}>
      {elections.map(c => <li key={c.id}>
        {c.name}
      </li>)}
    </ul>
  );

};