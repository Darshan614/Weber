import React from 'react';
import classes from './Navbar.module.css';
import { List } from 'react-bootstrap-icons';
import { useState } from 'react';

function Navbar() {
  const [listshow, setshowlist] = useState(false);
  const showList = (event) => {
    console.log(listshow);
    setshowlist(!listshow);
  };

  return (
    <nav className={classes.nav}>
      <label className={classes.label} htmlFor="check">
        <List className={classes.cbtn} onClick={showList} />
      </label>
      <label className={classes.label}></label>
      <ul className={`${listshow ? classes.show : classes.lst}`}>
        <li className={classes.li}>
          <a className={classes.active} href="#">
            Home
          </a>
        </li>
        <li className={classes.li}>
          <a className={classes.link} href="#">
            About
          </a>
        </li>
        <li className={classes.li}>
          <a className={classes.link} href="#">
            Contact
          </a>
        </li>
        <li className={classes.li}>
          <a className={classes.link} href="#">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
