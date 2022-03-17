import React from 'react';
import classes from './Topic.module.css';
import { useParams } from 'react-router-dom';

function Topic() {
  let params = useParams();
  console.log(params);
  return (
    <div className={classes.topic}>
      {params.title}
      {'--- '}
      {params.topic}
    </div>
  );
}

export default Topic;
