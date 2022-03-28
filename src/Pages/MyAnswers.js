import React from 'react';
import classes from './MyAnswers.module.css';

function MyAnswers() {
  //fetch answers and send as props
  const answers = [
    { Question: 'Answers1' },
    { Question: 'Answers2' },
    { Question: 'Answers3' },
    { Question: 'Answers4' },
    { Question: 'Answers5' },
  ];
  const qa = answers.map((qa) => {
    return (
      <div>
        <p className={classes.ques}>{Object.keys(qa)}</p>
        <p className={classes.ans}>{Object.values(qa)}</p>
      </div>
    );
  });
  return (
    <div >
      <h2 className={classes.qas}>My Answers</h2>
      <p>{qa}</p>
    </div>
  );
}

export default MyAnswers;
