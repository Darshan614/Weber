import React from 'react';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.weber}>
        WEB<span className={classes.er}>ER</span>
      </div>
      <p>Build your web development career with WEBER.</p>
      <span>Explore the technologies. </span>
      <span>Ask doubts and interact with peers.</span>

    </div>
  );
}

export default Home;
