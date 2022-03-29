import React from 'react';
import classes from './MyQuestions.module.css';
import { HandThumbsUpFill, HandThumbsDownFill } from 'react-bootstrap-icons';

function MyAnswers() {
  //fetch answers and send as props
  const answers = [
    { Question1: [{ AuthorName1: 'Answer' }] },
    { Question2: [{ AuthorName1: 'Answer' }, { AuthorName2: 'Answer' }] },
    {
      Question3: [
        { AuthorName1: 'Answer' },
        { AuthorName2: 'Answer' },
        { AuthorName3: 'Answer' },
      ],
    },
    { Question4: [] },
    { Question5: [] },
  ];
  const qa = answers.map((qa) => {
    return (
      <div>
        <p className={classes.ques}>{Object.keys(qa)[0]}</p>
        <p className={classes.ans}>
          {Object.values(qa).map((ans) => {
            console.log(ans);
            return (
              <p>
                {ans.map((a) => {
                  return (
                    <div>
                      <p className={classes.author}> {Object.keys(a)}</p>
                      <p>
                        {Object.values(a)}
                        <a href="#"><HandThumbsUpFill className={classes.like} /></a>
                        <a href="#"><HandThumbsDownFill className={classes.dislike} /></a>
                      </p>
                      <hr />
                    </div>
                  );
                })}
              </p>
            );
          })}
        </p>
      </div>
    );
  });
  return (
    <div>
      <h2 className={classes.qas}>My Questions</h2>
      <p>{qa}</p>
    </div>
  );
}

export default MyAnswers;
