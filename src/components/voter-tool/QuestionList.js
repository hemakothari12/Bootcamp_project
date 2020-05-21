import React from 'react';

import electionToolPageStyles from './ElectionList.module.css';

export const QuestionList = ({ questions }) => {

  return (
    <ul className={electionToolPageStyles.questionList}>
      {questions.map(q => <li key={q.id}>
        {q.question}
      </li>)}
    </ul>
  );

};