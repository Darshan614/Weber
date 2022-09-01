import React from 'react';
import classes from './Navbar.module.css';
import { List } from 'react-bootstrap-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';

function Navbar() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
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
      {/* <label className={classes.label}></label> */}
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
        {!isLoggedIn && (
          <li className={classes.li}>
            <NavLink
              onClick={listhider}
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
              to="/Auth"
            >
              Login
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <span>
            {' '}
            <button className={classes.li} className={classes.active} className={classes.logout}>
              Logout
            </button>
          </span>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
