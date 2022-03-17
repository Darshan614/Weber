import React, { Fragment } from 'react';
import classes from './Topic.module.css';
import { useParams } from 'react-router-dom';
import { TopicData } from '../Data/TopicData';

function Topic() {
  let params = useParams();
  let topic = params.topic;
  console.log(TopicData);
  let code = TopicData[params.title][params.topic][0];
  console.log(TopicData);

  return (
    <Fragment>
      <div className={classes.topic}>{params.topic}</div>
      <p className={classes.code}>{code}</p>
      <p className={classes.desc}>
        It displays a heading saying “Hello, world!” on the page.
      </p>
      <div className={classes.topic}>Discussions</div>
    </Fragment>
  );
}

export default Topic;
