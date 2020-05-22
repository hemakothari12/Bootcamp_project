import React from 'react';

import electionToolPageStyles from './ElectionList.module.css';
import {useForm} from "../../hooks/useForm";

export const QuestionList = ({ questions, electionId, voterEmail, buttonText, onCastVote }) => {

     const initialBallotForm = questions.reduce((initialBallotForm, q) => {
        initialBallotForm[q.id] = false;
        return initialBallotForm
    },{})

  const [ ballotForm, change ] = useForm(initialBallotForm);

  const castVote = () => {
      let questionObject = [];
      for (let ballot in ballotForm){
          questionObject.push({ 'id' : ballot, 'answer' : ballotForm[ballot] === 'on' ? true : false });
      }

      onCastVote({
          election_id: electionId,
          user_email: voterEmail,
          question: questionObject,
      });
  }

  return (
      <>
        <ul className={electionToolPageStyles.questionList}>
          {questions.map(q => <li key={q.id}>
            {q.question}
            <input name={q.id} type="checkbox" onClick={change} ></input>
          </li>)}
        </ul>
        <button type="button" onClick={castVote}>{buttonText}</button>
      </>
  );

};