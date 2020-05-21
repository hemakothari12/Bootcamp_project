import React from 'react';

import electionToolPageStyles from './ElectionList.module.css';
import {useForm} from "../../hooks/useForm";

export const QuestionList = ({ questions, electionId, voterEmail, buttonText, onCastVote }) => {

  const [ ballotForm, change ] = useForm({
    election_id: electionId, user_email: voterEmail, questions: [],
  });

  return (
      <>
        <ul className={electionToolPageStyles.questionList}>
          {questions.map(q => <li key={q.id}>
            {q.question}
            <input type="checkbox" value={ballotForm.questions.answer} onClick={change}></input>
          </li>)}
        </ul>
        <button type="button" onClick={onCastVote}>{buttonText}</button>
      </>
  );

};