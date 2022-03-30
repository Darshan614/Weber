import React, { Fragment } from 'react';
import classes from './Topic.module.css';
import { useParams } from 'react-router-dom';
import { TopicData } from '../Data/TopicData';
import { TopicQA } from '../Data/TopicQA';
import { Plus } from 'react-bootstrap-icons';
import Overl from '../Components/Overl';
import { HandThumbsUpFill, HandThumbsDownFill } from 'react-bootstrap-icons';

function Topic() {
  let params = useParams();
  let topic = params.topic;
  // console.log(TopicData);
  let code = TopicData[params.title][params.topic][0];
  let description = TopicData[params.title][params.topic][1];
  // console.log(TopicQA);
  // console.log(TopicQA[params.title][params.topic]);

  let answers = TopicQA[params.title][params.topic].map((qa) => (
    //  console.log(Object.keys(qa)[0],Object.values(qa)[0]);
    <p>
      <p className={classes.question}>
        {Object.keys(qa)[0]}
        <Overl className={classes.overl} message={'Add answer'} />
      </p>
      {Object.values(qa)[0].map((ans) => (
        <p className={classes.answer}>
          {ans}
          <a href="#">
            <HandThumbsDownFill className={classes.dislike} />
          </a>
          <a href="#">
            <HandThumbsUpFill className={classes.like} />
          </a>
        </p>
      ))}
    </p>
  ));

  return (
    <div>
      <div className={classes.d}>
        <div className={classes.topic}>{params.topic}</div>
        <p className={classes.code}>{code}</p>
        <p className={classes.desc}>{description}</p>
      </div>
      <div className={classes.d}>
        <div className={classes.topic}>
          Discussions
          <Overl className={classes.overl} message={'Ask a question'} />
        </div>

        <hr />

        <div> {answers}</div>
      </div>
    </div>
  );
}

export default Topic;
