import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { ArrayFile } from '../Data/ArrayFile';

function Home() {
  console.log('Here is array', ArrayFile);
  const techs = ArrayFile.map((tech) => (
    <Link to="/Tech">
      <img className={classes.img} src={tech.src} />
    </Link>
  ));
  return (
    <div className={classes.home}>
      <p>Build your web development career with </p>
      <div className={classes.weber}>
        WEB<span className={classes.er}>ER</span>
      </div>

      <div></div>

      <div className={classes.fr}>{techs}</div>
    </div>
  );
}

export default Home;
