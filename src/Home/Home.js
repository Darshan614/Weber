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
      <div>
        </div>
        <hr/>
        <div className={classes.fr}>
          <a href="#">
            <img className={classes.img} src="https://www.bairesdev.com/wp-content/uploads/2019/04/React-JS-Logo.png"/>
            </a>
            <a href="#">
            <img className={classes.img} src="https://www.bairesdev.com/wp-content/uploads/2019/04/Angular_full_color_logo.svg.png"/>
            </a>
            <a href="#">
            <img className={classes.img} src="https://www.bairesdev.com/wp-content/uploads/2019/04/Node-JS.png"/>
            </a>
          </div>
          <hr/>
          <div className={classes.fr}>
          <a href="#">
            <img className={classes.img} src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"/>
            </a>
            <a href="#">
            <img className={classes.img} src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"/>
            </a>
          </div>
          
    </div>
  );
}

export default Home;
