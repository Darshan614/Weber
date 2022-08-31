import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { ArrayFile } from '../Data/ArrayFile';

function Home() {
  const techs = ArrayFile.map((tech) => (
    <Link key={tech.title} to={tech.title}>
      <img className={classes.img} src={tech.src} />
    </Link>
  ));
  return (
    <div className={classes.home}>
      <p className={classes.fline}>Build your web development career with </p>
      <div className={classes.weber}>
        WEB<span className={classes.er}>ER</span>
      </div>
      <div className={classes.fr}>{techs}</div>
    </div>
  );
}

export default Home;
