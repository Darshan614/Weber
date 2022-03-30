import React from 'react';
import classes from './Navbar.module.css';
import { List } from 'react-bootstrap-icons';
import { HandThumbsDown } from 'react-bootstrap-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [listshow, setshowlist] = useState(false);
  const [listhide, setlisthide] = useState(true);
  const showList = (event) => {
    setshowlist(!listshow);
  };

  const listhider = () => {
    setshowlist((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <nav className={classes.nav}>
      <label className={classes.label} htmlFor="check">
        <List className={classes.cbtn} onClick={showList} />
      </label>
      <label className={classes.label}></label>
      <ul className={`${listshow ? classes.show : classes.lst}`}>
        <li className={classes.li}>
          <NavLink
            onClick={listhider}
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink
            onClick={listhider}
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
            to="/Answers"
          >
            Answers
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink
            onClick={listhider}
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
            to="/Questions"
          >
            Questions
          </NavLink>
        </li>
        <li className={classes.li}>
          <NavLink
            onClick={listhider}
            className={(navData) =>
              navData.isActive ? classes.active : classes.link
            }
            to="/#"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
