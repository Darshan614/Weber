import React, { useState, useRef, useContext } from 'react';
import AuthContext from '../store/auth-context';
import classes from './AuthForm.module.css';
import { Twitter, Google, Facebook } from 'react-bootstrap-icons';

function AuthForm() {
  const [login, setlogin] = useState(true);

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmpasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const formsubmithandler = (e) => {
    e.preventDefault();
    // console.log('Submit',usernameInputRef.current.value,passwordInputRef.current.value,passwordInputRef.current.value,confirmpasswordInputRef.current.value);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (login) {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaFr6y125Sih4yGCSGmnWkFFnn8ia1i84',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              alert('Failed to login! Check input');
            });
          }
        })
        .then((data) => {
          console.log(data);
          authCtx.login(data.idToken);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaFr6y125Sih4yGCSGmnWkFFnn8ia1i84',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            setlogin(false);
          } else {
            return res.json().then((data) => {
              alert('Failed to create a user! Check input');
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const formtogglehandler = (e) => {
    e.preventDefault();
    setlogin((state) => !state);
    window.scrollTo(0, 0);
  };

  const FormHeader = (props) => (
    <h2 className={classes.headerTitle}>{props.title}</h2>
  );

  const Form = (props) => (
    <div>
      <FormInput
        description="Email"
        placeholder="Enter your email"
        type="email"
        r={emailInputRef}
      />
      {!login && (
        <FormInput
          description="Username"
          placeholder="Enter your username"
          type="text"
          r={usernameInputRef}
        />
      )}
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        r={passwordInputRef}
      />
      {!login && (
        <FormInput
          description="Confirm Password"
          placeholder="Enter password again"
          type="password"
          r={confirmpasswordInputRef}
        />
      )}
      <FormButton
        onclickhandler={formsubmithandler}
        title={login ? 'Login' : 'SignUp'}
      />
    </div>
  );

  const FormButton = (props) => (
    <div className={classes.button} className={classes.row}>
      <button onClick={props.onclickhandler}>{props.title}</button>
    </div>
  );

  const FormInput = (props) => (
    <div className={classes.row}>
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} ref={props.r} />
    </div>
  );

  const OtherMethods = (props) => (
    <div className={classes.alternativeLogin}>
      <label>Or sign in with:</label>
      <div className={classes.iconGroup}>
        <Face />
        <Tweet />
        <Goog />
      </div>
    </div>
  );

  const Face = (props) => (
    <a href="#" className={classes.facebookIcon}>
      <Facebook />
    </a>
  );

  const Tweet = (props) => (
    <a href="#" className={classes.twitterIcon}>
      <Twitter />
    </a>
  );

  const Goog = (props) => (
    <a href="#" className={classes.googleIcon}>
      <Google />
    </a>
  );
  return (
    <div className={classes.loginform}>
      <FormHeader title={login ? 'Login' : 'SignUp'} />
      <Form />
      <OtherMethods />
      <div className={classes.alternativeLogin}>
        <label>{login ? 'New User?' : 'Existing user?'}</label>
      </div>
      <FormButton
        onclickhandler={formtogglehandler}
        title={!login ? 'Login' : 'SignUp'}
      />
    </div>
  );
}

export default AuthForm;
