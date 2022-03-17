import React from 'react';
import classes from './Tech.module.css';
import { useParams , Link } from 'react-router-dom';
import { TechData } from '../Data/TechData';

function Tech() {
  let params = useParams();
  function checktitle(obj){
    return obj.title==params.title
  }
  
  const tech = TechData.filter(checktitle)
  console.log(tech)
  let color = tech[0].color;

  const techs = tech[0].topics.map(t=><Link to={'/'+params.title+'/'+t}> <p className={classes.top} key={t}><div>{t}</div></p></Link> )

  return (
    <div >
      <div className={classes.h} style={{color:color}}>{params.title}</div>
      <div className={classes.tech}>{techs}</div>
    </div>
  );
}

export default Tech;
